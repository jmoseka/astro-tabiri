import { ReactComponent as Virgo } from '../images/SVG/noun-virgo-3535447.svg';
import { ReactComponent as Pisces } from '../images/SVG/pisces.svg';
import { ReactComponent as Aries } from '../images/SVG/noun-aries-3535441.svg';
import { ReactComponent as Germini } from '../images/SVG/noun-gemini-3535445.svg';
// import {ReactComponent as Leo} from '../images/SVG/noun-leo-734745.svg';
// import {ReactComponent as Sagitarus} from '../images/SVG/noun-sagittarius-734752.svg';
import { ReactComponent as Cancer } from '../images/SVG/noun-cancer-3535446.svg';
// import {ReactComponent as Taurus} from '../images/SVG/noun-taurus-734759.svg';
import { ReactComponent as Capricorn } from '../images/SVG/noun-capricorn-3535452.svg';

// import {ReactComponent as Libra} from '../images/SVG/noun-libra-734748.svg';
// import {ReactComponent as Scorpio} from '../images/SVG/noun-scorpius-734747.svg';
// import {ReactComponent as Aquarius} from '../images/SVG/noun-aquarius-734739.svg';

import './my-prediction.css'

import './my-prediction.css'

function Prediction() {
  return (
    <div className="container mx-auto h-full w-full">
      <div className='pt-12 relative '>


        <div className='mx-auto h-[35rem] border w-5/7 '>
        

          <div className=' grid relative grid-cols-4 firstGrid w-4/5 mx-auto'>

            <div className="const-body  text-white text-sm">
              <Pisces className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>Pisces</p>
                <p className='const-date'>Aug 23 - Sept 23</p>
              </div>
            </div>
          
            <div className="const-body aries text-white text-sm">
              <Pisces className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>aries</p>
                <p className='const-date'>Aug 23 - Sept 23</p>
              </div>
            </div>
            

        
            <div className="const-body sagittarius text-white text-sm">
              <Pisces className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>sagittarius</p>
                <p className='const-date'>Aug 23 - Sept 23</p>
              </div>
            </div>
            
          
            <div className="const-body libra text-white text-sm">
              <Pisces className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>libra</p>
                <p className='const-date'>Aug 23 - Sept 23</p>
              </div>
            </div>
            



            


          </div>


          <div className='middleGrid grid grid-rows-3 grid-cols-4'>

          <div className="const-body  text-white text-sm">
              <Pisces className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>Pisces</p>
                <p className='const-date'>Aug 23 - Sept 23</p>
              </div>
            </div>


            <div className="const-body  text-white text-sm col-span-2 row-span-3">
              <Pisces className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>Pisces</p>
                <p className='const-date'>Aug 23 - Sept 23</p>
              </div>
            </div>

            <div className="const-body  text-white text-sm">
              <Pisces className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>Pisces</p>
                <p className='const-date'>Aug 23 - Sept 23</p>
              </div>
            </div>

            <div className=''>
            <div className="const-body mr-24   text-white text-sm">
              <Pisces className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>Virgo</p>
                <p className='const-date'>Aug 23 - Sept 23</p>
              </div>
            </div>
            </div>

            <div className="const-body  text-white text-sm">
              <Pisces className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>Pisces</p>
                <p className='const-date'>Aug 23 - Sept 23</p>
              </div>
            </div>

            <div className="const-body border  text-white text-sm">
              <Pisces className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>Pisces</p>
                <p className='const-date'>Aug 23 - Sept 23</p>
              </div>
            </div>

            <div className="const-body  text-white text-sm">
              <Pisces className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>Pisces</p>
                <p className='const-date'>Aug 23 - Sept 23</p>
              </div>
            </div>

  



          </div>


        </div>

      </div>
    </div>
  );
}

export default Prediction;