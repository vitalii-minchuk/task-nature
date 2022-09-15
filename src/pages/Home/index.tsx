import { FC } from 'react';
import HeroSection from '../../components/HeroSection';
import ReadySection from '../../components/ReadySection';
import StartSection from '../../components/StastSection';

const Home: FC = () => {
  return (
    <>
      <HeroSection />
      <StartSection />
      <ReadySection />
    </>
  );
};

export default Home;
