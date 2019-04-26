import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/svg/logo.svg';

import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.host}>
      <img src={logo} className={styles.logo} alt="logo" />
      <div className={styles.navigation}>
        <NavLink to="/" exact activeClassName={styles.active}>
          Home
        </NavLink>
        <NavLink to="/about" activeClassName={styles.active}>
          About
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
