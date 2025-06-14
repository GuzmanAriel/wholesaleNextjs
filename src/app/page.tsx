// src/app/page.tsx
import { getPageBySlug } from './lib/api';

export default async function Home() {
  const page = await getPageBySlug('home'); // or use getHomePage()

  return (
    <main className="prose mx-auto p-8">
      <h1>{page.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
    </main>
  );
}
