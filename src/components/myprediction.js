import { ReactComponent as Virgo } from '../images/SVG/virgo.svg';
import { ReactComponent as Pisces } from '../images/SVG/pisces.svg';
import { ReactComponent as Aries } from '../images/SVG/aries.svg';
import { ReactComponent as Gemini } from '../images/SVG/gemini.svg';
import { ReactComponent as Leo } from '../images/SVG/leo.svg';
import { ReactComponent as Sagitarus } from '../images/SVG/sagittarius.svg';
import { ReactComponent as Cancer } from '../images/SVG/cancer.svg';
import { ReactComponent as Taurus } from '../images/SVG/taurus.svg';
import { ReactComponent as Capricorn } from '../images/SVG/capricorn.svg';
import { ReactComponent as Libra } from '../images/SVG/libra.svg';
import { ReactComponent as Scorpio } from '../images/SVG/scorpio.svg';
import { ReactComponent as Aquarius } from '../images/SVG/aquarius.svg';

import './my-prediction.css'


function Prediction() {
  

  return (
    <div className="container mx-auto h-full w-full">
      <div className='pt-1 relative '>


        <div className='mx-auto mt-20 border   h-[30rem] w-5/6 grid grid-cols-1 grid-rows-4'>

          <div className=' grid grid-cols-4 firstGrid w-4/5 mx-auto'>

            <div className="const-body  items-center  text-white text-sm">
              <Pisces className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>Pisces</p>
                <p className='const-date'>Aug 23 - Sept 23</p>
              </div>
            </div>

            <div className="const-body  items-center aries text-white text-sm">
              <Aries className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>aries</p>
                <p className='const-date'>Aug 23 - Sept 23</p>
              </div>
            </div>



            <div className="const-body  items-center sagittarius text-white text-sm">
              <Sagitarus className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>sagittarius</p>
                <p className='const-date'>Aug 23 - Sept 23</p>
              </div>
            </div>


            <div className="const-body  items-center libra text-white text-sm">
              <Libra className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>libra</p>
                <p className='const-date'>Aug 23 - Sept 23</p>
              </div>
            </div>







          </div>


          <div className='middleGrid row-span-3 grid grid-rows-3 grid-cols-4'>

            <div className='flex flex-col items-end'>
              <div className="const-body items-center  text-white text-sm">
                <Capricorn className='constelation  text-white' />
                <div>
                  <p className='const-title uppercase'>Capricorn</p>
                  <p className='const-date'>Aug 23 - Sept 23</p>
                </div>
              </div>
            </div>


            <div className="w-full flex flex-col items-center col-span-2 row-span-3">
              <div>
                <p className='zodiac-title text-5xl mt-6 text-yellow'>Capricorn</p>
                <p className='zodiac-prediction mt-6 px-20 text-lightYellow'>Today, your cosmic vitality is at its peak!
                  Embrace the energy of the stars to embark on invigorating health routines.
                  Engage in activities that connect you with nature and recharge your spirit.
                  Take a moment to meditate and find harmony within the swirling cosmic energies.
                  Your body and mind will thank you for the cosmic self-care!</p>
              </div>
            </div>


            <div className='flex flex-col items-start'>
              <div className="const-body items-center  text-white text-sm">
                <Aquarius className='constelation  text-white' />
                <div>
                  <p className='const-title uppercase'>Aquarius</p>
                  <p className='const-date'>Aug 23 - Sept 23</p>
                </div>
              </div>
            </div>



            <div className="const-body justify-center items-center mb-3  text-white text-sm">
              <Virgo className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>Virgo</p>
                <p className='const-date'>Aug 23 - Sept 23</p>
              </div>
            </div>

            <div className="const-body justify-center items-center  text-white text-sm">
              <Scorpio className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>Scorpio</p>
                <p className='const-date'>Aug 23 - Sept 23</p>
              </div>
            </div>


            <div className='flex flex-col justify-end items-end'>
              <div className="const-body items-center  text-white text-sm">
                <Leo className='constelation  text-white' />
                <div>
                  <p className='const-title uppercase'>Leo</p>
                  <p className='const-date'>Aug 23 - Sept 23</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col justify-end items-start'>
              <div className="const-body items-center text-white text-sm">
                <Gemini className='constelation  text-white' />
                <div>
                  <p className='const-title uppercase'>Gemini</p>
                  <p className='const-date'>Aug 23 - Sept 23</p>
                </div>
              </div>
            </div>







          </div>


          <div className=' grid grid-cols-2 firstGrid w-4/5 mx-auto'>

            <div className="const-body items-center  text-white text-sm">
              <Cancer className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>cancer</p>
                <p className='const-date'>Aug 23 - Sept 23</p>
              </div>
            </div>

            <div className="const-body items-center aries text-white text-sm">
              <Taurus className='constelation  text-white' />
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