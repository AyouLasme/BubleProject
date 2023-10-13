import React from 'react';
import BubbleChart from './BubbleChart';

export default function MainContent() {
  return (
    <div className="w-4/5 p-6 overflow-auto bg-white">
      {
        <BubbleChart />
      }
      
      <div>
      </div>
    </div>
  );
}



