import React, { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import caltexLogo from '../../Components/images/caltex_logo.png';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navber">
        <div className="nav-l">
          <img src={caltexLogo} alt="" />
        </div>
        <div className={`nav-r ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li className="nav-items" onClick={handleMenuItemClick}>
              <ScrollLink to="deisel" spy smooth>
                DEISEL
              </ScrollLink>
            </li>
            <li className="nav-items" onClick={handleMenuItemClick}>
              <ScrollLink to="petrol" spy smooth>
                PETROL
              </ScrollLink>
            </li>
            <li className="nav-items" onClick={handleMenuItemClick}>
              <ScrollLink to="deisel" spy smooth>
                DEISEL
              </ScrollLink>
            </li>
            <li className="nav-items" onClick={handleMenuItemClick}>
              <ScrollLink to="petrol" spy smooth>
                PETROL
              </ScrollLink>
            </li>
            {/* Add similar lines for other navigation links */}
            <li className="nav-items" onClick={handleMenuItemClick}>
              <ScrollLink to="contact" spy smooth>
                CONTACT US
              </ScrollLink>
            </li>
          </ul>
        </div>
        <span className="icon" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fa-solid fa-bars"></i>
        </span>
      </nav>
    </>
  );
}

export default Header;



    // < li className = "nav-items" onClick = { handleMenuItemClick } > <a>DEISEL</a></li >
    //     <li className="nav-items" onClick={handleMenuItemClick}><a>PETROL</a></li>