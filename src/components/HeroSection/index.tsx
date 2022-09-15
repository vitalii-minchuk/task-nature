import { FC } from 'react';
import HeroContent from './HeroContent';
import HeroImg from './HeroImg';
import styles from './HeroSection.module.scss';

const HeroSection: FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.wrapper} container`}>
        <HeroContent />
        <HeroImg />
      </div>
    </section>
  );
};

export default HeroSection;
