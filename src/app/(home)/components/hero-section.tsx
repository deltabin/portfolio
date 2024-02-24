import { MovingBorderBtn } from '@/components/ui/moving-border';
import Link from 'next/link';
import { Title } from './title';

export const HeroSection = () => {
  return (
    <div className='flex min-h-[60vh] flex-col-reverse items-center justify-between gap-14 lg:flex-row lg:gap-0'>
      <div className='space-y-10 text-center lg:text-left'>
        <h1 className='text-4xl font-bold lg:text-7xl'>
          Nice to meet you! 👋
          <br />{' '}
          <span className='underline decoration-rose-500 underline-offset-8'>I'm Alikhan.</span>
        </h1>
        <p className='text-lg text-gray-300 md:w-96'>
          Based in Kazakhstan, I'm a Frontend developer passionate about building a modern web
          application what users love.
        </p>
        <Link href={'mailto:khakimov.alikhan@gmail.com'} className='group inline-block'>
          <Title text='Contact me 📫' />
        </Link>
      </div>
      <div className='relative'>
        <div className='relative h-72 w-72 -rotate-[30deg] space-y-3'>
          <div className='flex translate-x-8 gap-3'>
            <div className='h-32 w-32 rounded-2xl bg-rose-500' />
            <div className='h-32 w-32 rounded-full bg-indigo-500' />
          </div>
          <div className='flex -translate-x-8 gap-3'>
            <div className='h-32 w-32 rounded-2xl bg-indigo-500' />
            <div className='h-32 w-32 rounded-full bg-rose-500' />
          </div>
          <div className='glow absolute right-1/2 top-[40%] -z-10' />
        </div>
        <div className='absolute bottom-5 left-0 sm:-left-10 sm:bottom-14'>
          <MovingBorderBtn borderRadius='0.5rem' className='p-3 font-semibold'>
            <p>📢 Available for work</p>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
};
