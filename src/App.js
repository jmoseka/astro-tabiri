
import './App.css';
import Prediction from './components/prediction';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import AboutZodiac from './components/AboutZodiac/aboutzodiac';
import PageAnimation from './components/PageAnimation/pageAnimation';


function App() {

  return (
    <div className="App body-gradient-bg flex flex-col items-center justify-center relative h-fit w-screen">
      <BrowserRouter>
        <div className='max-w-[1800px] h-fit'>
          <div className={`h-screen w-full relative`}>
            <PageAnimation />

            <Routes>
              <Route path="*" element={<Prediction />}></Route>
              <Route path="/:name" element={<AboutZodiac />}></Route>

            </Routes>


          </div>

        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
