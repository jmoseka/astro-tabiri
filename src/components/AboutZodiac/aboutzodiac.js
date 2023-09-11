import { useLocation } from "react-router-dom";


const AboutZodiac = () => {
    const location = useLocation();
    const {name} = location.state;
    console.log(name);


    return (
        <div className="h-screen">
            AboutZodiac
        </div>
    )
}
export default AboutZodiac