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
          Sou desenvolvedor Javascript, escrevi minha primeira linha de código em 2008 quando iniciei o curso de Tecnologia em Análise e Desenvolvimento de Sistemas no CEFET/SP (atualmente Instituto Federal de São Paulo) e foi em C, antes disso, aos 15 anos ja tive minha primeira experiancia com desenvolvimento de sites em um curso de Web Design que ensinava a criar sites com as ferramentas da Adobe (Flash, Dreamweaver e Fireworks), de lá pra cá naveguei em águas profundas de Java a Assembly.
Em 2016 concluí a graduação em Ciência da Computação na Universidade São Judas Tadeu e desde então trabalho com Desenvolvimento de Front-End.
Nos últimos anos, com o renascimento da Web através do Javascript, tenho me focado nessa área e trabalhado com aplicações Web e frameworks como Angular e React.
        </h2>
       
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projetos
        </h3>
        <ProjectCard
          title="B3: A Bolsa de Valores do Brasil - Negociação 2020"
          description="Atuação no desenvolvimento de sistema da area de negociação da Bolsa de Valores do Brasil que é utilizado como contingência se os servidores backup da Bolsa não entrem em funcionamento no caso de alguma queda dos servidores principais, essa aplicação fica hospedada na nuvem, o projeto consiste em uma squad com 2 desenvolvedores, 1 tester, Scrum Master e PO. O projeto está dividido em tres fases, a primeira foi entregue em Dezembro/2020. Este projeto tem integraçao com o backend atraves de API´s REST. Tecnologias utilizadas: HTML5, CSS3, TS, Angular 9."
          href="http://www.b3.com.br/pt_br/"
          icon="b3"
        />
        <ProjectCard
          title="Banco Safra - Câmbio 2019"
          description="Atuação no desenvolvimento da funcionalidade de câmbio do sistema de caixas do Banco Safra, essa funcionalidade é utilizada por todas as agências de câmbio dos aeroportos. Ferramentas Utilizadas:  HTML5, CSS3, JS, NW.js, AngularJS."
          href="https://www.safra.com.br/servicos/pessoa-fisica/cambio.htm"
          icon="safra"
        />
        <ProjectCard
          title="Banco Votorantim - Consignado 2018"
          description="Atuação na tribo de Inovação Digital, na squad de desenvolvimento da ferramenta de Crédito Consignado do Banco Votorantim. Squad composta por 6 desenvolvedores, 2 testers, Scrum Master e PO. Tecnologias utilizadas: HTML5, CSS3, JS, Angular 4, Bootstrap."
          href="https://www.bv.com.br/consignado/consignado-privado"
          icon="bv"
        />
        <ProjectCard
          title="Eicon Controles Inteligentes - GISS Online 2017"
          description="Integrei o time de desenvolvimento do front-end da aplicação. Utilizando a metodologia SCRUM e as linguagens HTML, CSS e Javascript, com automatizadores de tarefas e alguns frameworks como Bootstrap, AngularJS e Angular"
          href="https://portal.gissonline.com.br/"
          icon="eicon"
        />
        <Timeline />
      </div>
    </Container>
  );
}
