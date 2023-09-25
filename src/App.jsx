import logo from './logo.svg';
import './App.css';
import MenuItem from './components/MenuItem';
import Configuration from './components/Configuration';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';


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
    <div className="flex w-screen h-screen ">
        <div className="flex flex-col w-1/5 text-white bg-[#20344E] border-r border-gray-300">
            <Sidebar navs={navs} />
        </div>

        <MainContent/>

        <Configuration/>

    </div>
  );
}

export default App;
