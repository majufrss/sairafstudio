import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react";
import styles from "./ServiceLandingPage.module.css";

type ServiceLandingPageProps = {
  eyebrow: string;
  title: string;
  emphasis: string;
  intro: string;
  audience: string;
  benefits: string[];
  process: { title: string; text: string }[];
  faq: { question: string; answer: string }[];
  related: { label: string; href: string }[];
};

export default function ServiceLandingPage(props: ServiceLandingPageProps) {
  const whatsapp = "5548984339780";
  const message = encodeURIComponent("Olá! Encontrei a Sairaf Studio pelo site e gostaria de conversar sobre um projeto.");
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="Sairaf Studio — página inicial">
          <span className={styles.symbol}>s<span>.</span></span>
          <span>SAIRAF<small>TECNOLOGIA & DESENVOLVIMENTO</small></span>
        </Link>
        <nav aria-label="Navegação da página">
          <Link href="/#servicos">Serviços</Link>
          <Link href="/#sobre">Sobre</Link>
          <a className={styles.navCta} href={`https://wa.me/${whatsapp}?text=${message}`} target="_blank" rel="noreferrer">Fale comigo <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <div className={styles.breadcrumb}><Link href="/"><ArrowLeft size={14}/> Início</Link><span>/</span><span>{props.eyebrow}</span></div>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}><i/> {props.eyebrow}</span>
          <h1>{props.title} <em>{props.emphasis}</em></h1>
          <p>{props.intro}</p>
          <div className={styles.actions}>
            <a className={styles.primary} href={`https://wa.me/${whatsapp}?text=${message}`} target="_blank" rel="noreferrer">Conversar sobre meu projeto <ArrowUpRight size={17}/></a>
            <Link className={styles.secondary} href="/#servicos">Ver todas as soluções <ArrowLeft size={14}/></Link>
          </div>
          <div className={styles.remote}>ATENDIMENTO 100% REMOTO <span>·</span> SÃO JOSÉ, FLORIANÓPOLIS E TODO O BRASIL</div>
        </div>
        <aside className={styles.visual} aria-label="Resumo do processo de desenvolvimento">
          <div className={styles.visualTop}><span>SAIRAF / DIGITAL</span><span>01 — 03</span></div>
          <div className={styles.visualBody}><span className={styles.visualTag}>ESTRATÉGIA + TECNOLOGIA</span><strong>Seu negócio<br/><em>bem apresentado.</em></strong><div className={styles.rule}/><p>Uma solução digital pensada para a realidade da sua empresa.</p><div className={styles.visualFoot}><span>CLAREZA</span><span>EXPERIÊNCIA</span><span>OBJETIVO</span></div></div>
        </aside>
      </section>

      <section className={styles.content}>
        <div className={styles.sectionHead}><span>01 / PARA QUEM É</span><span>UM PROJETO COM OBJETIVO</span></div>
        <div className={styles.twoCol}><h2>Uma solução que acompanha a realidade do <em>seu negócio.</em></h2><p>{props.audience}</p></div>

        <div className={styles.sectionHead}><span>02 / O QUE VOCÊ RECEBE</span><span>ESTRUTURA PENSADA COM CUIDADO</span></div>
        <div className={styles.benefits}>
          {props.benefits.map((benefit, index) => <article key={benefit}><span>0{index + 1}</span><CheckCircle2 size={18}/><p>{benefit}</p></article>)}
        </div>

        <div className={styles.sectionHead}><span>03 / COMO FUNCIONA</span><span>DO PRIMEIRO CONTATO À PUBLICAÇÃO</span></div>
        <div className={styles.steps}>{props.process.map((step, index) => <article key={step.title}><span>ETAPA 0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>

        <div className={styles.sectionHead}><span>04 / DÚVIDAS FREQUENTES</span><span>ANTES DE COMEÇAR</span></div>
        <div className={styles.faq}>{props.faq.map(item => <article key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></article>)}</div>

        <section className={styles.cta}>
          <div><span>VAMOS CONVERSAR?</span><h2>Seu próximo passo digital começa com <em>uma boa conversa.</em></h2><p>Conte um pouco sobre o que você precisa. Vamos entender sua ideia e avaliar o melhor caminho para o projeto.</p></div>
          <a className={styles.primary} href={`https://wa.me/${whatsapp}?text=${message}`} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Falar pelo WhatsApp <ArrowUpRight size={16}/></a>
        </section>

        <div className={styles.related}><span>EXPLORE OUTRAS SOLUÇÕES</span>{props.related.map(item => <Link key={item.href} href={item.href}>{item.label} <ArrowUpRight size={14}/></Link>)}</div>
      </section>
      <footer className={styles.footer}><Link href="/">SAIRAF<span>.</span></Link><span>Desenvolvimento web e soluções digitais · Atendimento remoto</span><Link href="/#contato">Entre em contato ↗</Link></footer>
    </main>
  );
}
