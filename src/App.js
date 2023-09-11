
import './App.css';
import Prediction from './components/prediction';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import AboutZodiac from './components/AboutZodiac/aboutzodiac';
// import {ReactComponent as Virgo} from './SVG/virgo.svg';


function App() {
  // const [overlayOpen, setOverlayOpen] = useState(false);
  // const [overlayClicked, setOverlayClicked] = useState(false)

  // const handleOverlayClick = () => {
  //   setOverlayClicked(!overlayClicked);
  //   setOverlayOpen(!overlayOpen);


  return (
    <div className="App relative h-screen w-screen">
      <BrowserRouter>
        <div className='max-w-[1800px] mx-auto'>
          <div className={`body-gradient-bg h-screen w-full relative`}>

            <Routes>
              <Route path="/home" element={<Prediction />}></Route>
              <Route path="/home/pisces" element={<AboutZodiac />}></Route>
            </Routes>


          </div>

        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
