import { FC } from 'react';
import { Slide } from '../slides';
import styles from './SingleSlide.module.scss';
import backgroundImg from '../../../assets/bg.png';

interface ISingleSlide {
  slide: Slide;
  isActive: boolean;
}

const SingleSlide: FC<ISingleSlide> = ({ slide, isActive }) => {
  return (
    <div className={styles.box}>
      {isActive ? (
        <div className={styles.mainSlideBox}>
          <div className={styles.smallImgBox}>
            <img className={styles.smallImg} src={slide.img} alt={slide.img} />
          </div>
          <img
            className={styles.roundedBG}
            src={backgroundImg}
            alt="background img"
          />
          <div className={styles.mainSlideContent}>
            <h5 className={styles.mainSlideTitle}>{slide.title}</h5>
            <p className={styles.mainSlideText}>{slide.description}</p>
          </div>
        </div>
      ) : (
        <div className={styles.simpleSlideBox}>
          <div className={styles.simpleSlideImgBox}>
            <img
              className={styles.simpleSlideImg}
              src={slide.img}
              alt={slide.img}
            />
            <h5 className={styles.simpleSlideTitle}>{slide.title}</h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleSlide;
