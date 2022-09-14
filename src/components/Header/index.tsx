import { FC, useState } from 'react';
import styles from './Header.module.scss';
import Logo from './Logo';
import Navbar from './NavBar';
import Actions from './Actions';

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Logo />
          <Navbar open={isOpen} />
          <Actions open={isOpen} onClick={handleMenuOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
