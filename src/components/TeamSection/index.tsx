import { FC } from 'react';
import Heading from '../common/Heading';
import styles from './TeamSection.module.scss';
import photo_1 from '../../assets/photo_1.png';
import photo_2 from '../../assets/photo_2.png';
import photo_3 from '../../assets/photo_3.png';
import decor from '../../assets/decor_3.png';

const TeamSection: FC = () => {
  return (
    <section className="container">
      <div className={styles.wrapper}>
        <div className={styles.headingBox}>
          <Heading text="Our top team" />
          <p>Learn more about how you can save our planet&lsquo;s nature.</p>
        </div>
        <div className={styles.photosBox}>
          <div className={styles.photo_1}>
            <img src={photo_1} alt="photo_1" />
          </div>
          <div className={styles.photo_2}>
            <img src={photo_2} alt="photo_2" />
          </div>
          <div className={styles.photo_3}>
            <img src={photo_3} alt="photo_3" />
          </div>
          <div className={styles.decor_1}>
            <img src={decor} alt="decor" />
          </div>
          <div className={styles.decor_2}>
            <img src={decor} alt="decor" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
