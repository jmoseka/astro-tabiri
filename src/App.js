import './App.css';
import NavMenu from './components/NavMenu/nav-menu';
import Prediction from './components/prediction';
// import {ReactComponent as Virgo} from './SVG/virgo.svg';


function App() {
  return (
    <div className="App relative h-screen w-screen">
      <div className='max-w-[1800px] mx-auto h-full'>
        <div className='body-gradient-bg h-full' >
          <NavMenu />
          <Prediction />
        
        </div>

      </div>
    </div>
  );
}

export default App;
