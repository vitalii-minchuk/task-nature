import React, { FC } from 'react';
import { Slide } from './slides';

interface ISlideCard {
  slide: Slide;
  isActive: boolean;
}

const SlideCard: FC<ISlideCard> = ({ slide, isActive }) => {
  return (
    <div>
      <img src={slide.img} alt={slide.img} />
      <div>{slide.title}</div>
      {isActive && <div>hellio</div>}
    </div>
  );
};

export default SlideCard;
