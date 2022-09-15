import { FC } from 'react';
import styles from './HeroImg.module.scss';
import card from '../../../assets/card.png';
import parrot from '../../../assets/Parrot.png';

const HeroImg: FC = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.cardImg} src={card} alt="card" />
      <img className={styles.parrotImg} src={parrot} alt="parrot" />
    </div>
  );
};

export default HeroImg;
