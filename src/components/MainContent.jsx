import React from 'react';
import BubbleChart from './BubbleChart';
import CustomChart from './CustomChart';
import data from '../data.json';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function MainContent() {

  return (
    <div>
        <div className='w-full my-14 flex justify-center items-center'>
            <span className="text-4xl text-blue-950 font-bold">
                Bubbles
            </span>
        </div>
        <div className="w-full p-6 overflow-auto bg-white flex flex-col justify-center">

            {/* onboarding screen */}
            <div className=' mx-auto w-3/5 h-auto'>

                <Carousel
                    autoPlay={true}
                    interval={2500}
                    infiniteLoop={true}
                    showThumbs={false}
                    // renderIndicator={}
                >
                    <div>
                        <img src="./splash/splash-1.svg" />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                    <div>
                        <img src="./splash/splash-1.svg" />
                        {/* <p className="legend">Legend 2</p> */}
                    </div>
                    <div>
                        <img src="./splash/splash-1.svg" />
                        {/* <p className="legend">Legend 3</p> */}
                    </div>
                </Carousel>


                {/* indicators */}
                {/* <div className='my-6 w-full flex justify-center items-center gap-2'>
                    <span className='w-4 h-2.5 bg-slate-300 rounded-full'></span>
                    <span className='w-14 h-2.5 bg-blue-950 rounded'></span>
                    <span className='w-4 h-2.5 bg-slate-300 rounded-full'></span>
                </div> */}

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



