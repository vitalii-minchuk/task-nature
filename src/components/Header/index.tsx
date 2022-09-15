import { FC, useEffect, useState } from 'react';
import styles from './Header.module.scss';
import Logo from './Logo';
import Navbar from './NavBar';
import Actions from './Actions';
import { WindowSize } from '../../types';

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState<WindowSize | null>(null);

  const handleMenuOpen = () => {
    if (size) {
      if (size.width < 700) {
        setIsOpen(!isOpen);
      }
    }
  };

  useEffect(() => {
    const getWindowSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', getWindowSize);

    return () => window.removeEventListener('resize', getWindowSize);
  }, []);

  useEffect(() => {
    if (size) {
      if (size.width > 700 && isOpen) {
        setIsOpen(false);
      }
    }
  }, [isOpen, size]);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Logo />
          <Navbar open={isOpen} closeMenu={handleMenuOpen} />
          <Actions open={isOpen} onClick={handleMenuOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
