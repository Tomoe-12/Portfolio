import { useState } from 'react'
import './Navbar.css'
import MoblieNav from './MobileNav/MoblieNav'
import { Link } from 'react-scroll'
const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (

        <>
            <MoblieNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className='nav-wrapper'>
                <div className='nav-content'>
                    <img className='logo' src='' alt="" />
                    <ul>
                        <li>
                            <Link to='home' className='menu-item' spy={true} smooth={true} duration={400} >Home</Link>
                        </li>
                        <li>
                            <Link to='skills' className='menu-item' spy={true} smooth={true} duration={400} >Skills</Link>
                        </li>
                        <li>
                            <Link to='experience' className='menu-item' spy={true} smooth={true} duration={400} >Work Experience</Link>
                        </li>
                        <li>
                            <Link to='contact' className='menu-item' spy={true} smooth={true} duration={400} >Contact Me</Link>
                        </li>
                        <button className='contact-btn btn' onClick={() => { }}>Hire Me</button>
                    </ul>

                    <button className='menu-btn' onClick={toggleMenu}>
                        <span className={`material-symbols-outlined text-[1.8rem]`}>
                            {openMenu ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar