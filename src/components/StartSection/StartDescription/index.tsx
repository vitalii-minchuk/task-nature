import { FC } from 'react';
import { motion } from 'framer-motion';
import Heading from '../../common/Heading';
import styles from './StartDescription.module.scss';

const StartDescription: FC = () => {
  const loginVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={loginVariants}
      transition={{ delay: 0.2, duration: 0.5 }}
      className={styles.box}
    >
      <div className={styles.title}>
        <Heading text="Get started today!" />
      </div>
      <p className={styles.text}>
        Learn more about how you can save our planet&ldquo;s nature. From smart
        consumption to switching to renewable energy, each of us can do our part
        to save the planet.
      </p>
    </motion.div>
  );
};

export default StartDescription;
