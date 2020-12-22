const title = 'Douglas Monteiro – Developer, writer, creator.';
const description =
  'Front-end developer, JavaScript enthusiast, and course creator.';

const SEO = {
  title,
  description,
  canonical: 'https://douglasmonteiro.dev',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://douglasmonteiro.dev',
    title,
    description,
    images: [
      {
        url: 'https://douglasmonteiro.dev/static/images/banner.jpg',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@dgsmonteiro',
    site: '@dgsmonteiro',
    cardType: 'summary_large_image'
  }
};

export default SEO;
