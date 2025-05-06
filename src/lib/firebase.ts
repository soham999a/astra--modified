import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, onSnapshot, QuerySnapshot, DocumentData } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Check if we're in development mode
const isDevelopment = import.meta.env.DEV;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Mock Firestore for development
class MockFirestore {
  private collections: Record<string, any[]> = {
    members: Array(125).fill(0).map((_, i) => ({
      id: `member-${i}`,
      name: `Member ${i}`,
      email: `member${i}@example.com`,
      joinDate: new Date(Date.now() - Math.random() * 10000000000).toISOString()
    }))
  };

  collection(path: string) {
    return {
      path,
      // Mock getDocs
      getDocs: async () => {
        const docs = this.collections[path] || [];
        return {
          size: docs.length,
          docs: docs.map(doc => ({
            id: doc.id,
            data: () => doc
          }))
        } as unknown as QuerySnapshot<DocumentData>;
      },
      // Mock onSnapshot
      onSnapshot: (callback: (snapshot: any) => void) => {
        const docs = this.collections[path] || [];
        // Simulate initial snapshot
        callback({
          size: docs.length,
          docs: docs.map(doc => ({
            id: doc.id,
            data: () => doc
          }))
        });

        // Simulate adding a new member every 10 seconds
        const interval = setInterval(() => {
          const newIndex = this.collections[path].length;
          this.collections[path].push({
            id: `member-${newIndex}`,
            name: `Member ${newIndex}`,
            email: `member${newIndex}@example.com`,
            joinDate: new Date().toISOString()
          });

          callback({
            size: this.collections[path].length,
            docs: this.collections[path].map(doc => ({
              id: doc.id,
              data: () => doc
            }))
          });
        }, 10000);

        // Return unsubscribe function
        return () => clearInterval(interval);
      }
    };
  }
}

// Initialize Firebase or mock
let app, db, auth;

if (isDevelopment) {
  console.log('Using mock Firebase services for development');
  app = null;
  db = new MockFirestore() as unknown as ReturnType<typeof getFirestore>;
  auth = null;
} else {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  auth = getAuth(app);
}

export { app, db, auth };
