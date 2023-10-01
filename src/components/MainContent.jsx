import React from 'react';
import BubbleChart from './BubbleChart';

export default function MainContent() {
  return (
    <div className="w-4/5 p-6 overflow-auto bg-white">
      {
        <BubbleChart />
      }
      
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quam laborum quibusdam, dolorem mollitia sint, maxime nihil non quisquam eum ducimus? Sint suscipit ratione, enim omnis dolorem id eveniet porro.
      </div>
    </div>
  );
}