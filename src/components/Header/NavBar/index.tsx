import { FC } from 'react';
import styles from './NavBar.module.scss';
import NavLink from '../../common/NavLink';
import Button from '../../common/Button';

interface INavBar {
  open: boolean;
}
const Navbar: FC<INavBar> = ({ open }) => {
  return (
    <nav className={`${styles.menu} ${open ? styles.isOpen : ''}`}>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
          <NavLink to="">Home</NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink to="mission">Our mission</NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink to="places">Places</NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink to="team">Team</NavLink>
        </li>
      </ul>
      <Button
        text="Apply"
        width={145}
        submit={false}
        onClick={() => console.log('helo')}
      />
    </nav>
  );
};

export default Navbar;
