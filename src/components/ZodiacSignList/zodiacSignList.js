import { Link } from 'react-router-dom';

const ZodiacSignList = (props) => {

    const sendDataToParent = (data) => {
        props.onPropToParent(data);
      };


    return (


        <div className='flex'>
            <div className='zod-btn-container flex flex-col '>
                <Link className='zod-btn'
                    to="/home/pisces"
                    state={{ name: 'pisces' }}>Pisces</Link>
                <Link className='zod-btn' to="/home/aries"
                    state={{ name: 'aries' }}>Aries</Link>
                <Link className='zod-btn' to="/home/capricorn"
                    state={{ name: 'capricorn' }}>Capricorn</Link>
                <Link className='zod-btn' to="/home/gemini"
                    state={{ name: 'gemini' }}>Gemini</Link>
                <Link className='zod-btn' to="/home/cancer"
                    state={{ name: 'cancer' }}>Cancer</Link>
                <Link className='zod-btn' to="/home/virgo"
                    state={{ name: 'virgo' }}>Virgo</Link>


            </div>

            <div className='zod-btn-container flex flex-col items-start '>

                <Link className='zod-btn' to="/home/scorpio"
                onClick={()=>sendDataToParent(true)}
                    state={{ name: 'scorpio'}}>Scorpio</Link>
                    
                <Link className='zod-btn' to="/home/leo"
                onClick={()=>sendDataToParent(true)}
                    state={{ name: 'leo' }}>Leo</Link>
                <Link className='zod-btn' to="/home/libra"
                onClick={()=>sendDataToParent(true)}
                    state={{ name: 'libra' }}>Libra</Link>
                <Link className='zod-btn' to="/home/taurus"
                onClick={()=>sendDataToParent(true)}
                    state={{ name: 'taurus' }}>Taurus</Link>
                <Link className='zod-btn' to="/home/sagittarius"
                onClick={()=>sendDataToParent(true)}
                    state={{ name: 'sagittarius' }}>Sagittarius</Link>
                <Link className='zod-btn' to="/home/aquarius"
                onClick={()=>sendDataToParent(true)}
                    state={{ name: 'aquarius' }}>Aquarius</Link>

            </div>


        </div>
    )
}

export default ZodiacSignList