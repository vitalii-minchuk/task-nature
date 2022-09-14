/* eslint-disable react/jsx-props-no-spreading */
import { FC, ReactNode } from 'react';
import { Link, useMatch } from 'react-router-dom';

interface INavLink {
  to: string;
  children: ReactNode;
}

const NavLink: FC<INavLink> = ({ children, to, ...props }) => {
  const match = useMatch({
    path: to,
    end: to.length === 0,
  });

  return (
    <Link to={to} {...props} style={{ fontWeight: match ? '700' : '400' }}>
      {children}
    </Link>
  );
};

export default NavLink;
