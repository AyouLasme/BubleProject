import { useEffect, useRef,useState } from "react";
import HistoryItem from "./HistoryItem";
import UploadBtn from "./UploadBtn";

 export default function Sidebar(props) {

    return (
    <div className="flex flex-col">
        <div className="h-[5rem] w-[15rem] fixed custom-backdrop"  style={{left: 0, top: 0}}>
            <span className="block mx-auto title text-4xl text-center my-5">
                Bubble
            </span>
        </div>

        {/* The vertical margin is necessary because the logo at the
        top and the button at the bottom are fixed in relation to the screen. */}
        
        <div className="my-[5rem] h-full flex flex-col flex-grow p-4 overflow-auto">
            {/* TOP MENU */}
            {
                props.navs.length > 0 ? <div className='flex flex-col'  >
                {
                    props.navs.map((nav,i) =>  <HistoryItem item={nav} key={i} />)
                }
            </div> :  <div className="mt-[5rem] h-auto text-center flex flex-col justify-center items-center">
                <img src="./documents.svg" className="" alt="" srcSet="" />
                <span className="text-center">
                    Nous garderons votre historique à portée de main. <br />
                    {/* <span className="mt-8 font-semibold">
                        Let's start !
                    </span> */}
                </span>
            </div>
            }
            

           
           
            {/* BOTTOM MENU */}
        </div>

        {/* <div
            className="h-[5rem] w-[15rem] bg-[#162538] fixed flex items-center cursor-pointer justify-center"
            style={{left: 0, bottom: 0}}>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                </svg>
                <span  className="ml-2 leading-none font-bold">
                    Importer un fichier
                </span>

        </div> */}


    </div>)
}