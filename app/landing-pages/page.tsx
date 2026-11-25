import type { Metadata } from "next";
import ServiceLandingPage from "../components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Criação de Landing Pages para Empresas | Sairaf Studio",
  description: "Criação de landing pages profissionais para divulgar serviços, apresentar ofertas e gerar contatos. Desenvolvimento sob medida com atendimento remoto para todo o Brasil.",
  alternates: { canonical: "/landing-pages" },
  openGraph: {
    title: "Criação de Landing Pages para Empresas | Sairaf Studio",
    description: "Landing pages responsivas para divulgar serviços, apresentar ofertas e gerar contatos. Desenvolvimento sob medida com atendimento remoto em Santa Catarina e todo o Brasil.",
    url: "https://sairafstudio.com.br/landing-pages",
    siteName: "Sairaf Studio",
    locale: "pt_BR",
    type: "website",
  },
};

export default function Page() {
  return <ServiceLandingPage
    eyebrow="LANDING PAGES · PÁGINAS ESTRATÉGICAS"
    title="Landing pages criadas para transformar"
    emphasis="visitas em oportunidades."
    intro="Uma página objetiva pode ajudar seu público a entender sua oferta e dar o próximo passo. A Sairaf Studio desenvolve landing pages responsivas para divulgar serviços, campanhas e produtos, com conteúdo organizado e chamadas para ação claras."
    audience="Para prestadores de serviços, pequenos negócios e empresas de qualquer região do Brasil que precisam divulgar uma oferta específica, captar pedidos de orçamento ou direcionar visitantes para uma conversa no WhatsApp. O atendimento é 100% remoto."
    benefits={["Estrutura de conteúdo alinhada ao objetivo da campanha ou serviço.","Hierarquia visual para destacar oferta, benefícios e diferenciais.","Chamadas para ação e caminhos de contato bem posicionados.","Experiência responsiva para celular, tablet e computador.","Configurações básicas de SEO e prévia para compartilhamento."]}
    process={[{"title":"Objetivo e público","text":"Definimos para quem a página será feita e qual ação queremos facilitar."},{"title":"Mensagem e estrutura","text":"Organizamos a proposta, os argumentos e a sequência das informações."},{"title":"Desenvolvimento e revisão","text":"Construímos a página, testamos em diferentes telas e ajustamos antes da publicação."}]}
    faq={[{"question":"Qual a diferença entre site e landing page?","answer":"O site costuma apresentar a empresa e diferentes informações. A landing page é mais focada em uma oferta, campanha ou ação específica."},{"question":"Uma landing page pode ter botão de WhatsApp?","answer":"Sim. Podemos incluir chamadas para conversar, solicitar orçamento ou seguir para outro canal de atendimento."},{"question":"Preciso ter os textos e imagens prontos?","answer":"Podemos alinhar o conteúdo necessário no início do projeto. A organização das informações faz parte do planejamento da página."},{"question":"A página pode ser usada em anúncios?","answer":"Sim. A estrutura pode ser preparada para receber visitantes de campanhas, embora resultados dependam também da oferta, do público, do anúncio e de outros fatores."}]}
    related={[{"label":"Criação de sites","href":"/criacao-de-sites-sao-jose"},{"label":"Sistemas sob medida","href":"/sistemas-sob-medida"}]}
  />;
}
