export async function getPageBySlug(slug) {
    const res = await fetch(`http://f4fsellscom.local/wp-json/wp/v2/pages?slug=${slug}`);
    const data = await res.json();
    return data[0]; // first match
  }

  