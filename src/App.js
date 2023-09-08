import { useState } from 'react';
import './App.css';
import NavMenu from './components/NavMenu/nav-menu';
import Prediction from './components/prediction';
// import {ReactComponent as Virgo} from './SVG/virgo.svg';


function App() {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [overlayClicked, setOverlayClicked] = useState(false)

  const handleOverlayClick = () => {
    setOverlayClicked(!overlayClicked)
    setOverlayOpen(!overlayOpen)
  }


  return (
    <div className="App relative h-screen w-screen">
      <div className='max-w-[1800px] mx-auto'>
        <div className={`body-gradient-bg h-screen w-full relative`}>
          <div onClick={() => handleOverlayClick()}
            className={`${overlayOpen ? 'overlay' : ''}`}></div>
          <NavMenu isOverlayClick={overlayClicked} updateOverlayState={setOverlayOpen} />
          <Prediction />

        </div>

      </div>
    </div>
  );
}

export default App;
