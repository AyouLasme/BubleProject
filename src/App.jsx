// import logo from './logo.svg';
import './App.css';
// import MenuItem from './components/MenuItem';
import Configuration from './components/Configuration';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import UploadBtn from './components/UploadBtn';


const navs = [
    {
        name: 'Fichier 1',
        link: '/'
      },
      {
        name: 'Fichier 2',
        link: '/'
      },
      {
        name: 'Fichier 3',
        link: '/'
      },
      {
        name: 'Fichier 4',
        link: '/'
      },
      {
        name: 'Fichier 5',
        link: '/'
      }
];



function App() {

  const sidebarWidth = 15;
  // -[#20344E]
  return (
    <div id="content" className="flex">
        <div id="sidebar" className={`w-[${sidebarWidth}rem] text-white bg-[#20344E]`}>
            <Sidebar navs={navs} />
        </div>

        <div
          id="main-content"
          style={{left: `${sidebarWidth}rem`, right: 0}}
          className="shadow">
          <MainContent/>

          {/* menu */}
          <div className="fixed bottom-4 right-4 flex flex-col items-center justify-center">
            <UploadBtn />
            <Configuration/>
          </div>
        </div>


    </div>
  );
}

export default App;
