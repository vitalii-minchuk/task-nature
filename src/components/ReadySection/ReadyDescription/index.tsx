import { FC } from 'react';
import Button from '../../common/Button';
import Heading from '../../common/Heading';
import styles from './ReadyDescription.module.scss';

const ReadyDescription: FC = () => {
  return (
    <div className={styles.box}>
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
    </div>
  );
};

export default ReadyDescription;
