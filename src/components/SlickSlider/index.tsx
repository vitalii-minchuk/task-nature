import { useRef, useState } from 'react';
import Slider from 'react-slick';
import { slides } from './slides';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Slider.module.scss';
import SlideCard from './SlideCard';

const SlickSlider = () => {
  const [mainSlide, setMainSlide] = useState(0);
  const ref = useRef<Slider>(null);

  const goToNextSlide = () => ref.current?.slickNext();

  const goToPrevSlide = () => ref.current?.slickPrev();

  return (
    <div style={{ width: '100%', height: '250px' }}>
      <Slider
        ref={ref}
        slidesToShow={4}
        slidesToScroll={1}
        centerMode
        infinite
        speed={300}
        beforeChange={(currentSlide: number, nextSlide: number) =>
          setMainSlide(nextSlide)
        }
      >
        {slides?.map((slide, index) => (
          <SlideCard
            key={slide.id}
            isActive={index === mainSlide}
            slide={slide}
          />
        ))}
      </Slider>
      <div className={styles.sliderActions}>
        <button type="button" onClick={goToPrevSlide}>
          -
        </button>
        <div>
          <p>
            {mainSlide + 1} / {slides.length}
          </p>
        </div>
        <button type="button" onClick={goToNextSlide}>
          +
        </button>
      </div>
    </div>
  );
};

export default SlickSlider;
