import { RefreshCw } from 'lucide-react';

const ResetAnimationButton = () => {
  const handleReset = () => {
    // Clear the session storage flag to show the animation again
    sessionStorage.removeItem('hasVisited');
    // Reload the page
    window.location.reload();
  };

  return (
    <button
      onClick={handleReset}
      className="fixed bottom-4 left-4 z-50 bg-mystic-gold text-white p-2 rounded-full shadow-lg hover:bg-mystic-gold/90 transition-all duration-300 hover:scale-110"
      title="Reset Logo Animation"
      aria-label="Reset Logo Animation"
    >
      <RefreshCw size={20} />
    </button>
  );
};

export default ResetAnimationButton;
