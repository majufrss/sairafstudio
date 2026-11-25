import type { Metadata } from "next";
import ServiceLandingPage from "../components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Criação de Sites em São José e Florianópolis | Sairaf Studio",
  description: "Desenvolvimento de sites profissionais para empresas, comércios e prestadores de serviços em São José, Florianópolis e região. Atendimento remoto para todo o Brasil.",
  alternates: { canonical: "/criacao-de-sites-sao-jose" },
  openGraph: {
    title: "Criação de Sites em São José e Florianópolis | Sairaf Studio",
    description: "Desenvolvimento de sites profissionais para empresas, comércios e prestadores de serviços em São José, Florianópolis e região. Atendimento remoto para todo o Brasil.",
    url: "https://sairafstudio.com.br/criacao-de-sites-sao-jose",
    siteName: "Sairaf Studio",
    locale: "pt_BR",
    type: "website",
  },
};

export default function Page() {
  return <ServiceLandingPage
    eyebrow="CRIAÇÃO DE SITES · SÃO JOSÉ E FLORIANÓPOLIS"
    title="Criação de sites profissionais para"
    emphasis="empresas que querem crescer."
    intro="Sua empresa merece uma presença digital que transmita confiança e ajude o cliente a entender o que você oferece. A Sairaf Studio desenvolve sites responsivos, organizados e alinhados aos objetivos do seu negócio, com atendimento remoto em São José, Florianópolis, Grande Florianópolis e em todo o Brasil."
    audience="Para comércios, lojas, profissionais autônomos e pequenas empresas que precisam apresentar seus produtos ou serviços com clareza, fortalecer a marca e facilitar o contato com novos clientes. O projeto é desenvolvido à distância, com alinhamentos e validações online."
    benefits={["Apresentação profissional da empresa, serviços e diferenciais.","Layout responsivo para celular, tablet e computador.","Navegação clara, conteúdo organizado e chamadas para contato.","Integração com WhatsApp e links importantes do negócio.","Configurações técnicas básicas de SEO e compartilhamento."]}
    process={[{"title":"Conversa e planejamento","text":"Entendemos seu negócio, seu público e o que o site precisa alcançar."},{"title":"Estrutura e desenvolvimento","text":"Organizamos as informações e construímos o site com foco em clareza e experiência."},{"title":"Revisão e publicação","text":"Você revisa o resultado; após os ajustes e aprovações, colocamos o site no ar."}]}
    faq={[{"question":"O atendimento é presencial em São José?","answer":"Não. O atendimento da Sairaf Studio é remoto. Todo o processo é conduzido online, inclusive para empresas de São José e Florianópolis."},{"question":"O site funciona em celular?","answer":"Sim. O desenvolvimento considera diferentes tamanhos de tela, incluindo celulares, tablets e computadores."},{"question":"Vocês ajudam com o domínio e a publicação?","answer":"Podemos orientar a configuração do domínio e a publicação, conforme as necessidades e o escopo combinado para o projeto."},{"question":"Quanto custa criar um site?","answer":"O investimento depende da quantidade de páginas, funcionalidades, conteúdo e integrações. A primeira conversa ajuda a entender o escopo e preparar uma proposta."}]}
    related={[{"label":"Landing pages","href":"/landing-pages"},{"label":"Sistemas sob medida","href":"/sistemas-sob-medida"}]}
  />;
}
