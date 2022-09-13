import { FC } from 'react';
import Button from '../common/Button';
import Logo from './Logo';
import Navbar from './NavBar';

const Header: FC = () => {
  return (
    <div>
      <Logo />
      <Navbar />
      <Button text="hello" submit={false} onClick={() => console.log('helo')} />
    </div>
  );
};

export default Header;
