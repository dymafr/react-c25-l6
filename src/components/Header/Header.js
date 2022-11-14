import React, { useState } from 'react';
import styles from './Header.module.scss';
import HeaderMenu from './components/HeaderMenu';
import { NavLink, useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { wishlistDisplayState } from '../../state';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const setWishlistDisplay = useSetRecoilState(wishlistDisplayState);
  const location = useLocation();

  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <NavLink to="/">
          <img
            src="https://github.com/dymafr/react-c5l4/blob/master/src/assets/images/cookchef.png?raw=true"
            alt="logo cookchef"
          />
        </NavLink>
      </div>
      <ul className={styles.headerList}>
        <NavLink to="/admin">
          <button className="btn btn-primary mr-15">Admin</button>
        </NavLink>
        {!location.pathname.includes('admin') && (
          <button
            onClick={() => setWishlistDisplay(true)}
            className="mr-15 btn btn-reverse-primary"
          >
            <i className="fa-solid fa-heart mr-5"></i>
            <span>Wishlist</span>
          </button>
        )}
        {/* <button className="btn btn-primary">Connexion</button> */}
      </ul>
      <i
        onClick={() => setShowMenu(true)}
        className={`fa-solid fa-bars ${styles.headerXs}`}
      ></i>
      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className="calc"></div>
          <HeaderMenu
            displayWishlist={() => setWishlistDisplay(true)}
            hideMenu={() => setShowMenu(false)}
          />
        </>
      )}
    </header>
  );
}

export default Header;
