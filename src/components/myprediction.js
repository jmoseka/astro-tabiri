import { ReactComponent as Virgo } from '../images/SVG/noun-virgo-constellation-5421423.svg';
import { ReactComponent as Pisces } from '../images/SVG/noun-pisces-constellation-5421424.svg';
import { ReactComponent as Aries } from '../images/SVG/noun-aries-constellation-5421421.svg';
import { ReactComponent as Germini } from '../images/SVG/noun-gemini-constellation-5421422.svg';
// import {ReactComponent as Leo} from '../images/SVG/noun-leo-734745.svg';
// import {ReactComponent as Sagitarus} from '../images/SVG/noun-sagittarius-734752.svg';
// import {ReactComponent as Cancer} from '../images/SVG/noun-cancer-734760.svg';
// import {ReactComponent as Taurus} from '../images/SVG/noun-taurus-734759.svg';
// import {ReactComponent as Capricorn} from '../images/SVG/noun-capricornus-734761.svg';
// import {ReactComponent as Libra} from '../images/SVG/noun-libra-734748.svg';
// import {ReactComponent as Scorpio} from '../images/SVG/noun-scorpius-734747.svg';
// import {ReactComponent as Aquarius} from '../images/SVG/noun-aquarius-734739.svg';

import './my-prediction.css'

import './my-prediction.css'

function Prediction() {
  return (
    <div className="container mx-auto h-full w-full">


      <div className='pt-12'>

        <div className="mt-4 grid grid-cols-4 bg-blue gap-2">

          <div className="const-body text-white text-sm grid justify-center">
            <Virgo className='constelation text-white' />
            <div>
              <p>VIRGO</p>
              <p>August 23 - September 23</p>
            </div>
          </div>

          <div className="const-body text-white text-sm grid justify-center">
            <Virgo className='constelation text-white' />
            <div>
              <p>VIRGO</p>
              <p>August 23 - September 23</p>
            </div>
          </div>

          <div className="const-body text-white text-sm grid justify-center">
            <Virgo className='constelation text-white' />
            <div>
              <p>VIRGO</p>
              <p>August 23 - September 23</p>
            </div>
          </div>

          <div className="const-body text-white text-sm grid grid-col justify-center">
            <Virgo className='constelation text-white' />
            <div>
              <p>VIRGO</p>
              <p>August 23 - September 23</p>
            </div>
          </div>


          
          {/* <div className=""><Leo  className='constelation text-white'/></div>
            <div className= "item0 text-center m-auto text-white bg-pink-400">Today, your cosmic vitality is at its peak! Embrace the energy of the stars to embark on invigorating health routines. Engage in activities that connect you with nature and recharge your spirit. Take a moment to meditate and find harmony within the swirling cosmic energies. Your body and mind will thank you for the cosmic self-care!</div>
            
            <div className=""><Sagitarus  className='constelation text-white'/>Sagitarus</div>
            <div className=""><Aquarius  className='constelation text-white'/>Aquarius</div>
            <div className=""><Scorpio  className='constelation text-white'/>Scorpio</div>
            <div className=""><Libra className='constelation text-white'/>Libra</div>
            <div className=""><Taurus  className='constelation text-white'/>Taurus</div>
            <div className=""><Cancer  className='constelation text-white'/>Cancer</div>
            <div className=""><Capricorn  className='constelation text-white'/>Capricorn</div> */}
        </div>

      </div>

    </div>
  );
}

export default Prediction;