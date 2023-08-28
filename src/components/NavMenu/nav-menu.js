import { useState } from 'react';
import './nav-menu.css'

function NavMenu({ updateOverlayState }) {

    const [isCircleOpen, setIsCircleOpen] = useState(false);
    const [isHeaderPresent, setIsHeaderPresent] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const dropMenu = () => {
        setIsCircleOpen(!isCircleOpen)
        setIsHeaderPresent(!isHeaderPresent)
        setIsOpen(!isOpen);
        setIsOverlayOpen(!isOverlayOpen);
        updateOverlayState(!isOverlayOpen)

    }

    return (
        <header className={`border text-lightYellow w-full header mx-auto ${isHeaderPresent ? 'header-present' : ''}
          h-full md:h-24 absolute `}>

            <div className='container  header-container mx-auto pt-6 flex'>

                <div className='order-first'>
                    <h1 className='p-4 bg-orange-800 text-white border'>LOGO</h1>
                </div>


                <nav className={`w-full h-auto bg-yellow-400 nav-links 
                flex border items-center justify-end  text-sm`}>

                    <div className={`nav-menu-links flex bg-cyan-700 ${isHeaderPresent ? 'block' : 'hidden'} `}>
                        <div className='zodiac-signs relative'>
                            <a className='uppercase zod-link' href='./m'>Zodiac signs</a>
                            <div className='zod-overlay  absolute p-7'></div>

                            <div className='zod-card mt-6'>
                                <div className='zod-btn-container flex flex-col items-start'>
                                    <button type='button' className='zod-btn'>Pisces</button>
                                    <button type='button' className='zod-btn'>Aries</button>
                                    <button type='button' className='zod-btn'>Capricorn</button>
                                    <button type='button' className='zod-btn'>Gemini</button>


                                </div>

                                <div className='zod-btn-container flex flex-col items-start border-x'>
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


                        </div>

                        <a className='uppercase' href='./j'>Daily Horoscope</a>
                    </div>


                    <div className='z-20 ml-auto'>
                        {/* <div className='order-first md:hidden'>
                    <h1 className='p-4 text-white border'>LOGO</h1>
                </div> */}

                        <button onClick={() => dropMenu()} typeof='button' id='nav-btn'
                            className='  ml-auto  nav-button cursor-pointer h-auto bg-cyan-500'>
                            <div className={`circle-btn rounded-full flex-col items-center p-4 w-[3.7rem] h-[3.7rem]`}>
                                <div className={`relative humberger ${isOpen ? 'open' : ''}`} id="menu-btn" type="button">
                                    <span className="top"></span>
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