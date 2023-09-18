import logo from './logo.svg';
import './App.css';
import MenuItem from './MenuItem';


const navs = [
    {
        name: 'Uploader un fichier',
        link: '/'
      },
      {
        name: 'another',
        link: '/'
      }
];

function App() {
  return (
    <div class="flex w-screen h-screen ">

        <div class="flex flex-col w-1/5 text-white bg-[#20344E] border-r border-gray-300">
            <button class="relative text-sm focus:outline-none group">
                <div class="flex items-center justify-between w-full h-16 px-4">
                    <a class="flex items-center flex-shrink-0 h-10 px-3 text-sm font-medium border rounded-lg"
                        href="#">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span class="ml-2 leading-none">Uploader un fichier</span>
                    </a>
                    {/* <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg> */}
                </div>

            </button>
            <div class="flex flex-col flex-grow p-4 overflow-auto">
                {/* TOP MENU */}
                <div className='flex flex-col' >
                    {
                        navs.map(nav => <MenuItem item={nav} />)
                    }

                </div>

                {/* BOTTOM MENU */}
                <div className='flex mt-auto'>
                    <a class="flex items-center flex-shrink-0 h-10 px-3 text-sm font-medium bg-gray-200 rounded hover:bg-gray-300"
                        href="#">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span class="ml-2 leading-none">Uploader un fichier</span>
                    </a>
                </div>

            </div>
        </div>

        {/* <div class="flex flex-col flex-grow">
            <div class="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-300">
                <h1 class="text-lg font-medium">Page Title</h1>
                <button class="flex items-center justify-center h-10 px-4 ml-auto text-sm font-medium rounded hover:bg-gray-300">
                    Action 1
                </button>
                <button class="flex items-center justify-center h-10 px-4 ml-2 text-sm font-medium bg-gray-200 rounded hover:bg-gray-300">
                    Action 2
                </button>
                <button class="relative ml-2 text-sm focus:outline-none group">
                    <div class="flex items-center justify-between w-10 h-10 rounded hover:bg-gray-300">
                        <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </div>
                      <div class="absolute right-0 flex-col items-start hidden w-40 pb-1 bg-white border border-gray-300 shadow-lg group-focus:flex">
                          <a class="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
                          <a class="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
                          <a class="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
                      </div>
                  </button>
              </div>
              <div class="flex-grow p-6 overflow-auto bg-gray-200">
                  <div class="grid grid-cols-3 gap-6">
                  </div>
              </div>
        </div> */}

</div>



  );
}

export default App;
