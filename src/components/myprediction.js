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


        <div className='mx-auto h-[35rem] border w-5/7 grid grid-cols-1 grid-rows-4'>

          <div className=' grid grid-cols-4 firstGrid w-4/5 mx-auto'>

            <div className="const-body  items-center  text-white text-sm">
              <Pisces className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>Pisces</p>
                <p className='const-date'>Aug 23 - Sept 23</p>
              </div>
            </div>

            <div className="const-body  items-center aries text-white text-sm">
              <Pisces className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>aries</p>
                <p className='const-date'>Aug 23 - Sept 23</p>
              </div>
            </div>



            <div className="const-body  items-center sagittarius text-white text-sm">
              <Pisces className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>sagittarius</p>
                <p className='const-date'>Aug 23 - Sept 23</p>
              </div>
            </div>


            <div className="const-body  items-center libra text-white text-sm">
              <Pisces className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>libra</p>
                <p className='const-date'>Aug 23 - Sept 23</p>
              </div>
            </div>







          </div>


          <div className='middleGrid row-span-3 grid grid-rows-3 grid-cols-4'>

            <div className='flex flex-col items-end'>
              <div className="const-body items-center  text-white text-sm">
                <Pisces className='constelation  text-white' />
                <div>
                  <p className='const-title uppercase'>Capricorn</p>
                  <p className='const-date'>Aug 23 - Sept 23</p>
                </div>
              </div>
            </div>


            <div className="w-full const-body items-center justify-center text-white text-sm col-span-2 row-span-3">
              <Pisces className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'></p>
                <p className='const-date'>Aug 23 - Sept 23</p>
              </div>
            </div>


            <div className='flex flex-col items-start'>
            <div className="const-body items-center  text-white text-sm">
              <Pisces className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>Aquarius</p>
                <p className='const-date'>Aug 23 - Sept 23</p>
              </div>
            </div>
            </div>

            

            <div className="const-body justify-center items-center mb-3  text-white text-sm">
              <Pisces className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>Virgo</p>
                <p className='const-date'>Aug 23 - Sept 23</p>
              </div>
            </div>

            <div className="const-body justify-center items-center  text-white text-sm">
              <Pisces className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>Scorpio</p>
                <p className='const-date'>Aug 23 - Sept 23</p>
              </div>
            </div>


            <div className='flex flex-col justify-end items-end'>
            <div className="const-body items-center  text-white text-sm">
              <Pisces className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>Leo</p>
                <p className='const-date'>Aug 23 - Sept 23</p>
              </div>
            </div>
            </div>

            <div className='flex flex-col justify-end items-start'>
            <div className="const-body items-center text-white text-sm">
              <Pisces className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>Gemini</p>
                <p className='const-date'>Aug 23 - Sept 23</p>
              </div>
            </div>
            </div>

            





          </div>


          <div className=' grid grid-cols-2 firstGrid w-4/5 mx-auto'>

            <div className="const-body items-center  text-white text-sm">
              <Pisces className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>cancer</p>
                <p className='const-date'>Aug 23 - Sept 23</p>
              </div>
            </div>

            <div className="const-body items-center aries text-white text-sm">
              <Pisces className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>taurus</p>
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