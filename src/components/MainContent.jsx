import React from 'react';
import BubbleChart from './BubbleChart';
import CustomChart from './CustomChart';
import data from '../data.json';

import OnBoarding from './OnBoarding';

export default function MainContent() {

  return (
    <div>
        <div className='w-full my-14 flex justify-center items-center'>
            <span className="text-4xl text-blue-950 font-bold">
                Bubbles
            </span>
        </div>
        <div className="w-full p-6 overflow-auto bg-white flex flex-col justify-center">

            {
                data.nodes.length != 0
                ? <BubbleChart data={data} />
                : (
                    /* onboarding screen */
                    <div className=' mx-auto w-3/5 h-auto'>
                        <OnBoarding/>
                    </div>
                )
            }




            <div>
            </div>
        </div>
    </div>
  );
}



