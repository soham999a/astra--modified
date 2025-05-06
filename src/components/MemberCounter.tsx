import { useState, useEffect } from 'react';
import { collection, query, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Users } from 'lucide-react';

interface MemberCounterProps {
  className?: string;
  showIcon?: boolean;
  iconSize?: number;
  animate?: boolean;
}

const MemberCounter = ({ 
  className = '', 
  showIcon = true, 
  iconSize = 24,
  animate = true 
}: MemberCounterProps) => {
  const [memberCount, setMemberCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [displayCount, setDisplayCount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMemberCount = async () => {
      try {
        setLoading(true);
        
        // Create a query against the "members" collection
        const membersRef = collection(db, 'members');
        const querySnapshot = await getDocs(membersRef);
        
        // Set the actual count
        const count = querySnapshot.size;
        setMemberCount(count);
        
        // Start with 0 for animation
        setDisplayCount(0);
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching member count:', err);
        setError('Failed to load member count');
        setLoading(false);
      }
    };

    // Set up real-time listener for member count updates
    const setupRealTimeListener = () => {
      try {
        const membersRef = collection(db, 'members');
        const unsubscribe = onSnapshot(membersRef, (snapshot) => {
          const count = snapshot.size;
          setMemberCount(count);
        });
        
        // Return the unsubscribe function to clean up on component unmount
        return unsubscribe;
      } catch (err) {
        console.error('Error setting up real-time listener:', err);
        setError('Failed to set up real-time updates');
        return () => {};
      }
    };

    fetchMemberCount();
    const unsubscribe = setupRealTimeListener();
    
    return () => {
      unsubscribe();
    };
  }, []);

  // Animate the counter
  useEffect(() => {
    if (!loading && animate && displayCount < memberCount) {
      const animationDuration = 2000; // 2 seconds
      const interval = 50; // Update every 50ms
      const increment = Math.ceil(memberCount / (animationDuration / interval));
      
      const timer = setInterval(() => {
        setDisplayCount(prev => {
          const next = prev + increment;
          return next >= memberCount ? memberCount : next;
        });
      }, interval);
      
      return () => clearInterval(timer);
    }
  }, [loading, memberCount, displayCount, animate]);

  return (
    <div className={`flex items-center ${className}`}>
      {showIcon && (
        <div className="mr-3 text-mystic-gold">
          <Users size={iconSize} className="animate-pulse-glow" />
        </div>
      )}
      <div>
        {loading ? (
          <div className="h-8 w-16 bg-gray-200 animate-pulse rounded"></div>
        ) : error ? (
          <p className="text-red-500 text-sm">{error}</p>
        ) : (
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-mystic-gold">
              {animate ? displayCount.toLocaleString() : memberCount.toLocaleString()}
            </span>
            <span className="text-sm text-charcoal/70">Members</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberCounter;
