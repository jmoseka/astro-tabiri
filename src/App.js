
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
    <div className="App relative h-fit w-screen">
      <BrowserRouter>
        <div className='max-w-[1800px] h-fit mx-auto'>
          <div className={`h-screen w-full relative`}>

            <Routes>
              <Route path="*" element={<Prediction />}></Route>
              <Route path="/home" element={<Prediction />}></Route>
              <Route path="/home/pisces" element={<AboutZodiac />}></Route>
              <Route path="/home/aries" element={<AboutZodiac />}></Route>
              <Route path="/home/gemini" element={<AboutZodiac />}></Route>
              <Route path="/home/capricorn" element={<AboutZodiac />}></Route>
              <Route path="/home/virgo" element={<AboutZodiac />}></Route>
              <Route path="/home/taurus" element={<AboutZodiac />}></Route>
              <Route path="/home/leo" element={<AboutZodiac />}></Route>
              <Route path="/home/sagittarius" element={<AboutZodiac />}></Route>
              <Route path="/home/aquarius" element={<AboutZodiac />}></Route>
              <Route path="/home/cancer" element={<AboutZodiac />}></Route>
              <Route path="/home/scorpio" element={<AboutZodiac />}></Route>
              <Route path="/home/libra" element={<AboutZodiac />}></Route>
            </Routes>


          </div>

        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
