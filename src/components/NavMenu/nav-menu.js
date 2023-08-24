import './nav-menu.css'

function NavMenu() {

    return (
        <header className="header absolute  h-32 w-full opacity-80 z-10">
            <div className='container h-full w-full mx-auto flex items-center'>
                <div className='flex gap-32'>
                <button className='relative humberger' id="menu-btn" type="button">
                    <span className="top"></span>
                    <span className="middle "></span>
                    <span className="bottom"></span>
                </button>

                <nav className='nav-links flex gap-28 text-lightYellow text-xl'>
                    <a href='./j'>Daily Horoscope</a>
                    <a href='./m'>Zodiac</a>
                </nav>
                </div>
            </div>
        </header>
    )
}

export default NavMenu;