import { FC } from 'react';
import Accordion from '../../Accordion';
import styles from './ReadyOptions.module.scss';

const ReadyOptions: FC = () => {
  return (
    <div className={styles.box}>
      <Accordion />
    </div>
  );
};

export default ReadyOptions;
