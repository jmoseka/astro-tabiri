import { ReactComponent as Virgo } from '../images/SVG/noun-virgo-constellation-5421423.svg';
import { ReactComponent as Pisces } from '../images/SVG/noun-pisces-constellation-5421424.svg';
import { ReactComponent as Aries } from '../images/SVG/noun-aries-constellation-5421421.svg';
import { ReactComponent as Germini } from '../images/SVG/noun-gemini-constellation-5421422.svg';
// import {ReactComponent as Leo} from '../images/SVG/noun-leo-734745.svg';
// import {ReactComponent as Sagitarus} from '../images/SVG/noun-sagittarius-734752.svg';
import {ReactComponent as Cancer} from '../images/SVG/noun-cancer-constellation-5502368.svg';
// import {ReactComponent as Taurus} from '../images/SVG/noun-taurus-734759.svg';
import {ReactComponent as Capricorn} from '../images/SVG/noun-capricorn-constellation-5421417.svg';
// import {ReactComponent as Libra} from '../images/SVG/noun-libra-734748.svg';
// import {ReactComponent as Scorpio} from '../images/SVG/noun-scorpius-734747.svg';
// import {ReactComponent as Aquarius} from '../images/SVG/noun-aquarius-734739.svg';

import './my-prediction.css'

import './my-prediction.css'

function Prediction() {
  return (
    <div className="container mx-auto h-full w-full">
      <div className='pt-12  '>

        <div className='mx-auto h-[33rem] border relative w-5/6'>

        <div className="const-body aries text-white text-sm">
            <Aries className='constelation text-white' />
            <div>
              <p className='const-title uppercase'>aries</p>
              <p className='const-date'>Aug 23 - Sept 23</p>
            </div>
          </div>

          <div className="const-body pisces text-white text-sm">
            <Pisces className='constelation text-white' />
            <div>
              <p className='const-title uppercase'>Pisces</p>
              <p className='const-date'>Aug 23 - Sept 23</p>
            </div>
          </div>

          

          <div className="const-body gemini text-white text-sm">
            <Germini className='constelation text-white' />
            <div>
              <p className='const-title uppercase'>Gemini</p>
              <p className='const-date'>Aug 23 - Sept 23</p>
            </div>
          </div>

          <div className="const-body capricorn text-white text-sm">
            <Capricorn className='constelation text-white' />
            <div>
              <p className='const-title uppercase'>Gemini</p>
              <p className='const-date'>Aug 23 - Sept 23</p>
            </div>
          </div>

          <div className="const-body cancer text-white text-sm">
            <Cancer className='constelation text-white' />
            <div>
              <p className='const-title uppercase'>Gemini</p>
              <p className='const-date'>Aug 23 - Sept 23</p>
            </div>
          </div>

          

        </div>



      </div>
    </div>
  );
}

export default Prediction;