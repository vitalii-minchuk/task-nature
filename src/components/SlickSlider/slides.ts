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
  { id: 1, img: slide_1, title: 'slide 1', description: 'a very good slide' },
  { id: 2, img: slide_2, title: 'slide 2', description: 'a very good slide' },
  { id: 3, img: slide_3, title: 'slide 3', description: 'a very good slide' },
  { id: 4, img: slide_4, title: 'slide 4', description: 'a very good slide' },
  { id: 5, img: slide_5, title: 'slide 5', description: 'a very good slide' },
];
