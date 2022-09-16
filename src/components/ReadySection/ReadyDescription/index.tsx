import { FC } from 'react';
import { motion } from 'framer-motion';
import Button from '../../common/Button';
import Heading from '../../common/Heading';
import styles from './ReadyDescription.module.scss';

const ReadyDescription: FC = () => {
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
      transition={{ delay: 0.6, duration: 0.8 }}
      className={styles.box}
    >
      <div className={styles.title}>
        <Heading text="Ready to Get started?" />
      </div>
      <p className={styles.text}>
        When pattern is mentioned in interior design, it is easy to asso- ciate
        it with a geometric patterned wallpaper or colourful prints on interior
        fabrics.
      </p>
      <Button
        width={166}
        isRed
        isUpperCase
        onClick={() => console.log('contact us')}
        text="Contact us"
      />
    </motion.div>
  );
};

export default ReadyDescription;
