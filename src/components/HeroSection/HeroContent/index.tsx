import { ChangeEvent, FC, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './HeroContent.module.scss';
import headline from '../../../assets/Headline.png';
import Button from '../../common/Button';

const HeroContent: FC = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const contentVariants = {
    hidden: {
      x: -600,
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
        variants={contentVariants}
        className={styles.img}
        src={headline}
        alt="headline"
      />
      <motion.p custom={2} variants={contentVariants} className={styles.text}>
        The scale of the challenges facing our planet can seem daunting, but we
        can all do something.
      </motion.p>
      <motion.div
        custom={2}
        variants={contentVariants}
        className={styles.searchBox}
      >
        <div className={styles.iconBox}>
          <svg
            width="14"
            height="20"
            viewBox="0 0 14 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 0C3.134 0 0 3.134 0 7C0 12 7 20 7 20C7 20 14 12 14 7C14 3.134 10.866 0 7 0ZM7 10C5.343 10 4 8.657 4 7C4 5.343 5.343 4 7 4C8.657 4 10 5.343 10 7C10 8.657 8.657 10 7 10Z"
              fill="#666666"
            />
          </svg>
        </div>
        <input
          onChange={handleSearch}
          className={styles.input}
          type="text"
          placeholder="Find the place to help"
        />
        <div className={styles.bthBox}>
          <Button
            width={100}
            onClick={() => console.log(search)}
            isRed
            isUpperCase
            text="search"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
