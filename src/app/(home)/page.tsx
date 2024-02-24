import { HeroSection } from './components/hero-section';
import { NavBar } from './components/navbar';
import { Skills } from './components/skills';

const HomePage = () => {
  return (
    <div className='min-h-[400vh] overflow-hidden bg-black'>
      <div className='dark:bg-grid-white/[0.05] bg-grid-black/[0.2]  relative bg-white dark:bg-black'>
        <div className='mx-auto max-w-7xl p-5'>
          <NavBar />
          <HeroSection />
        </div>
        <div className='absolute -bottom-5 left-0 h-10 w-full bg-gradient-to-t from-black xl:bottom-0 xl:h-32'></div>
      </div>
      <div className='mx-auto mt-20 max-w-7xl p-5'>
        <Skills />
      </div>
    </div>
  );
};

export default HomePage;
