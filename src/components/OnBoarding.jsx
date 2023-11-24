import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function OnBoarding() {



    const onboardings = [
        "./onboarding/screen-1.svg",
        "./onboarding/screen-2.svg",
        "./onboarding/screen-3.svg",
    ];
    return <>
        <Carousel
            autoPlay={true}
            interval={2500}
            infiniteLoop={true}
            showThumbs={false}
            renderIndicator={(clickHandler, isSelected, index, label) => {
                // clickHandler
                return (
                    <li className={`transition-all delay-300 mr-1 inline-block w-${isSelected ? 10: 4 } h-2 bg-${isSelected ? 'blue-950' : 'slate-300'} rounded`}></li>
                );
            }}
        >

            {
                onboardings.map((imgSrc, index) => <div key={index} ><img alt={`${imgSrc}`} src={`${imgSrc}`}/></div>)
            }
        </Carousel>


                {/* <div className='w-full mt-14 flex justify-center items-center'>
                    <button className='bg-blue-950 hover:bg-slate-400 transition-all text-white px-4 py-2 rounded'>
                        Importer un fichier
                    </button>
                </div> */}
    </>
}