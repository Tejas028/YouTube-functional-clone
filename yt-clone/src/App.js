import { useState } from 'react';
import './App.css';
import Navbar from './Containers/Navbar';
import ClosedSidebar from './Containers/Sidebars/ClosedSidebar';
import OpenSidebar from './Containers/Sidebars/OpenSidebar';
import HomeSignedOut from './Containers/Home/HomeSignedOut';
import HomeSignedIn from './Containers/Home/HomeSignedIn';

function App() {

  const [hamBerger, setHamBerger] = useState(false);
  const RenderSidebar = ({ isOpen }) => (
    isOpen ? <OpenSidebar /> : <ClosedSidebar />
  );

  const [signedIn, setSignedIn] = useState(false);
  const RenderHome = ({ isSignedIn }) => (
    isSignedIn ?  <HomeSignedIn /> : <HomeSignedOut /> 
  );

  return (
    <>
      <Navbar openSidebar={hamBerger} setOpenSidebar={setHamBerger}></Navbar>
      <RenderSidebar isOpen={hamBerger} ></RenderSidebar>
      <RenderHome isSignedIn={signedIn} ></RenderHome>
    </>
  );
}

export default App;
