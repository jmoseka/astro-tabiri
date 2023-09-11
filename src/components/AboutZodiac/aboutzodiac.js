import { useLocation } from "react-router-dom";
import './aboutzodiac.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchZodiacSign } from "../../Redux/zodiacsign";
import { logDOM } from "@testing-library/react";

const AboutZodiac = () => {
    const location = useLocation();
    const { name } = location.state;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchZodiacSign('pisces'))
    }, [])

    // fetch data from config store
    const data = useSelector((state) => state.predictionData)

    const {strengths} = data;
    let  s = 'hey'
    if(strengths!==undefined){
        s = strengths;
        console.log(s);
    }
    



    return (
        <div className="h-screen bg-lightMainColor dark:bg-darkMainColor">
            <div className="">

            </div>
        </div>
    )
}
export default AboutZodiac