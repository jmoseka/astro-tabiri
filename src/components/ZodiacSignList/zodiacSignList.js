import { Link } from 'react-router-dom';

const ZodiacSignList = () => {


    return (


        <div className='flex'>
            <div className='zod-btn-container flex flex-col items-start'>
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
                    state={{ name: 'scorpio' }}>Scorpio</Link>
                <Link className='zod-btn' to="/home/leo"
                    state={{ name: 'leo' }}>Leo</Link>
                <Link className='zod-btn' to="/home/libra"
                    state={{ name: 'libra' }}>Libra</Link>
                <Link className='zod-btn' to="/home/taurus"
                    state={{ name: 'taurus' }}>Taurus</Link>
                <Link className='zod-btn' to="/home/sagittarius"
                    state={{ name: 'sagittarius' }}>Sagittarius</Link>
                <Link className='zod-btn' to="/home/aquarius"
                    state={{ name: 'aquarius' }}>Aquarius</Link>

            </div>


        </div>
    )
}

export default ZodiacSignList