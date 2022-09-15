/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC } from 'react';
import styles from './NavBar.module.scss';
import NavLink from '../../common/NavLink';
import Button from '../../common/Button';

interface INavBar {
  open: boolean;
  closeMenu: () => void;
}
const Navbar: FC<INavBar> = ({ open, closeMenu }) => {
  return (
    <nav className={`${styles.menu} ${open && styles.isOpen}`}>
      <ul className={styles.menuList}>
        <li onClick={closeMenu} className={styles.menuItem}>
          <NavLink to="">Home</NavLink>
        </li>
        <li onClick={closeMenu} className={styles.menuItem}>
          <NavLink to="mission">Our mission</NavLink>
        </li>
        <li onClick={closeMenu} className={styles.menuItem}>
          <NavLink to="places">Places</NavLink>
        </li>
        <li onClick={closeMenu} className={styles.menuItem}>
          <NavLink to="team">Team</NavLink>
        </li>
      </ul>
      <Button
        text="Apply"
        width={open ? 0 : 145}
        submit={false}
        onClick={() => console.log('hello')}
      />
    </nav>
  );
};

export default Navbar;
