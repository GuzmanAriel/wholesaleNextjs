// src/app/page.tsx
import Hero from './components/Hero';
import { getPageBySlug } from './lib/api';

export default async function Home() {
  const page = await getPageBySlug('home');

  return (
    <>
      <Hero />
      <main className="prose mx-auto p-8 text-primary">
        <h1>{page.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
      </main>
    </>
  );
}
