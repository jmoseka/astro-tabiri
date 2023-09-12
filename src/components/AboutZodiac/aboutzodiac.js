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
        <div className="h-fit w-full bg-lightMainColor py-6 container dark:bg-darkMainColor">

            <div className="flex gap-8 w-full ">

                <div className="w-1/3 ml-8  h-fit rounded-lg sidebar-nav p-6 bg-lightSecondMainColor dark:bg-darkSecondMainColor dark:text-lightYellow text-darkTextGold">
                    <div>
                        About
                    </div>

                    <div>
                        Career
                    </div>

                    <div>
                        Love
                    </div>

                    <div>
                        Health
                    </div>

                    <div>
                        Man
                    </div>

                    <div>
                        Woman
                    </div>

                    <div>
                        relationship
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    <div className="zodiac-card ">
                        <h1 className="text-3xl capitalize">{name}</h1>
                        <p>Strengths: {strengths}</p>
                        <p>Weaknesses: {weaknesses}</p>
                    </div>
                    <p className="zodiac-card tracking-wide"><h2 className="text-2xl capitalize ">About</h2> {about}</p>
                    <p className="zodiac-card tracking-wide"><h2 className="text-2xl capitalize ">Career</h2>{career}</p>
                    <p className="zodiac-card tracking-wide"><h2 className="text-2xl capitalize ">Love</h2>{love}</p>
                    <p className="zodiac-card tracking-wide"><h2 className="text-2xl capitalize ">Health</h2>{health}</p>
                    <p className="zodiac-card tracking-wide"><h2 className="text-2xl capitalize ">Man</h2>{man}</p>
                    <p className="zodiac-card tracking-wide"><h2 className="text-2xl capitalize ">Woman</h2>{woman}</p>
                    <p className="zodiac-card tracking-wide"><h2 className="text-2xl capitalize ">relationship</h2>{relationship}</p>
                </div>
            </div>
        </div>
    )
}
export default AboutZodiac