import React from 'react';
import BubbleChart from './BubbleChart';
import CustomChart from './CustomChart';
import data from '../data.json';

import OnBoarding from './OnBoarding';

export default function MainContent() {

  return (
    <div>
        <div
            className="h-[5rem] w-full flex justify-center items-center border">
            <span className="text-4xl  text-blue-950 font-bold herr-von">
                PDL - Bubble project
            </span>
        </div>
        <div className="w-full px-6 overflow-auto flex flex-col justify-center">

            {
                data.nodes.length != 0
                ? <BubbleChart data={data} />
                : (
                    /* onboarding screen */
                    <div className="mx-auto w-3/5 h-auto">
                        <OnBoarding/>
                    </div>
                )
            }

        </div>
    </div>
  );
}



