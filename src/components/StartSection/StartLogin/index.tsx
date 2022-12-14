import { FC, FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../../common/Button';
import styles from './StartLogin.module.scss';
import decor_1 from '../../../assets/decor_1.png';
import decor_2 from '../../../assets/decor_2.png';

const StartLogin: FC = () => {
  const [value, setValue] = useState({ name: '', email: '' });

  const onSubmit = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(value);
    setValue({ name: '', email: '' });
  };
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
      transition={{ delay: 0.4, duration: 0.5 }}
      className={styles.box}
    >
      <h4 className={styles.title}>Log in</h4>
      <form>
        <div className={styles.inputBox}>
          <input
            placeholder="Name"
            onChange={(e) => setValue({ ...value, name: e.target.value })}
            type="text"
          />
          <input
            placeholder="Email"
            onChange={(e) => setValue({ ...value, email: e.target.value })}
            type="text"
          />
        </div>
        <Button
          onClick={onSubmit}
          submit
          isRed
          isUpperCase
          width={0}
          text="Book a demo"
        />
      </form>
      <div className={styles.decor1}>
        <img src={decor_1} alt="decor_1" />
      </div>
      <div className={styles.decor2}>
        <img src={decor_2} alt="decor_2" />
      </div>
    </motion.div>
  );
};

export default StartLogin;
