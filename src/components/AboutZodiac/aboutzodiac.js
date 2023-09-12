import { useLocation } from "react-router-dom";
import './aboutzodiac.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchZodiacSign } from "../../Redux/zodiacsign";


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


                <div className="about-main w-full ">

                    <div className="text-[0.95rem] p-3 h-fit rounded-lg sidebar-nav
                      bg-lightSecondMainColor dark:bg-darkSecondMainColor
                      dark:text-lightYellow text-darkTextGold">


                        <div className="mb-9  sidebar-links">
                            About
                            <div className="sidebar-links-line"></div>
                        </div>

                        <div className="mb-9 sidebar-links">
                            Career
                            <div className="sidebar-links-line"></div>
                        </div>

                        <div className="mb-9 sidebar-links">
                            Love
                            <div className="sidebar-links-line"></div>
                        </div>

                        <div className="mb-9 sidebar-links">
                            Health
                            <div className="sidebar-links-line"></div>
                        </div>

                        <div className="mb-9 sidebar-links">
                            Man
                            <div className="sidebar-links-line"></div>
                        </div>

                        <div className="mb-9 sidebar-links">
                            Woman
                            <div className="sidebar-links-line"></div>
                        </div>

                        <div className="sidebar-links">
                            relationship
                            <div className="sidebar-links-line"></div>
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