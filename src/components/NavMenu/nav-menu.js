import { useEffect, useState } from 'react';
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
    const [propFromChild, setPropFromChild] = useState(false);

  // Function to receive the prop from ZodList
  const handlePropFromChild = (prop) => {
    setPropFromChild(prop);
  };
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

    useEffect(() => {
        setPropFromChild(propFromChild);

        if(propFromChild) {

            // DROP MENU REPEATED FUNCTION
            setIsCircleOpen(!isCircleOpen)
            setIsHeaderPresent(!isHeaderPresent)
            setIsOpen(!isOpen);
            setIsOverlayOpen(!isOverlayOpen);
    
            if (isOpen === false) {
                setIsZodiacListOpen(false)
            }

            setPropFromChild(false)
        }
     
    }, [isCircleOpen, isHeaderPresent, isOpen, isOverlayOpen, propFromChild])

 

    const displayZodiac = () => {
        setIsZodiacListOpen(!isZodiacListOpen);
    }

    return (
        <header className={`header w-full 
         ${isHeaderPresent ? 'header-present' : ''} flex `}>

            <nav className=' w-[98%] md:w-[97%]  h-fit text-[.8rem] nav-menu flex justify-end gap-24  '>

                <button onClick={() => dropMenu()} typeof='button' id='nav-btn'
                    className='nav-button  border border-transparent rounded-lg order-last cursor-pointer h-fit flex items-center justify-center
                      group translate-y-6 '>

                    <div className={`flex cursor-pointer flex-col  items-center w-[3.1rem] h-[3.1rem] `}>
                        <div className={`translate-y-4 relative humberger ${isOpen ? 'open' : ''}`} id="menu-btn">
                            <span className='top group-hover:bg-gold60'></span>
                            <span className="middle group-hover:bg-gold60"></span>
                            <span className="bottom group-hover:bg-gold60"></span>
                        </div>
                    </div>

                </button>

                <div className={`nav-items translate-y-10 justify-center  gap-10 
                    ${isHeaderPresent ? 'flex ' : 'hidden'}`}>

                    <div>

                        <div className={`relative mx-auto}`}>
                            {/* zodiac sign button labels */}

                            <button onClick={() => displayZodiac()} className='zod-link nav-menu-link py-1 px-6
                             w-full flex gap-1 justify-center items-center'>
                                <p>Zodiac signs</p>
                                {isZodiacListOpen ? <MdOutlineKeyboardArrowUp className='text-[1.4rem]' /> :
                                    <MdOutlineKeyboardArrowDown className='text-[1.4rem]' />}

                            </button>

                            <div className={` translate-y-2`}>

                                <div>
                                    {
                                        isZodiacListOpen ?
                                            <div className='text-[.9rem]  zodiac-list-cont'>
                                                <ZodiacSignList onPropToParent={handlePropFromChild} />
                                            </div>

                                            :

                                            ''

                                    }


                                </div>
                            </div>
              

                        </div>

                    </div>

                    <div className='py-1 hover:opacity-[0.8] dark:hover:text-lightActive'>
                        <Link className='nav-menu-link uppercase' to="/home">Daily Horoscope</Link>
                    </div>




                </div>




            </nav>
        </header>
    )
}

export default NavMenu;