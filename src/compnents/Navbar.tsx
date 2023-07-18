import React, { useState } from 'react';

import Styles from '../styles/Navbar.module.css';
import HamburgerMenu from './HamburgerMenu';
import IconLoader from './IconLoader';

function Navbar() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const onOpenHamburgerMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  return (
    <div className={Styles.container}>
      <button className={Styles.hamburgerMenuBtn} onClick={onOpenHamburgerMenu}>
        <IconLoader icon="GiHamburgerMenu" size={32} color="393939" />
      </button>
      <HamburgerMenu showMenu={showHamburgerMenu} />
      {!showHamburgerMenu && <h1>Home</h1>}
      <div className="rightIcons">
        <IconLoader icon="AiOutlineHeart" size={28} color="393939" />
        <IconLoader icon="AiOutlineShoppingCart" size={28} color="393939" />
      </div>
    </div>
  );
}

export default Navbar;
