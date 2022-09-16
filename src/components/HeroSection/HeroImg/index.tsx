import { FC } from 'react';
import { motion } from 'framer-motion';
import styles from './HeroImg.module.scss';
import card from '../../../assets/card.png';
import parrot from '../../../assets/Parrot.png';

const HeroImg: FC = () => {
  const imagesVariants = {
    hidden: {
      x: 600,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.5 },
    }),
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={styles.wrapper}
    >
      <motion.img
        custom={1}
        variants={imagesVariants}
        className={styles.cardImg}
        src={card}
        alt="card"
      />
      <motion.img
        custom={3}
        variants={imagesVariants}
        className={styles.parrotImg}
        src={parrot}
        alt="parrot"
      />
      <div className={styles.decor} />
    </motion.div>
  );
};

export default HeroImg;
