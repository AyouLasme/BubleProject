import MenuItem from "./MenuItem";

export default function Sidebar(props) {
    return (
    <div className="flex flex-col">
        <div>
            <button className="h-[5rem] w-[15rem] bg-[#1b2c43] text-sm focus:outline-none group" style={{position: 'fixed'}}>
                <div className="flex items-center justify-between w-full h-16 px-4">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="flex items-center flex-shrink-0 h-10 px-3 text-sm font-medium border rounded-lg"
                        href="#">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span className="ml-2 leading-none">
                            Importer un fichier
                        </span>
                    </a>
                </div>
            </button>
        </div>

        <div className="mt-[10rem] h-2/3 flex flex-col flex-grow p-4 overflow-auto">
            {/* TOP MENU */}

            {/* <div className='flex flex-col' >
                {
                    props.navs.map((nav,i) =>  <MenuItem item={nav} key={i} />)
                }
            </div> */}


            <div className="mt-32 h-auto py-4 text-center flex flex-col justify-center items-center">
                <img src="./documents.svg" className="" alt="" srcSet="" />
                <span className="text-center">
                    Nous garderons votre historique à portée de main. <br />
                    {/* <span className="mt-8 font-semibold">
                        Let's start !
                    </span> */}
                </span>
            </div>
            {/* BOTTOM MENU */}
            {/* <div className='flex mt-auto'>
                <a class="flex items-center flex-shrink-0 h-10 px-3 text-sm font-medium bg-gray-200 rounded hover:bg-gray-300"
                    href="#">
                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span class="ml-2 leading-none">Uploader un fichier</span>
                </a>
            </div> */}
        </div>
    </div>)
}