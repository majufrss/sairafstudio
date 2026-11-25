import type { Metadata } from "next";
import ServiceLandingPage from "../components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Desenvolvimento de Sistemas Sob Medida | Sairaf Studio",
  description: "Desenvolvimento de sistemas web sob medida para pequenas empresas: organize informações, simplifique rotinas e melhore processos. Atendimento remoto em todo o Brasil.",
  alternates: { canonical: "/sistemas-sob-medida" },
  openGraph: {
    title: "Desenvolvimento de Sistemas Sob Medida | Sairaf Studio",
    description: "Sistemas personalizados para organizar informações, simplificar rotinas e apoiar processos de pequenas empresas. Desenvolvimento web com atendimento remoto.",
    url: "https://sairafstudio.com.br/sistemas-sob-medida",
    siteName: "Sairaf Studio",
    locale: "pt_BR",
    type: "website",
  },
};

export default function Page() {
  return <ServiceLandingPage
    eyebrow="SISTEMAS SOB MEDIDA · DESENVOLVIMENTO WEB"
    title="Sistemas sob medida para simplificar"
    emphasis="a rotina da sua empresa."
    intro="Quando planilhas, controles manuais e ferramentas desconectadas começam a dificultar o trabalho, uma solução personalizada pode ajudar. A Sairaf Studio desenvolve sistemas web de acordo com os processos e as prioridades de cada negócio."
    audience="Para pequenas empresas e operações de todo o Brasil que precisam centralizar informações, organizar etapas de trabalho ou reduzir tarefas repetitivas. O atendimento é remoto e cada projeto começa pelo entendimento do processo: as funcionalidades são definidas conforme a necessidade e o escopo."
    benefits={["Levantamento das necessidades e dos processos atuais.","Definição de funcionalidades prioritárias e fluxos de uso.","Interfaces organizadas para facilitar as tarefas do dia a dia.","Estrutura de dados e recursos definidos conforme o escopo.","Testes, validação e orientação para utilização da solução."]}
    process={[{"title":"Entendimento do processo","text":"Mapeamos a rotina, os desafios e o que precisa melhorar."},{"title":"Escopo e prioridades","text":"Definimos o que faz sentido construir primeiro e como a solução deve funcionar."},{"title":"Desenvolvimento e validação","text":"Construímos por etapas, validamos os fluxos e refinamos a solução com você."}]}
    faq={[{"question":"Todo negócio precisa de um sistema personalizado?","answer":"Não. Primeiro avaliamos o problema. Em alguns casos, uma página, uma integração ou uma melhoria no processo pode ser suficiente."},{"question":"É possível desenvolver por etapas?","answer":"Sim. Quando o projeto permite, priorizamos as funcionalidades essenciais e planejamos evoluções futuras."},{"question":"O sistema pode ser acessado pela internet?","answer":"Podemos desenvolver soluções web, com acesso pelo navegador. Os requisitos de acesso, hospedagem e segurança são definidos conforme o projeto."},{"question":"Como é definido o investimento?","answer":"O valor depende das funcionalidades, regras de negócio, integrações e complexidade. O escopo é alinhado antes do desenvolvimento."}]}
    related={[{"label":"Criação de sites","href":"/criacao-de-sites-sao-jose"},{"label":"Landing pages","href":"/landing-pages"}]}
  />;
}
