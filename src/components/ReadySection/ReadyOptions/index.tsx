import { motion } from 'framer-motion';
import { FC } from 'react';
import Accordion from '../../Accordion';
import styles from './ReadyOptions.module.scss';

const ReadyOptions: FC = () => {
  const readyVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={readyVariants}
      transition={{ delay: 0.3, duration: 0.7 }}
      className={styles.box}
    >
      <Accordion />
    </motion.div>
  );
};

export default ReadyOptions;
