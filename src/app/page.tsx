import Link from 'next/link';
import Projects from '~/components/project';
import SocialLinks from '~/components/social-links';
import ThemeToggle from '~/components/theme-toggle';

export default function Home() {
  return (
    <div className="mx-auto flex min-h-[100dvh] w-full max-w-screen-md flex-col py-8 [&>*:last-child]:pb-0">
      <main className="relative flex w-full flex-col gap-8">
        <section className="relative isolate flex flex-col gap-4">
          <h1 className="max-w-[5ch] text-balance font-semibold text-3xl">
            Fikri Febrianto
          </h1>
          <p className="w-full max-w-[26rem] text-balance text-sm">
            I&apos;m Web Developer with the expertise in Frameworks /
            Programming Languages{' '}
            <Link
              href="https://react.dev/"
              target="_blank"
              className="font-medium underline"
            >
              React
            </Link>{' '}
            +{' '}
            <Link
              href="https://nodejs.org/"
              target="_blank"
              className="font-medium underline"
            >
              Node
            </Link>{' '}
            +{' '}
            <Link
              href="https://nextjs.org/"
              target="_blank"
              className="font-medium underline"
            >
              Next.js
            </Link>{' '}
            +{' '}
            <Link
              href="https://www.typescriptlang.org/"
              target="_blank"
              className="font-medium underline"
            >
              TypeScript
            </Link>{' '}
            etc.
          </p>
          <ThemeToggle />
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="font-semibold">Projects</h2>
          <Projects />
        </section>
      </main>
      <footer className="flex justify-end py-8">
        <SocialLinks />
      </footer>
    </div>
  );
}
