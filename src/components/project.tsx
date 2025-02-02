import { GlobeIcon } from 'lucide-react';
import Link from 'next/link';
import GithubIcon from './icons/github-icon';
import { Button } from './ui/button';

const projects: ProjectProps[] = [
  {
    name: 'Refly',
    repo: 'https://github.com/driback/refly',
    web: 'https://refly00.vercel.app/',
    description:
      'Refly is a bookmark management application for organizing and storing web links. To use it, you first need to log in.',
    stacks: [
      { name: 'Next.js', url: 'https://nextjs.org/' },
      { name: 'Tailwindcss', url: 'https://tailwindcss.com/' },
      { name: 'Postgresql', url: 'https://www.postgresql.org/' },
    ],
  },
  {
    name: 'Rion',
    repo: 'https://github.com/driback/rion',
    description:
      'Rion is a application that allows you to efficiently copy files from a shared Google Drive link to your account. To use it, you first need to log in, then connect your Google Drive account. After that, you simply paste the link into the input form and select a folder.',
    stacks: [
      { name: 'Next.js', url: 'https://nextjs.org/' },
      { name: 'Tailwindcss', url: 'https://tailwindcss.com/' },
      { name: 'Postgresql', url: 'https://www.postgresql.org/' },
      { name: 'Redis', url: 'https://redis.io/' },
    ],
  },
  {
    name: 'Pixel',
    repo: 'https://github.com/driback/pixel',
    description:
      'Pixel is a application that allows you to pixelate an image. To use it, you first need to upload your image. After that, you can adjust the pixel size and download the pixelated image.',
    stacks: [
      { name: 'Next.js', url: 'https://nextjs.org/' },
      { name: 'Tailwindcss', url: 'https://tailwindcss.com/' },
    ],
  },
];

const Projects = () => {
  return (
    <>
      {projects.map((project) => (
        <Project key={project.name} {...project} />
      ))}
    </>
  );
};

export default Projects;

type ProjectProps = ProjectStacksProps & {
  name: string;
  repo: string;
  web?: string;
  description: string;
};

const Project = ({ name, repo, description, stacks, web }: ProjectProps) => {
  return (
    <div className="flex flex-col gap-2 border p-4">
      <div className="flex items-center justify-end gap-2">
        <h2 className="start mr-auto font-semibold">{name}</h2>
        {!web ? null : (
          <Button asChild variant="ghost" size="icon" className="rounded-none">
            <Link
              href={web}
              target="_blank"
              className="group relative isolate grid place-content-center overflow-hidden p-2"
            >
              <GlobeIcon className="size-4" />
            </Link>
          </Button>
        )}
        <Button asChild variant="ghost" size="icon" className="rounded-none">
          <Link
            href={repo}
            target="_blank"
            className="group relative isolate grid place-content-center overflow-hidden p-2"
          >
            <GithubIcon className="size-4" />
          </Link>
        </Button>
      </div>
      <p className="text-[.8rem]">{description}</p>
      <ProjectStacks stacks={stacks} />
    </div>
  );
};

type ProjectStacksProps = { stacks: { name: string; url: string }[] };
const ProjectStacks = ({ stacks }: ProjectStacksProps) => {
  return (
    <div className="mt-4 flex flex-col gap-2">
      <span className="text-sm">Made with</span>
      <div className="flex items-center gap-4">
        {stacks.map((stack) => (
          <Link
            key={stack.url}
            href={stack.url}
            target="_blank"
            prefetch={false}
            className="text-[.8rem] hover:underline"
          >
            {stack.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
