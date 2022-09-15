import { FC } from 'react';
import Heading from '../../common/Heading';
import styles from './StartDescription.module.scss';

const StartDescription: FC = () => {
  return (
    <div className={styles.box}>
      <div className={styles.title}>
        <Heading text="Get started today!" />
      </div>
      <p className={styles.text}>
        Learn more about how you can save our planet&ldquo;s nature. From smart
        consumption to switching to renewable energy, each of us can do our part
        to save the planet.
      </p>
    </div>
  );
};

export default StartDescription;
