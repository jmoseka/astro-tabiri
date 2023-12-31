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
import Animation from './Animation/animation';
import NavMenu from './NavMenu/nav-menu';


function Prediction() {


  const horoMap = {
    key1: { value1: 'Aries', value2: 'March 21 - Apr 19' },
    key2: { value1: 'Taurus', value2: 'April 20 - May 20' },
    key3: { value1: 'Gemini', value2: 'May 21 - June 20' },
    key4: { value1: 'Cancer', value2: 'June 21 - July 22' },
    key5: { value1: 'Leo', value2: 'July 23 – Aug 22' },
    key6: { value1: 'Virgo', value2: 'Aug 23 - Sept 22' },
    key7: { value1: 'Libra', value2: 'Sept 23 - Oct 22' },
    key8: { value1: 'Scorpio', value2: 'Oct 23 - Nov 21' },
    key9: { value1: 'Sagittarius', value2: 'Nov 22 – Dec 21' },
    key10: { value1: 'Capricorn', value2: 'Dec 22 - Jan 19' },
    key11: { value1: 'Aquarius', value2: 'Jan 20 - Feb 18' },
    key12: { value1: 'Pisces', value2: 'Feb 19 - Mar 20' },

  };

  const general = 'general'


  const [dailyPrediction, setdailyPrediction] = useState('Are you curious about what the stars have in store for you today? Powered by data from the trusted source, Horoscope.com, this website is designed to provide you with insightful and personalized horoscope predictions to help you navigate life\'s ups and downs. A daily guide to understanding your emotions, relationships, and career prospects.');
  const [dailyZodiacSign, setDailyZodiacSign] = useState('Your Zodiac Forecast');
  const [horscopeIndex, setHoroscopeIndex] = useState(0);
  const [horoscopeChoices, setHoroscopeChoices] = useState(false);
  const [activeHoroscopeBtn, setActiveHoroscopeBtn] = useState(general);
  const [isLoading, setIsLoading] = useState(false);





  const displayHoroscope = (index) => {

    setHoroscopeIndex(index);
    setActiveHoroscopeBtn(general)
    const key = `key${index}`;
    const zodiac = horoMap[key].value1;
    setDailyZodiacSign(zodiac)
    setIsLoading(true)

    // const date = horoMap.key.value2;

    async function fetchHoroscope(index) {
      try {
        const result = await webscrapper(index, 'general'); // Wait for the webscrapper function to complete

        setdailyPrediction(result)

        setHoroscopeChoices(true)
        setIsLoading(false)
        return result;

        // Now you can continue with other actions that depend on the result
      } catch (error) {
        //console.error(error); // Handle any errors that occurred
        return error;
      }
    }

    fetchHoroscope(index);

  }

  const displayHoroscopeOption = (cat) => {
    setIsLoading(true)

    async function fetchHoroscope(index) {
      try {
        const result = await webscrapper(index, cat); // Wait for the webscrapper function to complete

        setdailyPrediction(result)
        setActiveHoroscopeBtn(cat)
        setIsLoading(false)
        return result;

        // Now you can continue with other actions that depend on the result
      } catch (error) {
        //console.error(error); // Handle any errors that occurred
        return error;
      }
    }

    fetchHoroscope(horscopeIndex);


  }




  return (
    <div id='body-prediction' className="body-prediction body-gradient-bg   md:h-screen mx-auto w-full">
      <NavMenu />



      <div className='pt-1'>

        <div className='main-grid mx-auto rounded-[10rem] md:w-[80%]
         mt-[3.2rem] pb-4 md:mt-[5.7rem] relative
        
        '>

          {/* horscope board */}

          <div className="horoscope-board  
            md:hidden ">
            <div className='flex flex-col'>
              <p className='zodiac-title zoomIn'>{dailyZodiacSign}</p>

              <div >
                <div className={` gap-2 horoscope-btn-container  ${horoscopeChoices ? 'flex justify-center flex-wrap' : 'hidden'}`}

                >
                  
                  <button onClick={() => displayHoroscopeOption('career')} type='button' className={`horoscope-board-btn ${activeHoroscopeBtn === 'career' ? 'bg-cardDarkGold' : 'bg-transparent'}`}>Career</button>
                  <button onClick={() => displayHoroscopeOption('general')} type='button' className={`horoscope-board-btn ${activeHoroscopeBtn === 'general' ? 'bg-cardDarkGold' : 'bg-transparent'}`}>Horoscope</button>
                  <button onClick={() => displayHoroscopeOption('money')} type='button' className={`horoscope-board-btn ${activeHoroscopeBtn === 'money' ? 'bg-cardDarkGold' : 'bg-transparent'}`}>Money</button>
                  <button onClick={() => displayHoroscopeOption('wellness')} type='button' className={`horoscope-board-btn ${activeHoroscopeBtn === 'wellness' ? 'bg-cardDarkGold' : 'bg-transparent'}`}>Health</button>
                  <button onClick={() => displayHoroscopeOption('love')} type='button' className={`horoscope-board-btn ${activeHoroscopeBtn === 'love' ? 'bg-cardDarkGold' : 'bg-transparent'}`}>Love</button>
                </div>


              </div>



              <div className='zodiac-prediction-container'>


                {isLoading ?
                  <div className='animation-container'>
                    <Animation />
                  </div>

                  :
                  <p className='zodiac-prediction'>{dailyPrediction}</p>
                }

              </div>


            </div>
          </div>

          {/* grid grid-cols-1 grid-rows-4
         md:grid-rows-3 */}

          {/************* FIRST GRID *********************
           * First grid with a hidden class for the last button
          Small screen: 3 grids
          */}

          <div className=" md:-translate-y-7 mb-5 md:mb-0 grid grid-rows-1 grid-cols-3 md:grid-cols-6">


            <div className='hidden md:block'></div>


            <div className='const-body-container-start  flex justify-center items-center md:items-start
            md:justify-start  md:-translate-x-[2rem]
            '>
              <button onClick={() => displayHoroscope('12', general)} className="cursor-pointer const-body
            md:-translate-y-6 group
            ">
                <Pisces className='constelation group-hover:opacity-[0.8] ' />
                <div className='w-full'>
                  <p className='const-title group-hover:opacity-[0.8]'>Pisces</p>
                  <p className='const-date'>{horoMap[`key${12}`].value2}</p>
                </div>
              </button>
            </div>


            <div className='const-body-container flex justify-center items-center md:items-start'>
              <button onClick={() => displayHoroscope('1', general)} className="cursor-pointer group const-body
             md:-translate-y-7 md:-translate-x-6">
                <Aries className='constelation group-hover:opacity-[0.8] ' />
                <div>
                  <p className='const-title group-hover:opacity-[0.8]'>aries</p>
                  <p className='const-date'>{horoMap[`key${1}`].value2}</p>
                </div>
              </button>
            </div>


            <div className='const-body-container-end flex justify-center items-center md:items-start'>

              <button onClick={() => displayHoroscope('9', general)} className=" const-body cursor-pointer group
            sagittarius md:-translate-y-7 md:translate-x-6">
                <Sagitarus className='constelation group-hover:opacity-[0.8]' />
                <div>
                  <p className='const-title group-hover:opacity-[0.8]'>{horoMap[`key${9}`].value1}</p>
                  <p className='const-date'>{horoMap[`key${9}`].value2}3</p>
                </div>
              </button>
            </div>


            <div className='const-body-container flex justify-center items-center
              md:justify-end md:items-start md:translate-x-[2rem]'>
              <button onClick={() => displayHoroscope('7', general)} className="zodiacBtnMain
               md:-translate-y-6 libra hidden group cursor-pointer
               
            md:flex md:flex-col md:items-center md:justify-between md:gap-1
            md:text-lightBlue1 md:p-0 ">
                <Libra className='constelation  group-hover:opacity-[0.8]' />
                <div>
                  <p className='const-title  group-hover:opacity-[0.8]'>{horoMap[`key${7}`].value1}</p>
                  <p className='const-date'>{horoMap[`key${7}`].value2}</p>
                </div>
              </button>
            </div>




            <div className=' hidden md:block'></div>









          </div>

          {/********************* MIDDLE GRID *******************
          1. Made up of two sub grid
          2. SM: grid grid-cols-3. For the first grid subgrid: col-span-2
          */}

          <div className='mb-5 md:mb-0 grid grid-rows-2 grid-cols-1 lastgrid
          md:grid-cols-6  md:grid-rows-[18rem] 
          '>

            <div className=' mb-5 md:mb-0 submiddlegrid-1 grid grid-cols-3
            md:grid-cols-1 
            '>

              <div className='const-body-container-start flex justify-center
              md:justify-start md:items-start md:-translate-y-4'
              >
                <button onClick={() => displayHoroscope('4', general)} className="const-body
                md:-translate-x-3 group cursor-pointer
              ">
                  <Cancer className='constelation  group-hover:opacity-[0.8]' />
                  <div>
                    <p className='const-title  group-hover:opacity-[0.8]'>cancer</p>
                    <p className='const-date'>{horoMap[`key${4}`].value2}</p>
                  </div>
                </button>
              </div>


              <div className=' flex justify-center items-center
               md:justify-start  md:translate-y-8
              '>
                <button onClick={() => displayHoroscope('2', general)} className="const-body
                md:-translate-x-7 cursor-pointer group
                ">
                  <Taurus className='constelation group-hover:opacity-[0.8]' />
                  <div>
                    <p className='const-title  group-hover:opacity-[0.8]'>taurus</p>
                    <p className='const-date'>{horoMap[`key${2}`].value2}</p>
                  </div>
                </button>
              </div>


              <div className='const-body-container-end flex justify-center items-center
               md:justify-start md:items-end   md:translate-y-[5rem]'>
                <button onClick={() => displayHoroscope('6', general)} className="const-body
                md:-translate-x-9 cursor-pointer group
                 ">

                  <Virgo className='constelation  group-hover:opacity-[0.8]' />
                  <div>
                    <p className='const-title  group-hover:opacity-[0.8]'>{horoMap[`key${6}`].value1}</p>
                    <p className='const-date'>{horoMap[`key${6}`].value2}</p>
                  </div>
                </button>
              </div>

            </div>

            {/* horscope board */}

            <div className="horoscope-board hidden -translate-y-4
            md:block md:col-span-4 ">


              <div className='flex flex-col'>
                <p className='zodiac-title zoomIn'>{dailyZodiacSign}</p>

                <div >
                  <div className={`gap-2 horoscope-btn-container  ${horoscopeChoices ? 'flex justify-center flex-wrap' : 'hidden'}`}

                  >

                    <button onClick={() => displayHoroscopeOption('career')} type='button' className={`horoscope-board-btn ${activeHoroscopeBtn === 'career' ? 'bg-cardDarkGold' : 'bg-transparent'}`}>Career</button>
                    <button onClick={() => displayHoroscopeOption('general')} type='button' className={`horoscope-board-btn ${activeHoroscopeBtn === 'general' ? 'bg-cardDarkGold' : 'bg-transparent'}`}>Horoscope</button>
                    <button onClick={() => displayHoroscopeOption('money')} type='button' className={`horoscope-board-btn ${activeHoroscopeBtn === 'money' ? 'bg-cardDarkGold' : 'bg-transparent'}`}>Money</button>
                    <button onClick={() => displayHoroscopeOption('wellness')} type='button' className={`horoscope-board-btn ${activeHoroscopeBtn === 'wellness' ? 'bg-cardDarkGold' : 'bg-transparent'}`}>Health</button>
                    <button onClick={() => displayHoroscopeOption('love')} type='button' className={`horoscope-board-btn ${activeHoroscopeBtn === 'love' ? 'bg-cardDarkGold' : 'bg-transparent'}`}>Love</button>
                  </div>


                </div>



                <div className='zodiac-prediction-container'>

                  <div >
                    {isLoading ?
                      <div className='animation-container'>
                        <Animation />
                      </div>
                      :
                      <p className='zodiac-prediction'>{dailyPrediction}</p>
                    }
                  </div>
                </div>


              </div>





            </div>


            <div className='sublastgrid-2 grid grid-cols-3
            md:grid-cols-1
            '>

              <div className='const-body-container-start flex justify-center  items-center
               md:justify-end md:items-start md:-translate-y-4
              '>

                <button onClick={() => displayHoroscope('10', general)} className=" const-body
                md:translate-x-3 cursor-pointer group
                ">
                  <Capricorn className='constelation  group-hover:opacity-[0.8]' />
                  <div>
                    <p className='const-title  group-hover:opacity-[0.8]'>Capricorn</p>
                    <p className='const-date'>Aug 23 - Sept 23</p>
                  </div>
                </button>

              </div>

              <div className='flex justify-center items-center
              md:justify-end md:translate-y-8
              '>
                <button onClick={() => displayHoroscope('8', general)} className="const-body group cursor-pointer
                md:translate-x-6
                ">
                  <Scorpio className='constelation  group-hover:opacity-[0.8]' />
                  <div>
                    <p className='const-title  group-hover:opacity-[0.8]'>{horoMap[`key${8}`].value1}</p>
                    <p className='const-date'>{horoMap[`key${8}`].value2}</p>
                  </div>
                </button>
              </div>

              <div className='const-body-container-end flex justify-center items-center
              md:justify-end md:items-end  md:translate-y-[5rem]
              '>
                <button onClick={() => displayHoroscope('5', general)} className="const-body
                  cursor-pointer group
                ">
                  <Leo className='constelation  group-hover:opacity-[0.8]' />
                  <div>
                    <p className='const-title group-hover:opacity-[0.8]'>{horoMap[`key${5}`].value1}</p>
                    <p className='const-date'>{horoMap[`key${5}`].value2}</p>
                  </div>
                </button>
              </div>





            </div>






          </div>














          {/******************* LAST GRID ***********************/}

          <div className='grid grid-rows-1 grid-cols-3 lastgrid
          md:grid-cols-4
          '>


            <div className='const-body-container-start flex justify-center items-center
            md:items-end md:justify-end  
            '>
              <button onClick={() => displayHoroscope('11', general)} className="cursor-pointer group const-body 
               md:translate-y-5  
              ">
                <Aquarius className='constelation  group-hover:opacity-[0.8]' />
                <div>
                  <p className='const-title  group-hover:opacity-[0.8]'>{horoMap[`key${11}`].value1}</p>
                  <p className='const-date'>{horoMap[`key${12}`].value2}</p>
                </div>
              </button>
            </div>

            <div className=' hidden md:block '></div>





            <div className=' flex justify-center items-center
             md:justify-end md:items-end md:translate-x-4
             '>

              <button className="cursor-pointer group const-body gemini
               md:translate-y-5  
              ">
                <Gemini onClick={() => displayHoroscope('3', general)} className='constelation 
                group-hover:opacity-[0.8]' />
                <div>
                  <p className='const-title group-hover:opacity-[0.8]'>{horoMap[`key${3}`].value1}</p>
                  <p className='const-date'>{horoMap[`key${3}`].value2}</p>
                </div>
              </button>

            </div>


            <div className='hidden md:block'></div>

            <div className='flex const-body-container-end'>
              <button onClick={() => displayHoroscope('7', general)} className="cursor-pointer group libra 
              flex flex-col items-center justify-between gap-4 h-fit
              text-lightBlue1
              p-0 
              md:hidden
              ">
                <Libra className='constelation group-hover:opacity-[0.8]' />
                <div>
                  <p className='const-title group-hover:opacity-[0.8]'>{horoMap[`key${7}`].value1}</p>
                  <p className='const-date'>{horoMap[`key${7}`].value2}</p>
                </div>
              </button>
            </div>










          </div>


        </div>

      </div>
    </div>
  );
}

export default Prediction;