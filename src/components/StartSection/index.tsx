import { FC } from 'react';
import StartDescription from './StartDescription';
import StartLogin from './StartLogin';
import styles from './StartSection.module.scss';

const StartSection: FC = () => {
  return (
    <section className="container">
      <div className={styles.wrapper}>
        <StartDescription />
        <StartLogin />
      </div>
    </section>
  );
};

export default StartSection;
