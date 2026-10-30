import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Criação de Sites Profissionais para Empresas | Sairaf Studio",
  description: "Criação de sites profissionais, responsivos e estratégicos para empresas de todo o Brasil. Apresente sua marca, fortaleça sua presença digital e conquiste clientes.",
  alternates: { canonical: "https://sairafstudio.com.br/criacao-de-sites" },
  openGraph: {
    title: "Criação de Sites Profissionais para Empresas | Sairaf Studio",
    description: "Sites profissionais e responsivos para empresas que querem fortalecer sua presença digital e conquistar clientes.",
    url: "https://sairafstudio.com.br/criacao-de-sites",
    type: "website",
    locale: "pt_BR"
  }
};

const faqs = [
  { q: "Por que minha empresa precisa de um site profissional?", a: "Um site apresenta sua empresa com clareza, reúne informações importantes em um só lugar e ajuda potenciais clientes a conhecer seus produtos ou serviços a qualquer hora." },
  { q: "O site funciona em celulares e tablets?", a: "Sim. O desenvolvimento considera diferentes tamanhos de tela para que a navegação e o conteúdo funcionem bem em celulares, tablets e computadores." },
  { q: "A Sairaf Studio atende empresas de todo o Brasil?", a: "Sim. O atendimento é remoto, com alinhamento do projeto e comunicação online durante as etapas de desenvolvimento." },
  { q: "Posso atualizar o site depois de publicado?", a: "Isso depende das necessidades do projeto. A estrutura e as possibilidades de atualização são definidas durante o planejamento, para que a solução faça sentido para sua empresa." }
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Criação de sites profissionais",
  serviceType: "Desenvolvimento de sites",
  provider: { "@type": "Organization", name: "Sairaf Studio", url: "https://sairafstudio.com.br" },
  areaServed: { "@type": "Country", name: "Brasil" },
  url: "https://sairafstudio.com.br/criacao-de-sites",
  description: "Desenvolvimento de sites profissionais e responsivos para empresas de todo o Brasil."
};

export default function CriacaoDeSitesPage() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className={styles.header}>
        <Link href="/" className={styles.brand} aria-label="Sairaf Studio, página inicial"><span>SAIRAF<span className={styles.dot}>.</span></span><small>TECNOLOGIA & DESENVOLVIMENTO</small></Link>
        <nav aria-label="Navegação principal"><Link href="/#servicos">Soluções e serviços</Link><Link href="/#sobre">Sobre mim</Link><Link className={styles.navCta} href="/#contato">Fale comigo ↗</Link></nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.eyebrow}><span /> DESENVOLVIMENTO WEB · ATENDIMENTO EM TODO O BRASIL</div>
        <h1>Criação de sites profissionais para empresas que querem <strong>crescer na internet.</strong></h1>
        <p>Seu site é um ponto de contato importante entre sua empresa e seus futuros clientes. Desenvolvo sites modernos, responsivos e alinhados aos objetivos do seu negócio — com estratégia, clareza e cuidado em cada detalhe.</p>
        <div className={styles.actions}><Link href="/#contato" className={styles.primary}>Converse sobre seu projeto ↗</Link><a href="#como-funciona" className={styles.secondary}>Entenda como funciona ↓</a></div>
        <div className={styles.heroMeta}><span>SITES INSTITUCIONAIS</span><span>DESIGN RESPONSIVO</span><span>ATENDIMENTO REMOTO</span></div>
      </section>

      <section className={styles.intro}>
        <div className={styles.label}>01 / POR QUE TER UM SITE</div>
        <div className={styles.introGrid}><h2>Uma presença digital que trabalha pela sua empresa.</h2><div><p>Quando alguém procura por uma empresa, quer encontrar informações confiáveis e entender rapidamente o que ela oferece. Um site bem planejado ajuda a transmitir profissionalismo, apresentar seus diferenciais e facilitar o contato.</p><p>Mais do que estar online, sua empresa precisa de um espaço digital organizado, acessível e pensado para a experiência de quem visita.</p></div></div>
      </section>

      <section className={styles.benefits}>
        <div className={styles.label}>02 / O QUE SEU SITE PRECISA TER</div>
        <div className={styles.cards}>
          <article><span>01</span><h3>Identidade profissional</h3><p>Uma apresentação consistente, com conteúdo organizado e visual alinhado à sua marca.</p></article>
          <article><span>02</span><h3>Experiência responsiva</h3><p>Navegação adaptada para celulares, tablets e computadores, sem perder clareza.</p></article>
          <article><span>03</span><h3>Informação estratégica</h3><p>Seções que explicam seus serviços, destacam diferenciais e orientam o próximo passo.</p></article>
          <article><span>04</span><h3>Contato facilitado</h3><p>Caminhos claros para que potenciais clientes tirem dúvidas e conversem com sua empresa.</p></article>
        </div>
      </section>

      <section className={styles.process} id="como-funciona">
        <div className={styles.label}>03 / COMO FUNCIONA</div>
        <div className={styles.processGrid}><h2>Do primeiro alinhamento à publicação.</h2><div className={styles.steps}>
          <article><b>01</b><div><h3>Entendimento</h3><p>Conversamos sobre sua empresa, seu público e o que o site precisa resolver.</p></div></article>
          <article><b>02</b><div><h3>Estrutura e desenvolvimento</h3><p>Organizo o conteúdo e desenvolvo a experiência visual e funcional do site.</p></div></article>
          <article><b>03</b><div><h3>Revisão e publicação</h3><p>Validamos os detalhes e preparamos o site para ficar disponível na internet.</p></div></article>
        </div></div>
      </section>

      <section className={styles.audience}>
        <div className={styles.label}>04 / PARA QUEM É</div>
        <h2>Soluções para diferentes tipos de negócio.</h2>
        <div className={styles.audienceGrid}><p><b>Comércios e lojas</b><span>Apresente sua empresa, produtos, localização e formas de atendimento.</span></p><p><b>Prestadores de serviços</b><span>Mostre o que você faz, destaque seus diferenciais e facilite novos contatos.</span></p><p><b>Pequenas empresas</b><span>Construa uma presença digital profissional e acompanhe o crescimento do negócio.</span></p></div>
      </section>

      <section className={styles.faq}>
        <div className={styles.label}>05 / DÚVIDAS FREQUENTES</div>
        <h2>O que você gostaria de saber?</h2>
        <div className={styles.faqList}>{faqs.map((item) => <details key={item.q}><summary>{item.q}<span>+</span></summary><p>{item.a}</p></details>)}</div>
      </section>

      <section className={styles.cta}><span>SEU PRÓXIMO PASSO COMEÇA AQUI</span><h2>Vamos construir uma presença digital à altura do seu negócio?</h2><p>Conte um pouco sobre sua empresa e o que você precisa. O atendimento é remoto, para todo o Brasil.</p><Link href="/#contato" className={styles.primary}>Vamos conversar ↗</Link></section>
      <footer className={styles.footer}><Link href="/">SAIRAF<span>.</span></Link><span>Soluções digitais pensadas para o seu negócio.</span><Link href="/#inicio">Voltar ao site principal ↑</Link><small>© {new Date().getFullYear()} Sairaf Studio · Tecnologia & Desenvolvimento</small></footer>
    </main>
  );
}
