import React from 'react';
import { ReactComponent as Virgo } from '../../images/SVG/virgo.svg';
import { ReactComponent as Pisces } from '../../images/SVG/pisces.svg';
import { ReactComponent as Aries } from '../../images/SVG/aries.svg';
import { ReactComponent as Gemini } from '../../images/SVG/gemini.svg';
import { ReactComponent as Leo } from '../../images/SVG/leo.svg';
import { ReactComponent as Sagitarus } from '../../images/SVG/sagittarius.svg';
import { ReactComponent as Cancer } from '../../images/SVG/cancer.svg';
import { ReactComponent as Taurus } from '../../images/SVG/taurus.svg';
import { ReactComponent as Capricorn } from '../../images/SVG/capricorn.svg';
import { ReactComponent as Libra } from '../../images/SVG/libra.svg';
import { ReactComponent as Scorpio } from '../../images/SVG/scorpio.svg';
import { ReactComponent as Aquarius } from '../../images/SVG/aquarius.svg';

export function ZodiacFirstButtons({
  horoMap,
  horscopeIndex,
  displayHoroscope,
}) {
  return (
    <div className=" md:-translate-y-7 mb-5 md:mb-0 grid grid-rows-1 grid-cols-3 md:grid-cols-6">
      <div className="hidden md:block"></div>

      <div
        className="const-body-container-start  flex justify-center items-center md:items-start
            md:justify-start  md:-translate-x-[2rem]
            "
      >
        <button
          onClick={() => displayHoroscope(12)}
          className={`cursor-pointer const-body
            md:-translate-y-6 group
            ${horscopeIndex === 12 || horscopeIndex === 0 ? 'opacity-100 hover:opacity-[30%]' : 'opacity-[30%] hover:opacity-[70%]'}`}
        >
          <Pisces className="constelation" />
          <div className="w-full">
            <p className="const-title">{horoMap[`key${12}`].value1}</p>
            <p className="const-date">{horoMap[`key${12}`].value2}</p>
          </div>
        </button>
      </div>

      <div className="const-body-container flex justify-center items-center md:items-start">
        <button
          onClick={() => displayHoroscope(1)}
          className={`cursor-pointer group const-body
             md:-translate-y-7 md:-translate-x-6 ${horscopeIndex === 1 || horscopeIndex === 0 ? 'opacity-100 hover:opacity-[30%]' : 'opacity-[30%] hover:opacity-[70%]'}
             `}
        >
          <Aries className="constelation " />
          <div>
            <p className="const-title">{horoMap[`key${1}`].value1}</p>
            <p className="const-date">{horoMap[`key${1}`].value2}</p>
          </div>
        </button>
      </div>

      <div className="const-body-container-end flex justify-center items-center md:items-start">
        <button
          onClick={() => displayHoroscope(9)}
          className={`const-body cursor-pointer group
            sagittarius md:-translate-y-7 md:translate-x-6 ${horscopeIndex === 9 || horscopeIndex === 0 ? 'opacity-100 hover:opacity-[30%]' : 'opacity-[30%] hover:opacity-[70%]'}`}
        >
          <Sagitarus className="constelation" />
          <div>
            <p className="const-title">{horoMap[`key${9}`].value1}</p>
            <p className="const-date">{horoMap[`key${9}`].value2}3</p>
          </div>
        </button>
      </div>

      <div
        className="const-body-container flex justify-center items-center
              md:justify-end md:items-start md:translate-x-[2rem]"
      >
        <button
          onClick={() => displayHoroscope(7)}
          className={`zodiacBtnMain
               md:-translate-y-6 libra hidden group cursor-pointer
               
            md:flex md:flex-col md:items-center md:justify-between md:gap-1
            md:text-lightBlue1 md:p-0 ${horscopeIndex === 7 || horscopeIndex === 0 ? 'opacity-100 hover:opacity-[30%]' : 'opacity-[30%] hover:opacity-[70%]'}`}
        >
          <Libra className="constelation " />
          <div>
            <p className="const-title ">{horoMap[`key${7}`].value1}</p>
            <p className="const-date">{horoMap[`key${7}`].value2}</p>
          </div>
        </button>
      </div>

      <div className=" hidden md:block"></div>
    </div>
  );
}

export function ZodiacMiddleButtonsOne({
  horoMap,
  horscopeIndex,
  displayHoroscope,
}) {
  return (
    <div
      className=" mb-5 md:mb-0 submiddlegrid-1 grid grid-cols-3
      md:grid-cols-1 
      "
    >
      <div
        className="const-body-container-start flex justify-center
        md:justify-start md:items-start md:-translate-y-4"
      >
        <button
          onClick={() => displayHoroscope(4)}
          className={`const-body
          md:-translate-x-3 group cursor-pointer
          ${horscopeIndex === 4 || horscopeIndex === 0 ? 'opacity-100 hover:opacity-[30%]' : 'opacity-[30%] hover:opacity-[70%]'}`}
        >
          <Cancer className="constelation " />
          <div>
            <p className="const-title ">{horoMap[`key${4}`].value1}</p>
            <p className="const-date">{horoMap[`key${4}`].value2}</p>
          </div>
        </button>
      </div>

      <div
        className=" flex justify-center items-center
         md:justify-start  md:translate-y-8
        "
      >
        <button
          onClick={() => displayHoroscope(2)}
          className={`const-body
          md:-translate-x-7 cursor-pointer group
          ${horscopeIndex === 2 || horscopeIndex === 0 ? 'opacity-100 hover:opacity-[30%]' : 'opacity-[30%] hover:opacity-[70%]'}`}
        >
          <Taurus className="constelation" />
          <div>
            <p className="const-title ">{horoMap[`key${2}`].value1}</p>
            <p className="const-date">{horoMap[`key${2}`].value2}</p>
          </div>
        </button>
      </div>

      <div
        className="const-body-container-end flex justify-center items-center
         md:justify-start md:items-end   md:translate-y-[5rem]"
      >
        <button
          onClick={() => displayHoroscope(6)}
          className={`const-body
          md:-translate-x-9 cursor-pointer group
          ${horscopeIndex === 6 || horscopeIndex === 0 ? 'opacity-100 hover:opacity-[30%]' : 'opacity-[30%] hover:opacity-[70%]'}`}
        >
          <Virgo className="constelation " />
          <div>
            <p className="const-title ">{horoMap[`key${6}`].value1}</p>
            <p className="const-date">{horoMap[`key${6}`].value2}</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export function ZodiacMiddleButtonsTwo({
  horoMap,
  horscopeIndex,
  displayHoroscope,
}) {
  return (
    <div
      className="sublastgrid-2 grid grid-cols-3
            md:grid-cols-1
            "
    >
      <div
        className="const-body-container-start flex justify-center  items-center
               md:justify-end md:items-start md:-translate-y-4
              "
      >
        <button
          onClick={() => displayHoroscope(10)}
          className={`const-body
                md:translate-x-3 cursor-pointer group
                ${horscopeIndex === 10 || horscopeIndex === 0 ? 'opacity-100 hover:opacity-[30%]' : 'opacity-[30%] hover:opacity-[70%]'}`}
        >
          <Capricorn className="constelation " />
          <div>
            <p className="const-title ">{horoMap[`key${10}`].value1}</p>
            <p className="const-date">{horoMap[`key${10}`].value2}</p>
          </div>
        </button>
      </div>

      <div
        className="flex justify-center items-center
              md:justify-end md:translate-y-8
              "
      >
        <button
          onClick={() => displayHoroscope(8)}
          className={`const-body group cursor-pointer
                md:translate-x-6
                ${horscopeIndex === 8 || horscopeIndex === 0 ? 'opacity-100 hover:opacity-[30%]' : 'opacity-[30%] hover:opacity-[70%]'}`}
        >
          <Scorpio className="constelation " />
          <div>
            <p className="const-title ">{horoMap[`key${8}`].value1}</p>
            <p className="const-date">{horoMap[`key${8}`].value2}</p>
          </div>
        </button>
      </div>

      <div
        className="const-body-container-end flex justify-center items-center
              md:justify-end md:items-end  md:translate-y-[5rem]
              "
      >
        <button
          onClick={() => displayHoroscope(5)}
          className={`const-body
                  cursor-pointer group
                  ${horscopeIndex === 5 || horscopeIndex === 0 ? 'opacity-100 hover:opacity-[30%]' : 'opacity-[30%] hover:opacity-[70%]'}`}
        >
          <Leo className="constelation " />
          <div>
            <p className="const-title">{horoMap[`key${5}`].value1}</p>
            <p className="const-date">{horoMap[`key${5}`].value2}</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export function ZodiacLastButtons({
  horoMap,
  horscopeIndex,
  displayHoroscope,
}) {
  return (
    <div
      className="grid grid-rows-1 grid-cols-3 lastgrid
          md:grid-cols-4
          "
    >
      <div
        className="const-body-container-start flex justify-center items-center
            md:items-end md:justify-end  
            "
      >
        <button
          onClick={() => displayHoroscope(11)}
          className={`cursor-pointer group const-body 
               md:translate-y-5  
               ${horscopeIndex === 11 || horscopeIndex === 0 ? 'opacity-100 hover:opacity-[30%]' : 'opacity-[30%] hover:opacity-[70%]'}`}
        >
          <Aquarius className="constelation " />
          <div>
            <p className="const-title ">{horoMap[`key${11}`].value1}</p>
            <p className="const-date">{horoMap[`key${12}`].value2}</p>
          </div>
        </button>
      </div>

      <div className=" hidden md:block "></div>

      <div
        className=" flex justify-center items-center
             md:justify-end md:items-end md:translate-x-4
             "
      >
        <button
          className={`cursor-pointer group const-body gemini
               md:translate-y-5  
               ${horscopeIndex === 3 || horscopeIndex === 0 ? 'opacity-100 hover:opacity-[30%]' : 'opacity-[30%] hover:opacity-[70%]'}`}
        >
          <Gemini
            onClick={() => displayHoroscope(3)}
            className="constelation 
              "
          />
          <div>
            <p className="const-title">{horoMap[`key${3}`].value1}</p>
            <p className="const-date">{horoMap[`key${3}`].value2}</p>
          </div>
        </button>
      </div>

      <div className="hidden md:block"></div>

      <div className="flex const-body-container-end">
        <button
          onClick={() => displayHoroscope(7)}
          className={`cursor-pointer group libra 
              flex flex-col items-center justify-between gap-4 h-fit
              text-lightBlue1
              p-0 
              md:hidden
              ${horscopeIndex === 7 || horscopeIndex === 0 ? 'opacity-100 hover:opacity-[30%]' : 'opacity-[30%] hover:opacity-[70%]'}`}
        >
          <Libra className="constelation" />
          <div>
            <p className="const-title">{horoMap[`key${7}`].value1}</p>
            <p className="const-date">{horoMap[`key${7}`].value2}</p>
          </div>
        </button>
      </div>
    </div>
  );
}
