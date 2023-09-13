import { useLocation } from "react-router-dom";
import './aboutzodiac.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchZodiacSign } from "../../Redux/zodiacsign";
import { BsFillPersonFill, BsFillBriefcaseFill, BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { GiLoveMystery } from 'react-icons/gi'
import { GiHealthNormal } from 'react-icons/gi'
import { FcBusinesswoman, FcBusinessman } from 'react-icons/fc'
import { SiHandshake } from 'react-icons/si'

const AboutZodiac = () => {
    const location = useLocation();
    const { name } = location.state;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchZodiacSign('pisces'))
    }, [])

    // fetch data from config store
    const data = useSelector((state) => state.predictionData)
    console.log(data);

    const { strengths, weaknesses, symbol, about, career, love, health, man, woman, relationship } = data;
    let s = 'hey'

    if (strengths !== undefined) {
        s = strengths;
        console.log(s);
    }


    return (
        <div className="h-fit w-full mx-auto bg-lightMainColor py-6 dark:bg-darkMainColor">

            <div className="mx-8">


                <div className="about-main w-full relative ">

                    <div className="fixed text-[1.6rem] left-16 cursor-pointer">
                        <BsFillSunFill />
                        <BsFillMoonFill className="hidden" />
                    </div>

                    <div className=" sticky top-20 p-3 h-fit rounded-lg sidebar-nav
                      bg-lightSecondMainColor dark:bg-darkSecondMainColor
                      dark:text-lightYellow text-darkTextGold">




                        <div className="mb-9  sidebar-links">

                            <span className='sidebar-links-icon'><BsFillPersonFill /></span>
                            <span className='sidebar-links-text'>About</span>

                        </div>

                        <div className="mb-9 sidebar-links">
                            <span className='sidebar-links-icon'><BsFillBriefcaseFill /></span>
                            <span className='sidebar-links-text'>Career</span>

                        </div>

                        <div className="mb-9 sidebar-links">
                            <span className='sidebar-links-icon'><GiLoveMystery /></span>
                            <span className='sidebar-links-text'>Love</span>

                        </div>

                        <div className="mb-9 sidebar-links">

                            <span className='sidebar-links-icon'><GiHealthNormal /></span>
                            <span className='sidebar-links-text'>Health</span>

                        </div>

                        <div className="mb-9 sidebar-links">
                            <span className='sidebar-links-icon'><FcBusinessman /></span>
                            <span className='sidebar-links-text'>Man</span>

                        </div>

                        <div className="mb-9 sidebar-links">
                            <span className='sidebar-links-icon'><FcBusinesswoman /></span>
                            <span className='sidebar-links-text'>Woman</span>

                        </div>

                        <div className="sidebar-links">
                            <span className='sidebar-links-icon'><SiHandshake /></span>
                            <span className='sidebar-links-text'>relationship</span>

                        </div>
                    </div>


                    <div className="flex flex-col gap-8">
                        <div className="zodiac-card ">
                            <h1 className="text-3xl capitalize">{name}</h1>
                            <p>Strengths: {strengths}</p>
                            <p>Weaknesses: {weaknesses}</p>
                        </div>
                        <div className="zodiac-card"><h2 className="text-2xl capitalize ">About</h2> <p>{about}</p></div>
                        <div className="zodiac-card"><h2 className="text-2xl capitalize ">Career</h2><p>{career}</p></div>
                        <div className="zodiac-card"><h2 className="text-2xl capitalize ">Love</h2><p>{love}</p></div>
                        <div className="zodiac-card"><h2 className="text-2xl capitalize ">Health</h2><p>{health}</p></div>
                        <div className="zodiac-card"><h2 className="text-2xl capitalize ">Man</h2><p>{man}</p></div>
                        <div className="zodiac-card"><h2 className="text-2xl capitalize ">Woman</h2>{woman}</div>
                        <div className="zodiac-card"><h2 className="text-2xl capitalize ">relationship</h2><p>{relationship}</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutZodiac