import Link from 'next/link';
import { NextSeo } from 'next-seo';

import Container from '@/components/Container';

export default function NotFound() {
  return (
    <Container>
      <NextSeo
        title="404 – Douglas Monteiro"
        canonical="https://douglasmonteiro.dev.br/404"
        openGraph={{
          url: 'https://douglasmonteiro.dev.br/404',
          title: '404 – Douglas Monteiro'
        }}
      />
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          404 – Página não encontrada
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Por que mostrar um 404 genérico quando posso fazer com que pareça misterioso? Parece que você encontrou algo que costumava existir ou soletrou algo errado. Suponho que você soletrou algo errado. Você pode verificar essa URL?
        </p>
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-100 dark:bg-gray-900 text-center rounded-md text-black dark:text-white">
            Voltar para Home
          </a>
        </Link>
      </div>
    </Container>
  );
}
