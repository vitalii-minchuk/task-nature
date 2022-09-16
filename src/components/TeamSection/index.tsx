import { FC } from 'react';
import { motion } from 'framer-motion';
import Heading from '../common/Heading';
import styles from './TeamSection.module.scss';
import photo_1 from '../../assets/photo_1.png';
import photo_2 from '../../assets/photo_2.png';
import photo_3 from '../../assets/photo_3.png';
import decor from '../../assets/decor_3.png';

const TeamSection: FC = () => {
  const photoVariants = {
    hidden: {
      y: 500,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  const decorVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <section className="container">
      <div className={styles.wrapper}>
        <div className={styles.headingBox}>
          <Heading text="Our top team" />
          <p>Learn more about how you can save our planet&lsquo;s nature.</p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.photosBox}
        >
          <motion.div
            custom={1}
            variants={photoVariants}
            className={styles.photo_1}
          >
            <img src={photo_1} alt="photo_1" />
          </motion.div>
          <motion.div
            custom={2}
            variants={photoVariants}
            className={styles.photo_2}
          >
            <img src={photo_2} alt="photo_2" />
          </motion.div>
          <motion.div
            custom={3}
            variants={photoVariants}
            className={styles.photo_3}
          >
            <img src={photo_3} alt="photo_3" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
            variants={decorVariants}
            className={styles.decor_1}
          >
            <img src={decor} alt="decor" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
            variants={decorVariants}
            className={styles.decor_2}
          >
            <img src={decor} alt="decor" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
