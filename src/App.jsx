// import logo from './logo.svg';
import './App.css';
// import MenuItem from './components/MenuItem';
import Configuration from './components/Configuration';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import UploadBtn from './components/UploadBtn';
import { useState,useEffect } from 'react';
import { getKeys } from "./store";

// const navs = [
//     {
//         name: 'Fichier 1',
//         link: '/'
//       },
//       {
//         name: 'Fichier 2',
//         link: '/'
//       },
//       {
//         name: 'Fichier 3',
//         link: '/'
//       },
//       {
//         name: 'Fichier 4',
//         link: '/'
//       },
//       {
//         name: 'Fichier 5',
//         link: '/'
//       }
// ];

function App() {

  const [navs, setNavs] = useState([]);

  useEffect( () => {
    getKeys().then((result)=>{
      const navElements = []
      result.forEach(name => {
        navElements.push({
          name : name,
          link : `/${name}`
        })
      });
      setNavs(navElements)
  })
  }, []);



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

            {}

          <MainContent/>

        </div>


    </div>
  );
}

export default App;
