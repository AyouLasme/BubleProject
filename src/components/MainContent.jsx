import React from 'react';
import BubbleChart from './BubbleChart';
import CustomChart from './CustomChart';
import data from '../data.json';

export default function MainContent() {

  return (
    <div className='border h-screen w-screen'>
        <div className='w-full my-14 flex justify-center items-center'>
            <span className="text-4xl text-blue-950 font-bold">
                Bubbles
            </span>
        </div>
        <div className="w-full p-6 overflow-auto bg-white flex flex-col justify-center">

            {/* onboarding screen */}
            <div className='w-full h-auto'>

                {/* navigation and illustration */}
                <div className=' flex justify-around'>
                    <div className='w-1/7 flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                        </svg>
                    </div>
                    <div className=' w-5/7'>
                        <img src="./splash/splash-1.svg" alt="" srcset="" />
                    </div>
                    <div className=' w-1/7 flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                    </div>
                </div>

                {/* indicators */}
                <div className='my-6 w-full flex justify-center items-center gap-2'>
                    <span className='w-4 h-2.5 bg-slate-300 rounded-full'></span>
                    <span className='w-14 h-2.5 bg-blue-950 rounded'></span>
                    <span className='w-4 h-2.5 bg-slate-300 rounded-full'></span>
                </div>

                <div className='w-full mt-14 flex justify-center items-center'>
                    <button className='bg-blue-950 hover:bg-slate-400 transition-all text-white px-4 py-2 rounded'>
                        Importer un fichier
                    </button>
                </div>

            </div>

            {/* <BubbleChart data={data} /> */}
            <div>
            </div>
        </div>
    </div>
  );
}



