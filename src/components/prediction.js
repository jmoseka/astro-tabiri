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
import { webscrapper } from './webscrapper';
import './my-prediction.css'
import { useState } from 'react';


function Prediction() {

  const horoMap = {
    key1: { value1: 'Aries', value2: 'March 21 - April 19' },
    key2: { value1: 'Taurus', value2: 'April 20 - May 20' },
    key3: { value1: 'Gemini', value2: 'May 21 - June 20' },
    key4: { value1: 'Cancer', value2: 'June 21 - July 22' },
    key5: { value1: 'Leo', value2: 'July 23 – August 22' },
    key6: { value1: 'Virgo', value2: 'Aug 23 - Sept 22' },
    key7: { value1: 'Libra', value2: 'Sept 23 - Oct 22' },
    key8: { value1: 'Scorpio', value2: 'Oct 23 - Nov 21' },
    key9: { value1: 'Sagittarius', value2: 'Nov 22 – Dec 21' },
    key10: { value1: 'Capricorn', value2: 'Dec 22 - Jan 19' },
    key11: { value1: 'Aquarius', value2: 'Jan 20 - Feb 18' },
    key12: { value1: 'Pisces', value2: 'Feb 19 - Mar 20' },

  };


  const [dailyPrediction, setdailyPrediction] = useState('Discover what the stars have in store for you each day. From love to career, our predictions guide you. Dont miss out – find your daily prediction now and seize the day with confidence. ');
  const [dailyZodiacSign, setDailyZodiacSign] = useState('Daily Horoscope');

  const displayHoroscope = (index) => {
    const key = `key${index}`;

    const zodiac = horoMap[key].value1;
    // const date = horoMap.key.value2;

    async function fetchHoroscope(index) {
      try {
        const result = await webscrapper(index); // Wait for the webscrapper function to complete

        setdailyPrediction(result)
        setDailyZodiacSign(zodiac)
        return result;

        // Now you can continue with other actions that depend on the result
      } catch (error) {
        //console.error(error); // Handle any errors that occurred
        return error;
      }
    }

    fetchHoroscope(index);

  }


  return (
    <div className="container mx-auto w-full">

      <div className='pt-1  '>

        <div className='main-grid mx-auto mt-28 md:mt-16 
        border grid grid-cols-1 grid-rows-4 gap-2
         md:grid-rows-3
        '>

          {/************* FIRST GRID *********************
           * First grid with a hidden class for the last button
          Small screen: 3 grids
          */}

          <div className=" grid grid-rows-1 grid-cols-4 h-fit border-4
           border-orange-500 md:grid-cols-6">
       

          <div className='border hidden md:block h-fit'></div>

<button onClick={() => displayHoroscope('12')} className=" border const-body">
  <Pisces className='constelation' />
  <div className='w-full'>
    <p className='const-title uppercase'>Pisces</p>
    <p className='const-date'>{horoMap[`key${12}`].value2}</p>
  </div>
</button>

<button onClick={() => displayHoroscope('1')} className=" border const-body">
  <Aries className='constelation  ' />
  <div>
    <p className='const-title uppercase'>aries</p>
    <p className='const-date'>{horoMap[`key${1}`].value2}</p>
  </div>
</button>

<button onClick={() => displayHoroscope('9')} className="border const-body sagittarius">
  <Sagitarus className='constelation' />
  <div>
    <p className='const-title uppercase'>{horoMap[`key${9}`].value1}</p>
    <p className='const-date'>{horoMap[`key${9}`].value2}3</p>
  </div>
</button>

<button onClick={() => displayHoroscope('7')} className="border libra hidden
 md:flex md:flex-col md:items-center md:justify-between md:gap-4
 md:text-lightBlue cursor-pointer md:p-0 md:hover:text-yellow md:h-fit">
  <Libra className='constelation' />
  <div>
    <p className='const-title uppercase'>{horoMap[`key${7}`].value1}</p>
    <p className='const-date'>{horoMap[`key${7}`].value2}</p>
  </div>
</button>

<div className='border hidden md:block md:h-fit'></div>









          </div>






          {/********************* MIDDLE GRID *******************
          1. Made up of two sub grid
          2. SM: grid grid-cols-3. For the first grid subgrid: col-span-2
          */}

          <div className='h-fit border grid grid-cols-3 lastgrid
          md:grid-cols-4 border-purple-500 
          '>

            <div className='col-span-2 sublastgrid-1 grid grid-cols-2 
            md:grid-cols-1 
            '>

              <button onClick={() => displayHoroscope('4')} className="border const-body">
                <Cancer className='constelation' />
                <div>
                  <p className='const-title uppercase'>cancer</p>
                  <p className='const-date'>Aug 23 - Sept 23</p>
                </div>
              </button>

              <button onClick={() => displayHoroscope('2')} className="border const-body">
                <Taurus className='constelation' />
                <div>
                  <p className='const-title uppercase'>taurus</p>
                  <p className='const-date'>Aug 23 - Sept 23</p>
                </div>
              </button>

            </div>







            <div className='sublastgrid-2 grid grid-cols-1
            md:col-span-2
            '>

              <button onClick={() => displayHoroscope('10')} className="border const-body">
                <Capricorn className='constelation' />
                <div>
                  <p className='const-title uppercase'>Capricorn</p>
                  <p className='const-date'>Aug 23 - Sept 23</p>
                </div>
              </button>

              <button onClick={() => displayHoroscope('6')} className="border hidden virgo
              md:flex md:flex-col md:items-center md:justify-between md:gap-4
             md:text-lightBlue cursor-pointer md:p-0 md:hover:text-yellow md:h-fit">

                <Virgo className='constelation ' />
                <div>
                  <p className='const-title uppercase'>{horoMap[`key${6}`].value1}</p>
                  <p className='const-date'>{horoMap[`key${6}`].value2}</p>
                </div>
              </button>

            </div>






          </div>


          {/******************* LAST GRID ***********************/}

          <div className='border grid grid-cols-3 lastgrid
          md:grid-cols-4
          '>

            <div className='col-span-2 sublastgrid-1 grid grid-cols-2 
            md:grid-cols-1 
            '>

              <button onClick={() => displayHoroscope('8')} className="const-body col-span-1">
                <Scorpio className='constelation  text-white' />
                <div>
                  <p className='const-title uppercase'>{horoMap[`key${8}`].value1}</p>
                  <p className='const-date'>{horoMap[`key${8}`].value2}</p>
                </div>
              </button>

              <button onClick={() => displayHoroscope('5')} className="const-body col-span-1">
                <Leo className='constelation text-white' />
                <div>
                  <p className='const-title uppercase'>{horoMap[`key${5}`].value1}</p>
                  <p className='const-date'>{horoMap[`key${5}`].value2}</p>
                </div>
              </button>

            </div>

            <div className='sublastgrid-2 grid grid-cols-1
            md:col-span-2 
            '>

              <button onClick={() => displayHoroscope('11')} className="const-body">
                <Aquarius className='constelation  ' />
                <div>
                  <p className='const-title uppercase'>{horoMap[`key${11}`].value1}</p>
                  <p className='const-date'>{horoMap[`key${12}`].value2}</p>
                </div>
              </button>

              <button className="hidden
              md:flex md:flex-col md:items-center md:justify-between md:gap-4
              md:text-lightBlue cursor-pointer md:p-0 md:hover:text-yellow md:h-fit
              ">
                <Gemini onClick={() => displayHoroscope('3')} className='constelation' />
                <div>
                  <p className='const-title uppercase'>{horoMap[`key${3}`].value1}</p>
                  <p className='const-date'>{horoMap[`key${3}`].value2}</p>
                </div>
              </button>

            </div>






          </div>




          {/** SPECIAL CLASS */}

          <div className='border grid grid-cols-3 special-grid md:hidden'>

            <button onClick={() => displayHoroscope('7')} className="libra const-body">
              <Libra className='constelation' />
              <div>
                <p className='const-title uppercase'>{horoMap[`key${7}`].value1}</p>
                <p className='const-date'>{horoMap[`key${7}`].value2}</p>
              </div>
            </button>


            <button onClick={() => displayHoroscope('6')} className="virgo const-body">
              <Virgo className='constelation ' />
              <div>
                <p className='const-title uppercase'>{horoMap[`key${6}`].value1}</p>
                <p className='const-date'>{horoMap[`key${6}`].value2}</p>
              </div>
            </button>

            <button onClick={() => displayHoroscope('3')} className='gemini const-body'>
              <Gemini className='constelation' />
              <div>
                <p className='const-title uppercase'>{horoMap[`key${3}`].value1}</p>
                <p className='const-date'>{horoMap[`key${3}`].value2}</p>
              </div>
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Prediction;