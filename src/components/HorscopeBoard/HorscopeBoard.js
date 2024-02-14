import React from 'react';
import Animation from '../Animation/animation';

export function HorscopeBoard({
  isLoading,
  dailyPrediction,
  dailyZodiacSign,
  horoscopeChoices,
  activeHoroscopeBtn,
  displayHoroscopeOption,
}) {
  return (
    <>
      <div
        className="horoscope-board hidden -translate-y-4
            md:block md:col-span-4 "
      >
        <div className="flex flex-col">
          <p className="zodiac-title zoomIn">{dailyZodiacSign}</p>

          <div>
            <div
              className={`gap-2 horoscope-btn-container  ${horoscopeChoices ? 'flex justify-center flex-wrap' : 'hidden'}`}
            >
              <button
                onClick={() => displayHoroscopeOption('career')}
                type="button"
                className={`horoscope-board-btn ${activeHoroscopeBtn === 'career' ? 'bg-cardDarkGold' : 'bg-transparent'}`}
              >
                Career
              </button>
              <button
                onClick={() => displayHoroscopeOption('general')}
                type="button"
                className={`horoscope-board-btn ${activeHoroscopeBtn === 'general' ? 'bg-cardDarkGold' : 'bg-transparent'}`}
              >
                Horoscope
              </button>
              <button
                onClick={() => displayHoroscopeOption('money')}
                type="button"
                className={`horoscope-board-btn ${activeHoroscopeBtn === 'money' ? 'bg-cardDarkGold' : 'bg-transparent'}`}
              >
                Money
              </button>
              <button
                onClick={() => displayHoroscopeOption('wellness')}
                type="button"
                className={`horoscope-board-btn ${activeHoroscopeBtn === 'wellness' ? 'bg-cardDarkGold' : 'bg-transparent'}`}
              >
                Health
              </button>
              <button
                onClick={() => displayHoroscopeOption('love')}
                type="button"
                className={`horoscope-board-btn ${activeHoroscopeBtn === 'love' ? 'bg-cardDarkGold' : 'bg-transparent'}`}
              >
                Love
              </button>
            </div>
          </div>

          <div className="zodiac-prediction-container">
            <div>
              {isLoading ? (
                <div className="animation-container">
                  <Animation />
                </div>
              ) : (
                <p className="zodiac-prediction">{dailyPrediction}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function HorscopeBoardMobile({
  isLoading,
  dailyPrediction,
  dailyZodiacSign,
  horoscopeChoices,
  activeHoroscopeBtn,
  displayHoroscopeOption,
}) {
  return (
    <div
      className="horoscope-board  
md:hidden "
    >
      <div className="flex flex-col">
        <p className="zodiac-title zoomIn">{dailyZodiacSign}</p>

        <div>
          <div
            className={` gap-2 horoscope-btn-container  ${horoscopeChoices ? 'flex justify-center flex-wrap' : 'hidden'}`}
          >
            <button
              onClick={() => displayHoroscopeOption('career')}
              type="button"
              className={`horoscope-board-btn ${activeHoroscopeBtn === 'career' ? 'bg-cardDarkGold' : 'bg-transparent'}`}
            >
              Career
            </button>
            <button
              onClick={() => displayHoroscopeOption('general')}
              type="button"
              className={`horoscope-board-btn ${activeHoroscopeBtn === 'general' ? 'bg-cardDarkGold' : 'bg-transparent'}`}
            >
              Horoscope
            </button>
            <button
              onClick={() => displayHoroscopeOption('money')}
              type="button"
              className={`horoscope-board-btn ${activeHoroscopeBtn === 'money' ? 'bg-cardDarkGold' : 'bg-transparent'}`}
            >
              Money
            </button>
            <button
              onClick={() => displayHoroscopeOption('wellness')}
              type="button"
              className={`horoscope-board-btn ${activeHoroscopeBtn === 'wellness' ? 'bg-cardDarkGold' : 'bg-transparent'}`}
            >
              Health
            </button>
            <button
              onClick={() => displayHoroscopeOption('love')}
              type="button"
              className={`horoscope-board-btn ${activeHoroscopeBtn === 'love' ? 'bg-cardDarkGold' : 'bg-transparent'}`}
            >
              Love
            </button>
          </div>
        </div>

        <div className="zodiac-prediction-container">
          {isLoading ? (
            <div className="animation-container">
              <Animation />
            </div>
          ) : (
            <p className="zodiac-prediction">{dailyPrediction}</p>
          )}
        </div>
      </div>
    </div>
  );
}
