import './nav-menu.css'

function NavMenu() {

    return (
        <header className="header absolute  h-28 w-full opacity-80 z-10">
            <div className='container h-full w-full mx-auto flex items-center'>
                <div className='flex gap-32'>
                    <button className='relative humberger' id="menu-btn" type="button">
                        <span className="top"></span>
                        <span className="middle "></span>
                        <span className="bottom"></span>
                    </button>

                    <nav className='nav-links flex gap-28 text-lightYellow text-xl'>
                        <a href='./j'>Daily Horoscope</a>
                        <div>
                            <a href='./m'>Zodiac</a>

                            <div className='absolute rounded-lg py-2 bg-white text-base text-strongBlue flex'>
                                <ul className='px-4'>
                                    <li>Pisces</li>
                                    <li>Aries</li>
                                    <li>Capricorn</li>
                                    <li>Gemini</li>
                                    <li>Libra</li>
                                    <li>Taurus</li>

                                </ul>

                                <ul className='px-4'>
                                    <li>Cancer</li>
                                    <li>Virgo</li>
                                    <li>Scorpio</li>
                                    <li>Leo</li>
                                    <li>Sagittarius</li>
                                    <li>Aquarius</li>
                                </ul>
                            </div>


                        </div>

                    </nav>
                </div>
            </div>
        </header>
    )
}

export default NavMenu;