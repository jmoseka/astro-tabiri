import React, { useState } from 'react';
import { webscrapper } from './webscrapper';
import './my-prediction.css';
import NavMenu from './NavMenu/nav-menu';
import {
  ZodiacFirstButtons,
  ZodiacMiddleButtonsOne,
  ZodiacMiddleButtonsTwo,
  ZodiacLastButtons,
} from './ZodiacButtons/ZodiacButtons';
import {
  HorscopeBoard,
  HorscopeBoardMobile,
} from './HorscopeBoard/HorscopeBoard';

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


  const general = 'general';

  const [dailyPrediction, setdailyPrediction] = useState(
    "Are you curious about what the stars have in store for you today? Powered by data from the trusted source, Horoscope.com, this website is designed to provide you with insightful and personalized horoscope predictions to help you navigate life's ups and downs. A daily guide to understanding your emotions, relationships, and career prospects.",
  );
  const [dailyZodiacSign, setDailyZodiacSign] = useState('Your Zodiac Forecast');
  const [horscopeIndex, setHoroscopeIndex] = useState(0);
  const [horoscopeChoices, setHoroscopeChoices] = useState(false);
  const [activeHoroscopeBtn, setActiveHoroscopeBtn] = useState(general);
  const [isLoading, setIsLoading] = useState(false);

  const displayHoroscope = (index) => {
    setHoroscopeIndex(index);
    setActiveHoroscopeBtn(general);
    const key = `key${index}`;
    const zodiac = horoMap[key].value1;
    setDailyZodiacSign(zodiac);
    setIsLoading(true);

    async function fetchHoroscope(index) {
      try {
        const result = await webscrapper(index, 'general');
        setdailyPrediction(result);
        setHoroscopeChoices(true);
        setIsLoading(false);
        return result;
      } catch (error) {
        // Handle any errors that occurred
        console.error(error);
        return error;
      }
    }

    fetchHoroscope(index);
  };

  const displayHoroscopeOption = (cat) => {
    setIsLoading(true);

    async function fetchHoroscope(index) {
      try {
        const result = await webscrapper(index, cat);
        setdailyPrediction(result);
        setActiveHoroscopeBtn(cat);
        setIsLoading(false);
        return result;
      } catch (error) {
        // Handle any errors that occurred
        console.error(error);
        return error;
      }
    }

    fetchHoroscope(horscopeIndex);
  };

  return (
    <div id="body-prediction" className="body-prediction body-gradient-bg md:h-screen mx-auto w-full">
      <NavMenu />
      <div className="pt-1">
        <div className="main-grid mx-auto rounded-[10rem] md:w-[80%] mt-[3.2rem] pb-4 md:mt-[5.7rem] relative">
          {/* Horscope board */}
          <HorscopeBoardMobile
            isLoading={isLoading}
            dailyPrediction={dailyPrediction}
            dailyZodiacSign={dailyZodiacSign}
            horoscopeChoices={horoscopeChoices}
            activeHoroscopeBtn={activeHoroscopeBtn}
            displayHoroscopeOption={displayHoroscopeOption}
          />

          {/* First grid */}
          <ZodiacFirstButtons
            horoMap={horoMap}
            horscopeIndex={horscopeIndex}
            displayHoroscope={displayHoroscope}
          />

          {/* Middle grid */}
          <div className="mb-5 md:mb-0 grid grid-rows-2 grid-cols-1 lastgrid md:grid-cols-6 md:grid-rows-[18rem]">
            <ZodiacMiddleButtonsOne
              horoMap={horoMap}
              horscopeIndex={horscopeIndex}
              displayHoroscope={displayHoroscope}
            />

            <HorscopeBoard
              isLoading={isLoading}
              dailyPrediction={dailyPrediction}
              dailyZodiacSign={dailyZodiacSign}
              horoscopeChoices={horoscopeChoices}
              activeHoroscopeBtn={activeHoroscopeBtn}
              displayHoroscopeOption={displayHoroscopeOption}
            />

            <ZodiacMiddleButtonsTwo
              horoMap={horoMap}
              horscopeIndex={horscopeIndex}
              displayHoroscope={displayHoroscope}
            />
          </div>

          {/* Last grid */}
          <ZodiacLastButtons
            horoMap={horoMap}
            horscopeIndex={horscopeIndex}
            displayHoroscope={displayHoroscope}
          />
        </div>
      </div>
    </div>
  );
}

export default Prediction;
