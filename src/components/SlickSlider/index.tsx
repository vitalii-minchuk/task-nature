import { useRef, useState } from 'react';
import Slider from 'react-slick';
import { slides } from './slides';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Slider.module.scss';
import SingleSlide from './SingleSlide';
import sliderConfig from './slider-config';

const SlickSlider = () => {
  const [mainSlide, setMainSlide] = useState(0);
  const ref = useRef<Slider>(null);

  const goToNextSlide = () => ref.current?.slickNext();

  const goToPrevSlide = () => ref.current?.slickPrev();

  return (
    <div className={styles.wrapper}>
      <Slider
        ref={ref}
        responsive={sliderConfig}
        beforeChange={(currentSlide: number, nextSlide: number) =>
          setMainSlide(nextSlide)
        }
      >
        {slides?.map((slide, index) => (
          <SingleSlide
            key={slide.id}
            isActive={index === mainSlide}
            slide={slide}
          />
        ))}
      </Slider>
      <div className={styles.sliderActions}>
        <button
          type="button"
          className={styles.sliderArrows}
          onClick={goToPrevSlide}
        >
          <svg
            width="8"
            height="16"
            viewBox="0 0 8 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.212403 7.46465L6.74633 0.721429C7.03304 0.42619 7.49754 0.42619 7.78497 0.721429C8.07168 1.01667 8.07168 1.49621 7.78497 1.79145L1.76931 7.99963L7.78425 14.2078C8.07095 14.503 8.07095 14.9826 7.78425 15.2786C7.49754 15.5738 7.03231 15.5738 6.74561 15.2786L0.211679 8.53535C-0.0706816 8.24317 -0.0706816 7.75609 0.212403 7.46465Z"
              fill="#1E1A20"
            />
          </svg>
        </button>
        <p className={styles.sliderDisplay}>
          {mainSlide + 1}
          <span> / {slides.length}</span>
        </p>
        <button
          type="button"
          className={styles.sliderArrows}
          onClick={goToNextSlide}
        >
          <svg
            width="8"
            height="16"
            viewBox="0 0 8 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.7876 7.46465L1.25367 0.721429C0.966964 0.42619 0.502457 0.42619 0.215028 0.721429C-0.0716761 1.01667 -0.0716761 1.49621 0.215028 1.79145L6.23069 7.99963L0.215752 14.2078C-0.070952 14.503 -0.070952 14.9826 0.215752 15.2786C0.502457 15.5738 0.967688 15.5738 1.25439 15.2786L7.78832 8.53535C8.07068 8.24317 8.07068 7.75609 7.7876 7.46465Z"
              fill="#1E1A20"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SlickSlider;
