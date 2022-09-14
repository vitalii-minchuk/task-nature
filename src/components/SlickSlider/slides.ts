import slide_1 from '../../assets/slide_1.png';
import slide_2 from '../../assets/slide_2.png';
import slide_3 from '../../assets/slide_3.png';
import slide_4 from '../../assets/slide_4.png';
import slide_5 from '../../assets/slide_5.png';

export type Slide = {
  id: number;
  img: string;
  title: string;
  description: string;
};

export const slides = [
  {
    id: 1,
    img: slide_1,
    title: 'Choose organic',
    description:
      'Taking on the issue of ensuring access to safe water requires worldwide effort.',
  },
  {
    id: 2,
    img: slide_2,
    title: 'Plant trees',
    description:
      'Taking on the issue of ensuring access to safe water requires worldwide effort.',
  },
  {
    id: 3,
    img: slide_3,
    title: 'Save water',
    description:
      'Taking on the issue of ensuring access to safe water requires worldwide effort.',
  },
  {
    id: 4,
    img: slide_4,
    title: 'Save energy',
    description:
      'Taking on the issue of ensuring access to safe water requires worldwide effort.',
  },
  {
    id: 5,
    img: slide_5,
    title: 'Avoid plastic',
    description:
      'Taking on the issue of ensuring access to safe water requires worldwide effort.',
  },
  {
    id: 6,
    img: slide_3,
    title: 'Save water',
    description:
      'Taking on the issue of ensuring access to safe water requires worldwide effort.',
  },
];
