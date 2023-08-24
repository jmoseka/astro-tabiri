import './nav-menu.css'

function NavMenu() {

    return (
        <div className="navmenu absolute bg-blue h-32 w-full opacity-80 z-10">
            <div className='container h-full w-full mx-auto flex'>
                <button className='my-auto relative humberger' id="menu-btn" type="button">
                    <span className="top"></span>
                    <span className="middle "></span>
                    <span className="bottom"></span>
                </button>
            </div>
        </div>
    )
}

export default NavMenu;