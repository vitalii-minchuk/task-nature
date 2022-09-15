import { FC } from 'react';
import HeroSection from '../../components/HeroSection';
import ReadySection from '../../components/ReadySection';
import SlickSlider from '../../components/SlickSlider';
import StartSection from '../../components/StartSection';
import TeamSection from '../../components/TeamSection';

const Home: FC = () => {
  return (
    <>
      <HeroSection />
      <TeamSection />
      <StartSection />
      <ReadySection />
      <SlickSlider />
    </>
  );
};

export default Home;
