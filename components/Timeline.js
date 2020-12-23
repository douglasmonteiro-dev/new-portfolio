import { useState } from 'react';

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2018</Year>
    <ul>
      <Step title="Eicon 🏙">
        Minha primeira experiência em uma equipe corportiva de front-end, eramos alocados em projetos diferentes a cada sprint, isso contribuiu muito para o meu crescimento profissional.
      </Step>
    </ul>
    <Divider />
    <Year>2017</Year>
    <ul>
      <Step title="Angular 🔥">
        Angular para WebApps RESTful.
      </Step>
      <Step title="Nascimento do meu Filho">
        João Pedro nasceu com 3 Kilos.
      </Step>
    </ul>
    <Divider />
    <Year>2016</Year>
    <ul>
      <Step title="Ciência da Computação 🎓">
        Concluí a Graduação.
      </Step>
    </ul>
    <Divider />
    <Year>2008</Year>
    <ul>
      <Step title="Análise de Sistemas">
        CEFET - Centro Federal de Educação Tecnologica.
      </Step>
    </ul>
    <Divider />
    <Year>2005</Year>
    <ul>
      <Step title="Web Design">
        Curso de Web Design com as ferramentas da Adobe (Flash, Dreamweaver e Fireworks).
      </Step>
    </ul>
    
    <Divider />
    <Year>2000</Year>
    <ul>
      <Step title="Primeiro Computador">
        Eu lembro da empolgação que foi o presente, era um Compaq e me abriu a janela pro mundo de tecnologia, nessa época eu virava as noites navegando e conhecendo coisas novas.
      </Step>
    </ul>
    <Divider />
    <Year>1998</Year>
    <ul>
      <Step title="Primeiro Curso de Informática">
        Nesse ano, iniciei no primeiro curso de informática básica, com 9 anos tive meu primeiro contato com um computador, era Windows 98 e Office 97. Nessa época, eu já me interessei em construir cadastros com o MS Access.
      </Step>
    </ul>
    <Divider />
    <Year>1990</Year>
    <ul>
      <Step title="Nasci 👶🏼🍼" />
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Year>2021</Year>
    <ul>
      <Step title="React 🔥">
        Atualmente.
      </Step>
    </ul>
    <Divider />
    <Year>2020</Year>
    <ul>
      <Step title="B3">
      A Bolsa de Valores do Brasil: Atuação no desenvolvimento de sistema da area de negociação da Bolsa de Valores do Brasil que é utilizado como contingência se os servidores backup da Bolsa não entrem em funcionamento no caso de alguma queda dos servidores principais, essa aplicação fica hospedada na nuvem. Tecnologias utilizadas: HTML5, CSS3, TS, Angular 9.
      </Step>
    </ul>
    <Divider />
    <Year>2019</Year>
    <ul>
      <Step title="Banco Safra">
      Atuação no desenvolvimento da funcionalidade de câmbio do sistema de caixas do Banco Safra, essa funcionalidade é utilizada por todas as agências de câmbio dos aeroportos. Ferramentas Utilizadas: HTML5, CSS3, JS, NW.js, AngularJS.
      </Step>
    </ul>
    <Divider />
    <Year>2018</Year>
    <ul>
      <Step title="Sistema Financeiro">
      Nesse ano tive minha primeira atuação no Sistema Financeiro, pude atuar na tribo de Inovação Digital, na squad de desenvolvimento da ferramenta de Crédito Consignado do Banco Votorantim. Tecnologias utilizadas: HTML5, CSS3, JS, Angular 4, Bootstrap.
      </Step>
      <Step title="IBM 🤘🏻">
        Tive a oportunidade de atuar no desenvolvimento de ferramenta de chatbot que recebe informações via chat ou pdf referente aos dados técnicos da obra de construção civil, com essas informações, consulta no sistema SAP da Gerdau em qual planta já foi fabricado o aço com as mesmas especificações ou com características próximas e gera um orçamento em menos de 1 minuto informando em qual planta será fabricado o pedido. Tecnologias utilizadas: Angular 6, Watson, Python, HTML5, CSS3, Slack, CI/CD, Git, Sonar, Bamboo, Docker, Github.
      </Step>
    </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          Ver Mais
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
