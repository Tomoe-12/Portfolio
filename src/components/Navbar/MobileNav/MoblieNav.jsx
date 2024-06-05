import './MobileNav.css'

import PropTypes from 'prop-types';
import './MobileNav.css';

const MoblieNav = ({ isOpen, toggleMenu }) => {
    return (
        <div className={`mobile-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <div className="mobile-menu-container">
                <img src="" className='logo' alt="" />
                <ul>
                    <li>
                        <a href="" className='menu-item'>Home</a>
                    </li>
                    <li>
                        <a className='menu-item' >Skills</a>
                    </li>
                    <li>
                        <a className='menu-item' >Work Experience</a>
                    </li>
                    <li>
                        <a className='menu-item' >Contact Me</a>
                    </li>

                    <button className='contact-btn' onClick={() => {}}>Hire me</button>
                </ul>
            </div>
        </div>
    )
}

MoblieNav.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
};



export default MoblieNav


