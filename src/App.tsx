import { FC } from 'react';
import Accordion from './components/Accordion';
import Heading from './components/common/Heading';
import Header from './components/Header';
import Slider from './components/SlickSlider';

const App: FC = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Accordion />
      <Heading text="Get started today!" />
    </div>
  );
};

export default App;
