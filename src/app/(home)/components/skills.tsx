'use client';

import { HoverEffect } from '@/components/ui/card-hover-effect';
import {
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si';
import { Title } from './title';

export const Skills = () => {
  const skills = [
    {
      text: 'React',
      Icon: SiReact
    },
    {
      text: 'Next.js',
      Icon: SiNextdotjs
    },
    {
      text: 'Tailwind',
      Icon: SiTailwindcss
    },
    {
      text: 'Git',
      Icon: SiGit
    },
    {
      text: 'Supabase',
      Icon: SiSupabase
    },
    {
      text: 'Postgres',
      Icon: SiPostgresql
    },
    {
      text: 'Node.JS',
      Icon: SiNodedotjs
    },
    {
      text: 'JavaScript',
      Icon: SiJavascript
    },
    {
      text: 'TypeScript',
      Icon: SiTypescript
    }
  ];

  return (
    <div className='mx-auto max-w-5xl px-8'>
      <Title text='Skills 🔪' className='flex -rotate-6 flex-col items-center justify-center' />
      <HoverEffect items={skills} />
    </div>
  );
};
