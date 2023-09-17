import { useLocation } from "react-router-dom";
import './aboutzodiac.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { fetchZodiacSign } from "../../Redux/zodiacsign";
import { BsFillPersonFill, BsFillBriefcaseFill, BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { GiLoveMystery } from 'react-icons/gi'
import { GiHealthNormal } from 'react-icons/gi'
import { FcBusinesswoman, FcBusinessman } from 'react-icons/fc'
import { SiHandshake } from 'react-icons/si'
import ZodiacSignList from "../ZodiacSignList/zodiacSignList";
import { Link } from 'react-router-dom';

const AboutZodiac = () => {
    const [isMode, setIsMode] = useState(false)
    const location = useLocation();
    const { name } = location.state;

    const containerRef = useRef(null)

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(name);
        dispatch(fetchZodiacSign(name))
        window.scrollTo(0, 0);
    }, [dispatch, name])

    // fetch data from config store
    const data = useSelector((state) => state.predictionData)
    console.log(data);

    const { strengths, weaknesses, symbol, about, career, love, health, man, woman, relationship } = data;


    const scrollToSection = (paragraphId) => {
        const paragraph = document.getElementById(paragraphId);
        const divHeight = paragraph.offsetHeight;

        const offset = paragraph.offsetTop;

        if (paragraph) {

            // paragraph.scrollIntoView({offset, behavior: 'smooth' });
            window.scrollTo({ top: offset, behavior: 'smooth' });

            console.log(paragraph.offsetTop);
            console.log(divHeight);
        }
        // const offset = paragraph.offsetTop + 100
        // console.log(offset + 5509500);
        // window.scrollTo({ top: offset, behavior: 'smooth' });
        // if (paragraph && containerRef.current) {
        //   const offset = containerRef.current.offsetTop + paragraph.offsetTop - window.innerHeight / 2;

        // }

    };

    const toggleDarkLightMode = () => {
        document.documentElement.classList.toggle('dark');
        setIsMode(!isMode)
    }


    return (
        <div ref={containerRef} className="h-fit w-full mx-auto bg-lightMainColor  dark:bg-darkMainColor">


            <div className="mx-8  about-container block md:flex gap-6 relative">

                <nav className="p-2  nav-about-zodiac  md:order-last  text-darkTextGold dark:text-lightYellow">
                    <button type="button " onClick={() => toggleDarkLightMode()} className="z-10 modeBtn fixed text-[1.6rem] top-8 left-[4rem] cursor-pointer">
                        {
                            isMode ? <BsFillMoonFill className="icon text-darkTextGold dark:text-lightYellow" /> : <BsFillSunFill className="icon text-darkTextGold dark:text-lightYellow" />
                        }
                    </button>

                    <div className="flex justify-end items-center py-4 md:flex-col md:sticky 
                    top-2 md:bg-lightSecondMainColor md:dark:bg-darkSecondMainColor">

                        <div >
                            <Link className='text-[0.96rem] tracking-wide' to="/home">Daily Horoscope</Link>
                        </div>

                        <div className="hidden md:block md:border md:w-12 md:my-4"></div>
                        <div>
                            <div className="block md:hidden">Zodiac signs</div>
                            <div className="hidden md:block md:p-0"><ZodiacSignList className="text-[0.2rem]" /></div>
                        </div>
                    </div>


                </nav>

                <div className=" about-main w-full relative ">


                    <div className="flex flex-col gap-6 sticky top-24 px-2 py-4 h-fit rounded-lg sidebar-nav
                      bg-lightSecondMainColor dark:bg-darkSecondMainColor
                      dark:text-lightYellow text-darkTextGold">




                        <button type='button' onClick={() => scrollToSection('idabout')} className="sidebar-links">

                            <span className='sidebar-links-icon'><BsFillPersonFill className="icon" /></span>
                            <span className='sidebar-links-text'>About</span>

                        </button>

                        <button type='button' onClick={() => scrollToSection('idcareer')} className="sidebar-links">
                            <span className='sidebar-links-icon'><BsFillBriefcaseFill className="icon" /></span>
                            <span className='sidebar-links-text'>Career</span>

                        </button>

                        <button type='button' onClick={() => scrollToSection('idlove')} className="sidebar-links">
                            <span className='sidebar-links-icon'><GiLoveMystery className="icon" /></span>
                            <span className='sidebar-links-text'>Love</span>

                        </button>

                        <button type='button' onClick={() => scrollToSection('idhealth')} className="sidebar-links">

                            <span className='sidebar-links-icon'><GiHealthNormal className="icon" /></span>
                            <span className='sidebar-links-text'>Health</span>

                        </button>

                        <button type='button' onClick={() => scrollToSection('idman')} className="sidebar-links">
                            <span className='sidebar-links-icon'><FcBusinessman className="icon" /></span>
                            <span className='sidebar-links-text'>Man</span>

                        </button>

                        <button type='button' onClick={() => scrollToSection('idwoman')} className="sidebar-links">
                            <span className='sidebar-links-icon'><FcBusinesswoman className="icon" /></span>
                            <span className='sidebar-links-text'>Woman</span>

                        </button>

                        <button type='button' onClick={() => scrollToSection('idrelationship')} className="sidebar-links">
                            <span className='sidebar-links-icon'><SiHandshake className="icon" /></span>
                            <span className='sidebar-links-text'>relationship</span>

                        </button>
                    </div>


                    <div className="flex flex-col gap-8 w-full text-darkTextGold dark:text-lightYellow ">




                        <div className="zodiac-card bg-lightSecondMainColor dark:bg-darkSecondMainColor ">
                            <h1 className="zodiac-about-title">{name}</h1>
                            <p className="zodiac-p">Strengths: {strengths}</p>
                            <p className="zodiac-p">Weaknesses: {weaknesses}</p>
                        </div>
                        <div id="idabout" className="zodiac-card bg-lightSecondMainColor dark:bg-darkSecondMainColor "><h2 className="zodiac-about-title">About</h2> <p className="zodiac-p text-darkTextGold dark:text-lightYellow {woman}">{about}</p></div>
                        <div id="idcareer" className="zodiac-card bg-lightSecondMainColor dark:bg-darkSecondMainColor"><h2 className="zodiac-about-title">Career</h2><p className="zodiac-p {woman}">{career}</p></div>
                        <div id="idlove" className="zodiac-card bg-lightSecondMainColor dark:bg-darkSecondMainColor"><h2 className="zodiac-about-title">Love</h2><p className="zodiac-p {woman}">{love}</p></div>
                        <div id="idhealth" className="zodiac-card bg-lightSecondMainColor dark:bg-darkSecondMainColor"><h2 className="zodiac-about-title">Health</h2><p className="zodiac-p {woman}">{health}</p></div>
                        <div id="idman" className="zodiac-card bg-lightSecondMainColor dark:bg-darkSecondMainColor"><h2 className="zodiac-about-title">Man</h2><p className="zodiac-p {woman}">{man}</p></div>
                        <div id="idwoman" className="zodiac-card bg-lightSecondMainColor dark:bg-darkSecondMainColor"><h2 className="zodiac-about-title">Woman</h2><p className="zodiac-p {woman}">{woman}</p></div>
                        <div id="idrelationship" className="zodiac-card bg-lightSecondMainColor dark:bg-darkSecondMainColor"><h2 className="zodiac-about-title">relationship</h2><p className="zodiac-p {woman}">{relationship}</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutZodiac