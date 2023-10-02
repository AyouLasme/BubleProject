import MenuItem from "./MenuItem";

export default function Sidebar(props) {
    return (<>
        <button className="relative text-sm focus:outline-none group">
            <div className="flex items-center justify-between w-full h-16 px-4">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="flex items-center flex-shrink-0 h-10 px-3 text-sm font-medium border rounded-lg"
                    href="#">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span className="ml-2 leading-none">Uploader un fichier</span>
                </a>
            </div>
        </button>
        <div className="flex flex-col flex-grow p-4 overflow-auto">
            {/* TOP MENU */}
            <div className='flex flex-col' >
                {
                    props.navs.map(nav => <MenuItem item={nav} key={nav} />)
                }
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
    </>)
}