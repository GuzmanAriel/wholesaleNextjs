import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import OurServices from './components/OurServices';
import PartnerWithUs from './components/PartnerWithUs';
import { getPageBySlug } from './lib/api';

export default async function Home() {
  const page = await getPageBySlug('home');
  const rawContent = page.content.rendered || '';

  // Split content at both shortcodes
  const shortcodeRegex = /\[hero\]|\[our_services\]|\[how_it_works\]|\[partner_with_us\]/g;
  const parts = rawContent.split(shortcodeRegex);
  const shortcodes = [...rawContent.matchAll(shortcodeRegex)].map((m) => m[0]);

  return (
    <>
        {parts.map((part: string, index: number) => {
          const shortcode = shortcodes[index];
          console.log('shortcodes found:', shortcodes);
          return (
            <div key={index}>
              <div dangerouslySetInnerHTML={{ __html: part }} />

              {shortcode === '[hero]' && (
                <Hero
                  title={page.acf?.hero_title ?? 'Page Title Needed'}
                  subtitle={page.acf?.hero_subtitle ?? 'Sub Title Needed'}
                  ctaLabel={page.acf?.cta_label ?? 'Partner With Us'}
                  ctaLink={page.acf?.cta_button_link ?? '#contact'}
                />
              )}

              {shortcode === '[our_services]' && (
                <OurServices
                  title={page.acf?.title ?? 'Our Services'}
                  subTitle={page.acf?.sub_title ?? ''}
                  services={page.acf?.services ?? ''}
                />
              )}

            {shortcode === '[how_it_works]' && (
              <>
                <HowItWorks />
              </>
            )}

          {shortcode === '[partner_with_us]' && (
              <>
                <PartnerWithUs />
              </>
            )}

            </div>
          );
        })}
    </>
  );
}
