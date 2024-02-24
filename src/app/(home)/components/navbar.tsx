import Link from 'next/link';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';

export const NavBar = () => {
  const socials = [
    {
      link: 'https://www.linkedin.com/in/khakimov-alikhan',
      label: 'Linkedin',
      Icon: SiLinkedin
    },
    {
      link: 'https://www.linkedin.com/in/khakimov-alikhan',
      label: 'Github',
      Icon: SiGithub
    },
    {
      link: 'https://www.linkedin.com/in/khakimov-alikhan',
      label: 'X',
      Icon: SiX
    }
  ];

  return (
    <nav className='flex items-center justify-between py-10'>
      <h1 className='-rotate-2 text-2xl font-bold underline decoration-rose-500 underline-offset-8'>
        deltabin. 🧑‍💻
      </h1>
      <div className='flex items-center gap-5'>
        {socials.map(({ link, label, Icon }) => (
          <Link href={link} key={label} aria-label={label}>
            <Icon className='h-5 w-5 transition-all hover:scale-125 ' />
          </Link>
        ))}
      </div>
    </nav>
  );
};
