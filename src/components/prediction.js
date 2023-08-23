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
import { getBee } from './beescrapper';
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
    key12: { value1: 'Pisces', value2: 'Feb 19 - March 20' },

  };


  const [dailyPrediction, setdailyPrediction] = useState('Discover what the stars have in store for you each day. From love to career, our predictions guide you. Dont miss out – find your daily prediction now and seize the day with confidence. ');
  const [dailyZodiacSign, setDailyZodiacSign] = useState('Daily Horoscope');

  const displayHoroscope = (index) => {
    const key = `key${index}`;

    const zodiac = horoMap[key].value1;
    // const date = horoMap.key.value2;



    async function fetchHoroscope(index) {
      try {
        const result = await getBee(index); // Wait for the webscrapper function to complete
        
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
    <div className="container mx-auto h-full w-full">

      {/* <nav className='text-lightYellow'>
        <a>Daily Horoscope</a>
        <a>My Zodiac</a>
      </nav> */}

      <div className='pt-1 relative '>

        <div className='mx-auto mt-20   h-[30rem] w-5/6 grid grid-cols-1 grid-rows-4'>

          <div className=' grid grid-cols-4 firstGrid w-4/5 mx-auto'>

            <button onClick={() => displayHoroscope('12')} className="const-body items-center  text-white text-sm">
              <Pisces className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>Pisces</p>
                <p className='const-date'>{horoMap[`key${12}`].value2}</p>
              </div>
            </button>

            <button onClick={() => displayHoroscope('1')} className="const-body  items-center aries text-white text-sm">
              <Aries className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>aries</p>
                <p className='const-date'>{horoMap[`key${1}`].value2}</p>
              </div>
            </button>

            <button className="const-body  items-center sagittarius text-white text-sm">
              <Sagitarus onClick={() => displayHoroscope('9')} className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>{horoMap[`key${9}`].value1}</p>
                <p className='const-date'>{horoMap[`key${9}`].value2}3</p>
              </div>
            </button>


            <button onClick={() => displayHoroscope('7')} className="const-body  items-center libra text-white text-sm">
              <Libra className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>{horoMap[`key${7}`].value1}</p>
                <p className='const-date'>{horoMap[`key${7}`].value2}</p>
              </div>
            </button>
          </div>


          <div className='middleGrid row-span-3 grid grid-rows-3 grid-cols-4'>

            <div className='flex flex-col items-end'>
              <button onClick={() => displayHoroscope('10')} className="const-body items-center  text-white text-sm">
                <Capricorn className='constelation  text-white' />
                <div>
                  <p className='const-title uppercase'>Capricorn</p>
                  <p className='const-date'>Aug 23 - Sept 23</p>
                </div>
              </button>
            </div>


            <div className="w-full flex flex-col items-center col-span-2 row-span-3">
              <div>
                <p className='zodiac-title text-5xl mt-6 text-yellow'>{dailyZodiacSign}</p>
                <p className='zodiac-prediction mt-6 px-8 text-lightYellow'>{dailyPrediction}</p>
              </div>
            </div>


            <div className='flex flex-col items-start'>
              <button onClick={() => displayHoroscope('11')} className="const-body items-center  text-white text-sm">
                <Aquarius className='constelation  text-white' />
                <div>
                  <p className='const-title uppercase'>{horoMap[`key${11}`].value1}</p>
                  <p className='const-date'>{horoMap[`key${12}`].value2}</p>
                </div>
              </button>
            </div>



            <button onClick={() => displayHoroscope('6')} className="const-body justify-center items-center mb-3  text-white text-sm">
              <Virgo className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>{horoMap[`key${6}`].value1}</p>
                <p className='const-date'>{horoMap[`key${6}`].value2}</p>
              </div>
            </button>

            <button onClick={() => displayHoroscope('8')} className="const-body justify-center items-center  text-white text-sm">
              <Scorpio className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>{horoMap[`key${8}`].value1}</p>
                <p className='const-date'>{horoMap[`key${8}`].value2}</p>
              </div>
            </button>


            <div className='flex flex-col justify-end items-end'>

              <button onClick={() => displayHoroscope('5')} className="const-body items-center  text-white text-sm">
                <Leo className='constelation  text-white' />
                <div>
                  <p className='const-title uppercase'>{horoMap[`key${5}`].value1}</p>
                  <p className='const-date'>{horoMap[`key${5}`].value2}</p>
                </div>
              </button>
            </div>

            <div className='flex flex-col justify-end items-start'>
              <button className="const-body items-center text-white text-sm">
                <Gemini onClick={() => displayHoroscope('3')} className='constelation  text-white' />
                <div>
                  <p className='const-title uppercase'>{horoMap[`key${3}`].value1}</p>
                  <p className='const-date'>{horoMap[`key${3}`].value2}</p>
                </div>
              </button>
            </div>



          </div>


          <div className=' grid grid-cols-2 firstGrid w-4/5 mx-auto'>

            <button onClick={() => displayHoroscope('4')} className="const-body items-center  text-white text-sm">
              <Cancer className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>cancer</p>
                <p className='const-date'>Aug 23 - Sept 23</p>
              </div>
            </button>

            <button onClick={() => displayHoroscope('2')} className="const-body items-center aries text-white text-sm">
              <Taurus className='constelation  text-white' />
              <div>
                <p className='const-title uppercase'>taurus</p>
                <p className='const-date'>Aug 23 - Sept 23</p>
              </div>
            </button>



          </div>





        </div>

      </div>
    </div>
  );
}

export default Prediction;