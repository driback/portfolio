import Link from 'next/link';
import EmailIcon from './icons/email-icon';
import GithubIcon from './icons/github-icon';
import LinkedinIcon from './icons/linkedin-icon';

const links = [
  {
    url: 'https://www.linkedin.com/in/fikri-febrianto/',
    icon: LinkedinIcon,
    label: 'Linkedin',
  },
  {
    url: 'https://github.com/driback/',
    icon: GithubIcon,
    label: 'Github',
  },
  {
    url: 'mailto:fikrifebrn@gmail.com',
    icon: EmailIcon,
    label: 'Email',
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4">
      {links.map((link) => (
        <Link
          key={link.url}
          href={link.url}
          prefetch={false}
          target="_blank"
          className="flex items-center text-sm hover:underline"
        >
          <link.icon className="size-4" />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
