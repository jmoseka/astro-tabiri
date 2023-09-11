import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import './nav-menu.css'
import { Link } from 'react-router-dom';

function NavMenu() {
    

    const [isCircleOpen, setIsCircleOpen] = useState(false);
    const [isHeaderPresent, setIsHeaderPresent] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [isZodiacListOpen, setIsZodiacListOpen] = useState(false);


    const dropMenu = () => {
        setIsCircleOpen(!isCircleOpen)
        setIsHeaderPresent(!isHeaderPresent)
        setIsOpen(!isOpen);
        setIsOverlayOpen(!isOverlayOpen);
       


        if (isOpen === false) {
            setIsZodiacListOpen(false)
        }

    }

    const displayZodiac = () => {
        setIsZodiacListOpen(!isZodiacListOpen);
    }

    return (
        <header className={` text-textLightGold min-w-full header
         ${isHeaderPresent ? 'header-present' : ''}
         py-4 absolute `}>

            <div className='container py-1 md:py-2 left-0 top-0 flex 
             header-container mx-auto '>

                <div className='hidden order-first self-center'>
                    <h1 className='p-3 hidden md:block border text-white '>LOGO</h1>
                </div>


                <nav className={`w-full nav-links 
                flex flex-col md:flex-row md:items-center gap-12 text-[.8rem]`}>

                    <div className={`nav-menu-links w-auto md:w-full h-full md:h-auto
                      ${isHeaderPresent ? 'flex ' : 'hidden'} 
                     flex-col gap-8 items-center md:flex-row md:justify-end md:gap-20`}>

                        {/* FIRST LINK ZODIAC SIGNS */}

                        <div className='zodiac-signs relative  md:order-first '>
                            <button onClick={() => displayZodiac()} className={`p-2 hover:text-yellow w-full flex justify-center items-center 
                            gap-1 ${isZodiacListOpen ? 'border rounded-md text-yellow border-yellow' : ''}
                            `}>
                                <p className='uppercase zod-link '>Zodiac signs</p>
                                <MdOutlineKeyboardArrowDown className='text-[1.4rem]' />
                            </button>

                            <div className={`zod-card  ${isZodiacListOpen ? 'zod-card-open' : 'hidden'} mt-2`}>
                                <div className='zod-btn-container flex flex-col items-start'>
                                    <Link className='zod-btn' 
                                    to= "/home/pisces"
                                    state= { {name: 'pisces' }} // Pass it as an object
                                      

                                        >Pisces</Link>
                                    <button type='button' className='zod-btn'>Aries</button>
                                    <button type='button' className='zod-btn'>Capricorn</button>
                                    <button type='button' className='zod-btn'>Gemini</button>


                                </div>

                                <div className='zod-btn-container flex flex-col items-start '>
                                    <button type='button' className='zod-btn'>Cancer</button>
                                    <button type='button' className='zod-btn'>Virgo</button>
                                    <button type='button' className='zod-btn'>Scorpio</button>
                                    <button type='button' className='zod-btn'>Leo</button>

                                </div>

                                <div className='zod-btn-container flex flex-col items-start'>
                                    <button type='button' className='zod-btn'>Libra</button>
                                    <button type='button' className='zod-btn'>Taurus</button>
                                    <button type='button' className='zod-btn'>Sagittarius</button>
                                    <button type='button' className='zod-btn'>Aquarius</button>
                                </div>
                            </div>
                            {/* <div className='zod-overla absolute p-1'></div> */}


                        </div>


                        {/* SECOND LINK DAILY HOROSCOPE */}

                        <div className='p-2 hover:text-yellow'>
                            <Link className='uppercase' to="/home">Daily Horoscope</Link>
                        </div>
                    </div>

                    {/* BUTTON */}

                    <div className='z-20  md:ml-auto order-first md:order-last flex justify-between'>
                        <div className='order-first hidden md:hidden'>
                            <h1 className='p-4 ml-2 text-white border'>LOGO</h1>
                        </div>

                        <button onClick={() => dropMenu()} typeof='button' id='nav-btn'
                            className='  ml-auto nav-button cursor-pointer h-auto'>
                            <div className={`flex flex-col items-center p-4 w-[3.7rem] h-[3.7rem]`}>
                                <div className={`relative humberger ${isOpen ? 'open' : ''}`} id="menu-btn">
                                    <span className={`top`}></span>
                                    <span className="middle "></span>
                                    <span className="bottom"></span>
                                </div>
                            </div>

                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default NavMenu;