const title = 'Douglas Monteiro';
const description =
  'Desenvolvedor de Front-end, entusiasta de JavaScript, e pai.';

const SEO = {
  title,
  description,
  canonical: 'https://douglasmonteiro.dev.br',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://douglasmonteiro.dev.br',
    title,
    description,
    images: [
      {
        url: 'https://douglasmonteiro.dev.br/static/images/banner.jpg',
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
