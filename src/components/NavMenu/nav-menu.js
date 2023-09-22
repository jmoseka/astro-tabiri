import { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
import './nav-menu.css'
import { Link } from 'react-router-dom';
import ZodiacSignList from '../ZodiacSignList/zodiacSignList';

function NavMenu() {


    const [isCircleOpen, setIsCircleOpen] = useState(false);
    const [isHeaderPresent, setIsHeaderPresent] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [isZodiacListOpen, setIsZodiacListOpen] = useState(false);
    // const [isPointerEnable, setIsPointerEnable] = useState(false);


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
        <header className={`absolute  text-textLightGold header w-full 
         ${isHeaderPresent ? 'header-present' : ''} flex `}>

            <nav className=' w-[98%] md:w-[92%]  h-fit text-[.8rem] nav-menu flex justify-end gap-24  '>

                <button onClick={() => dropMenu()} typeof='button' id='nav-btn'
                    className='nav-button order-last cursor-pointer z-30 h-fit flex items-center justify-center
                     hover:opacity-[0.8] translate-y-6'>
                    <div className={`flex cursor-pointer flex-col  items-center w-[3.7rem] h-[3.7rem] `}>
                        <div className={`relative humberger ${isOpen ? 'open' : ''}`} id="menu-btn">
                            <span className={`top bg-darkGold`}></span>
                            <span className="middle bg-darkGold "></span>
                            <span className="bottom bg-darkGold"></span>
                        </div>
                    </div>

                </button>

                <div className={`nav-items translate-y-5 justify-center  gap-10 
                    ${isHeaderPresent ? 'flex ' : 'hidden'}`}>

                    <div>

                        <div className={`relative mx-auto}`}>
                            {/* zodiac sign button labels */}

                            <button onClick={() => displayZodiac()} className='nav-menu-link py-1 px-6 w-full flex gap-1 justify-center items-center'>
                                <p>Zodiac signs</p>
                                {isZodiacListOpen ? <MdOutlineKeyboardArrowUp className='text-[1.4rem]' /> :
                                    <MdOutlineKeyboardArrowDown className='text-[1.4rem]' />}

                            </button>

                            <div className={` translate-y-2`}>

                                <div>
                                    {
                                        isZodiacListOpen ?
                                            <div className='text-[.9rem] zod-link zodiac-list-cont'>
                                                <ZodiacSignList />
                                            </div>

                                            :

                                            ''

                                        // <div className='opacity-0 border rounded-md text-[.9rem]'>
                                        //     <div className='absolute w-full h-full z-40'></div>
                                        //     <ZodiacSignList />
                                        // </div>

                                    }


                                </div>
                            </div>
                            {/* <div className={`relative zod-card  ${isZodiacListOpen ? 'zod-card-open' : 'hidden'} mt-2`}>
                            <div className=''>
                                <ZodiacSignList />
                            </div>
                        </div> */}

                        </div>

                    </div>

                    <div className='py-1 hover:opacity-[0.8]'>
                        <Link className='nav-menu-link uppercase' to="/home">Daily Horoscope</Link>
                    </div>




                </div>




            </nav>
        </header>
    )
}

export default NavMenu;