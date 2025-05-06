import React from 'react';

interface LoShuGridProps {
  numbers?: number[][];
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const defaultGrid = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 6]
];

const LoShuGrid: React.FC<LoShuGridProps> = ({
  numbers = defaultGrid,
  size = 'md',
  className = ''
}) => {
  // Size classes for the grid cells
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-lg',
    lg: 'w-16 h-16 text-xl'
  };

  return (
    <div className={`inline-block ${className}`}>
      <div className="text-center mb-2 font-medium text-mystic-gold">Lo-Shu Grid</div>
      <div className="grid grid-cols-3 gap-1 p-2 bg-white rounded-lg shadow-md">
        {numbers.map((row, rowIndex) => (
          <React.Fragment key={`row-${rowIndex}`}>
            {row.map((num, colIndex) => (
              <div
                key={`cell-${rowIndex}-${colIndex}`}
                className={`${sizeClasses[size]} flex items-center justify-center border border-mystic-gold/30 rounded-md font-semibold ${
                  num === 5 ? 'bg-mystic-gold/10' : ''
                }`}
              >
                {num}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default LoShuGrid;
