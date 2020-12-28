import Link from 'next/link';
import { NextSeo } from 'next-seo';

import Container from '@/components/Container';

const Talk = ({ title, link, children }) => (
  <>
    <h3 className="font-medium mb-2 text-lg">
      <a
        className="flex items-center text-gray-900 dark:text-gray-100"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        {title}
        <div>
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </a>
    </h3>
    <p className="text-gray-600 dark:text-gray-400 mb-8">{children}</p>
  </>
);

export default function About() {
  return (
    <Container>
      <NextSeo
        title="Sobre Mim – Douglas Monteiro"
        canonical="https://douglasmonteiro.dev.br/about"
        openGraph={{
          url: 'https://douglasmonteiro.dev.br/about',
          title: 'Sobre Mim – Douglas Monteiro'
        }}
      />
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Sobre Mim
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Oi, Eu sou Douglas. Sou desenvolvedor e pai.
          </p>
          <p>
            Eu cresci em Guarulhos, de origem pobre, estudei o ensino médio em escola pública e me formei na graduação com a ajuda financeira de programas de incentivo a estudo para pessoas de baixa renda. Na faculdade conheci minha esposa e formamos uma família linda com 2 filhos, gosto de passear com eles e conhecer lugares diferentes.
          </p>
        </div>
        <h2 className="font-bold text-3xl tracking-tight mb-4 text-black dark:text-white">
          Links que eu acho interessante
        </h2>
        <Talk
          title="Curso de Angular - Loiane Groner"
          link="https://www.youtube.com/watch?v=tPOMG0D57S0&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G"
        >
         Loiane Groner é Engenheira de Software no Citibank e trabalha com tecnologia desde 2006. é Brasileira e atualmente mora na Florida, acredito que ela seja a maior influenciadora das tecnologias de Front End no Brasil, seu curso é ótimo.
        </Talk>
        <Talk
          title="Desenvolvimento Web Moderno - Felipe Deschamps"
          link="https://www.youtube.com/watch?v=EW7m2WIvFgQ"
        >
         Outro influenciador importante no Brasil é o Felipe Deschamps, antes de se dedicar 100% ao YouTube foi CTO do Pagar.me. Com vasta experiência em programação e também em gestão, nesse vídeo ele fala sobre o quanto o React é revolucionário e os benefícios em criar sites modernos com Next.js. 
        </Talk>
        <Talk
          title="React: componentes com Styled Components - Mario Souto"
          link="https://www.alura.com.br/artigos/react-componentes-com-styled-components"
        >
          Nesse artigo publicado no Blog da Alura, Mario Souto, que foi meu professor no primeiro curso de Angular pela Caelum, fala sobre Styled Components com React.
        </Talk>
        
        <iframe
          height="280"
          src="https://www.google.com/maps/d/embed?mid=1_Pzn3dhaGUgdIPPkauXoP0CaidXJcf68"
          title="Meus caminhos de costume"
          width="100%"
        />
      </div>
    </Container>
  );
}
