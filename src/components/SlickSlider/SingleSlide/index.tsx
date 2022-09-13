import { FC } from 'react';
import { Slide } from '../slides';
import styles from './SingleSlide.module.scss';

interface ISingleSlide {
  slide: Slide;
  isActive: boolean;
}

const SingleSlide: FC<ISingleSlide> = ({ slide, isActive }) => {
  return (
    <div>
      {isActive ? (
        <div>{slide.title}</div>
      ) : (
        <div className={styles.box}>
          <img src={slide.img} alt={slide.img} />
          <div>{slide.title}</div>
        </div>
      )}
    </div>
  );
};

export default SingleSlide;
