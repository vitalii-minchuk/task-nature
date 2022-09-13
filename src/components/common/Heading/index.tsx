import { FC } from 'react';
import styles from './Heading.module.scss';

interface IHeading {
  text: string;
}

const Heading: FC<IHeading> = ({ text }) => {
  return <h2 className={styles.heading}>{text}</h2>;
};

export default Heading;
