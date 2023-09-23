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
import NavMenu from "../NavMenu/nav-menu";

const AboutZodiac = () => {
    const [isMode, setIsMode] = useState(false)
    const location = useLocation();
    const { name } = location.state;

    const containerRef = useRef(null)

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(name);
        dispatch(fetchZodiacSign(name))
    }, [dispatch, name])

    // fetch data from config store
    const data = useSelector((state) => state.predictionData)
    console.log(data);

    const { strengths, weaknesses, about, career, love, health, man, woman, relationship } = data;


    const scrollToSection = (paragraphId) => {
        const paragraph = document.getElementById(paragraphId);

        const offset = paragraph.offsetTop;

        if (paragraph) {

            // paragraph.scrollIntoView({offset, behavior: 'smooth' });
            window.scrollTo({ top: offset, behavior: 'smooth' });

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


            <div className="mx-8 block md:flex md:gap-6 ">

                <nav className="md:block order-last">

                    <button type="button " onClick={() => toggleDarkLightMode()} className="z-10 modeBtn fixed text-[1.6rem] top-8 left-[4rem] cursor-pointer">
                        {
                            isMode ? <BsFillMoonFill className="icon text-darkTextGold dark:text-lightYellow" /> : <BsFillSunFill className="icon text-darkTextGold dark:text-lightYellow" />
                        }
                    </button>

                    <div className="block md:hidden relative aboutzodiac-nav" >

                        <NavMenu />
                    </div>


                    <aside className="hidden sticky top-4 md:flex flex-col gap-3 bg-lightSecondMainColor dark:bg-darkSecondMainColor md:mt-8">
                        <div className='p-2 text-darkTextGold dark:text-lightYellow hover:font-bold'>
                            <Link to="/home">Daily Horoscope</Link>
                        </div>
                        <div className="border-b mx-6"></div>

                        <div className="aboutzodiac-signlist">
                            <ZodiacSignList className='bg-lightSecondMainColor' />

                        </div>



                    </aside>

                </nav>

                <div className="about-main w-full relative ">

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


                    <div className="ml-2 md:ml-0 flex flex-col gap-5 w-full text-darkTextGold dark:text-lightYellow ">

                        <div className="mt-7 zodiac-card bg-lightSecondMainColor dark:bg-darkSecondMainColor">
                            <h1 className="text-2xl md:text-3xl capitalize">{name}</h1>
                            <div className="flex flex-col items-start justify-start gap-1 mt-2">
                                <span><span className="italic">Strengths:&nbsp; </span><span className="zodiac-p">{' ' + strengths}</span></span>
                                <span><span className="italic">Weaknesses:&nbsp; </span><span className="zodiac-p">{' ' + weaknesses}</span></span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-8">
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
        </div>
    )
}
export default AboutZodiac