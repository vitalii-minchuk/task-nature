import { FC } from 'react';
import ReadyDescription from './ReadyDescription';
import ReadyOptions from './ReadyOptions';
import styles from './ReadySection.module.scss';

const ReadySection: FC = () => {
  return (
    <section className="container">
      <div className={styles.wrapper}>
        <ReadyDescription />
        <ReadyOptions />
      </div>
    </section>
  );
};

export default ReadySection;
