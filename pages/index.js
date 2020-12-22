import Timeline from '../components/Timeline';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import Subscribe from '../components/Subscribe';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Olá, Sou Douglas Monteiro
        </h1>
        <h2 className="text-gray-600 dark:text-gray-400 mb-16">
          Sou desenvolvedor Javascript, escrevi minha primeira linha de código em 2008 quando iniciei o curso de Tecnologia em Análise e Desenvolvimento de Sistemas no CEFET/SP (atualmente Instituto Federal de São Paulo) e foi em C, de lá pra cá naveguei em águas profundas de Java a Assembly.
Em 2016 concluí a graduação em Ciência da Computação na Universidade São Judas Tadeu e desde então trabalho com Desenvolvimento de Front-End.
Nos últimos anos, com o renascimento da Web através do Javascript, tenho me focado nessa área e trabalhado com aplicações Web e frameworks como Angular e React.
        </h2>
       
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projetos
        </h3>
        <ProjectCard
          title="B3 Negociação 2020"
          description="Build and deploy a modern Jamstack application using the most popular open-source software."
          href="https://react2025.com/"
          icon="react2025"
        />
        <ProjectCard
          title="Safra Câmbio 2019"
          description="Build and deploy a modern Jamstack application using the most popular open-source software."
          href="https://react2025.com/"
          icon="react2025"
        />
        <ProjectCard
          title="BV Consignado 2018"
          description="Integrei o time de desenvolvimento do front-end da aplicação. Utilizando a metodologia SCRUM e as linguagens HTML, CSS e Javascript, com automatizadores de tarefas e alguns frameworks como Bootstrap, AngularJS e Angular"
          href="https://masteringnextjs.com/"
          icon="nextjs"
        />
        <ProjectCard
          title="Eicon GISS Online 2017"
          description="Integrei o time de desenvolvimento do front-end da aplicação. Utilizando a metodologia SCRUM e as linguagens HTML, CSS e Javascript, com automatizadores de tarefas e alguns frameworks como Bootstrap, AngularJS e Angular"
          href="https://fastfeedback.io/"
          icon="fastfeedback"
        />
        <Timeline />
      </div>
    </Container>
  );
}
