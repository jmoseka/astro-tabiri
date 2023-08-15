import './App.css';
import Prediction from './components/myprediction';
// import {ReactComponent as Virgo} from './SVG/virgo.svg';


function App() {
  return (
    <div className="App h-screen w-screen">
      <div className='max-w-[1800px] mx-auto h-full'>
        <div className='body-gradient-bg h-full' >
          <Prediction />
        </div>

      </div>
    </div>
  );
}

export default App;
