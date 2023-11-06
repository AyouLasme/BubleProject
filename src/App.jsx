// import logo from './logo.svg';
import './App.css';
// import MenuItem from './components/MenuItem';
import Configuration from './components/Configuration';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';


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
    <div className="flex">
        <div className={`w-[${sidebarWidth}rem] sidebar text-white bg-[#20344E]`}>
            <Sidebar navs={navs} />
        </div>

        <div className={`ml-[${sidebarWidth}rem] w-full`}>
          <MainContent/>
          <Configuration/>
        </div>


    </div>
  );
}

export default App;
