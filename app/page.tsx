"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Menu, X, MessageCircle, CheckCircle2, Globe2, PanelsTopLeft, Workflow } from "lucide-react";
import styles from "./page.module.css";

const services = [
  { number: "01", title: "Sites para comércios e lojas", text: "Uma presença profissional na internet para apresentar sua empresa, seus produtos e seus diferenciais.", detail: "Um site institucional funciona como a casa digital da sua empresa: reúne as informações que o cliente precisa para conhecer seu negócio, confiar na sua marca e entrar em contato.", includes: ["Apresentação da empresa, produtos ou serviços", "Páginas e seções organizadas conforme seu objetivo", "Layout responsivo para celular, tablet e computador", "Botões de contato e integração com WhatsApp", "Configurações básicas de SEO para mecanismos de busca"], process: "Alinhamos seus objetivos, organizamos o conteúdo, desenvolvo o site e revisamos tudo antes da publicação.", icon: Globe2 },
  { number: "02", title: "Landing pages para serviços", text: "Páginas focadas em apresentar uma oferta ou serviço e transformar visitas em oportunidades de contato.", detail: "A landing page é uma página construída em torno de um objetivo específico, como receber pedidos de orçamento, captar contatos ou divulgar um serviço, com uma comunicação direta e chamadas para ação bem posicionadas.", includes: ["Estrutura de conteúdo orientada à conversão", "Apresentação clara dos benefícios e diferenciais", "Chamadas para ação e contato pelo WhatsApp", "Design responsivo e navegação objetiva", "Configurações básicas de SEO e compartilhamento"], process: "Definimos o público e a ação desejada, estruturamos a mensagem, desenvolvo a página e ajustamos a experiência para diferentes telas.", icon: PanelsTopLeft },
  { number: "03", title: "Softwares sob medida", text: "Sistemas personalizados para organizar rotinas, centralizar informações e simplificar processos da empresa.", detail: "Quando planilhas e tarefas manuais já não dão conta da rotina, um sistema sob medida pode reunir etapas e informações em um fluxo mais organizado, pensado para a realidade da sua operação.", includes: ["Levantamento dos processos e necessidades", "Definição das funcionalidades prioritárias", "Desenvolvimento de telas e fluxos personalizados", "Organização de dados conforme o escopo", "Testes e orientações para uso da solução"], process: "Começamos entendendo o processo que precisa melhorar. Depois definimos o escopo, desenvolvemos por etapas e validamos a solução com você.", icon: Workflow }
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const contact = { whatsapp: "5548984339780" };

  function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setError(""); setSent(false);
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) { setError("Preencha os três campos para continuar."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { setError("Confira se o e-mail foi digitado corretamente."); return; }
    const message = `Olá! Meu nome é ${form.name.trim()}.\nMeu e-mail: ${form.email.trim()}\n\nGostaria de conversar sobre: ${form.message.trim()}`;
    window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return <main className={styles.site}>
    <header className={styles.header}>
      <a className={styles.brand} href="#inicio" aria-label="Sairaf, início"><span className={styles.brandSymbol}>s<span className={styles.brandAccent}>.</span></span><span className={styles.brandText}>SAIRAF<small>TECNOLOGIA & DESENVOLVIMENTO</small></span></a>
      <button className={styles.menuToggle} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21}/> : <Menu size={21}/>}</button>
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`} aria-label="Navegação principal" onClick={() => setMenuOpen(false)}>
        <a href="#servicos">Soluções e serviços</a><a href="#sobre">Sobre mim</a><a className={styles.navCta} href="#contato">Fale comigo <ArrowUpRight size={15}/></a>
      </nav>
    </header>
    <section className={styles.hero} id="inicio">
      <div className={styles.heroCopy}>
        <div className={styles.eyebrow}><span className={styles.statusDot}/> DESENVOLVIMENTO WEB & SOFTWARE</div>
        <h1>Desenvolvimento de sites e soluções digitais para <em>empresas que querem crescer.</em></h1>
        <p className={styles.heroText}>Criamos sites profissionais, landing pages e sistemas sob medida para empresas de todo o Brasil. Soluções digitais responsivas e estratégicas para fortalecer sua presença online, atrair clientes e simplificar processos.</p>
        <div className={styles.heroActions}><a className={styles.primaryButton} href="#contato">Vamos conversar <ArrowUpRight size={17}/></a><a className={styles.textLink} href="#servicos">Conheça as soluções <ArrowRight size={15}/></a></div>
        <div className={styles.heroFoot}><span>SITES · LANDING PAGES · SOFTWARES</span><span>ATENDIMENTO REMOTO</span></div>
      </div>
      <div className={styles.heroVisual} aria-label="Ilustração abstrata de uma interface digital">
        <div className={styles.visualTopline}><span>ESTRATÉGIA + TECNOLOGIA</span><span>SAIRAF / DIGITAL</span></div>
        <div className={styles.interfaceCard}><div className={styles.interfaceBar}><span/><span/><span/><b>presença.digital</b><i>↗</i></div><div className={styles.interfaceContent}><span className={styles.interfaceTag}>SUA MARCA, ONLINE</span><div className={styles.interfaceHeading}>Ideias claras.<br/><em>Resultados reais.</em></div><div className={styles.interfaceLine}/><div className={styles.interfaceRows}><span/><span/><span/></div><div className={styles.interfaceButton}>CONHEÇA MAIS <ArrowRight size={12}/></div></div><div className={styles.interfaceFoot}><span>DESIGN RESPONSIVO</span><span>01 — 03</span></div></div>
        
      </div>
    </section>
    <section className={`${styles.services} ${styles.section}`} id="servicos">
      <div className={styles.sectionLabel}><span>01 / SOLUÇÕES E SERVIÇOS</span><span>TECNOLOGIA ALINHADA AO SEU OBJETIVO</span></div>
      <div className={styles.servicesIntro}><h2>Uma boa presença digital começa com a <em>estratégia certa.</em></h2><p>Cada projeto começa com o entendimento do seu negócio e dos seus objetivos. Desenvolvo sites, landing pages e sistemas personalizados para conectar sua empresa às pessoas certas, fortalecer sua presença digital e tornar processos mais eficientes. O atendimento é remoto, para empresas de todo o Brasil.</p></div>
      <div className={styles.serviceGrid}>{services.map(service => <article className={`${styles.serviceCard} ${activeService === service.number ? styles.serviceCardActive : ""}`} key={service.number}><div className={styles.serviceTop}><span>{service.number}</span><service.icon size={22}/></div><h3>{service.title}</h3><p>{service.text}</p><button className={styles.serviceToggle} type="button" aria-expanded={activeService === service.number} onClick={() => setActiveService(activeService === service.number ? null : service.number)}>{activeService === service.number ? "Fechar detalhes" : "Conheça este serviço"} <span>{activeService === service.number ? "−" : "+"}</span></button>{activeService === service.number && <div className={styles.serviceDetails}><p>{service.detail}</p><h4>O que pode estar incluído</h4><ul>{service.includes.map(item => <li key={item}>{item}</li>)}</ul><h4>Como funciona</h4><p>{service.process}</p><a className={styles.serviceContact} href={`https://wa.me/5548984339780?text=${encodeURIComponent("Olá! Gostaria de conversar sobre " + service.title + ".")}`} target="_blank" rel="noreferrer">Conversar sobre este serviço <ArrowUpRight size={15}/></a></div>}</article>)}</div>
    </section>
    <section className={`${styles.about} ${styles.section}`} id="sobre">
      <div className={styles.sectionLabel}><span>02 / SOBRE MIM</span><span>OLHAR DE NEGÓCIO, SOLUÇÕES DIGITAIS</span></div>
      <div className={styles.aboutGrid}><div className={styles.aboutStamp}><span>DESENVOLVIMENTO COM PROPÓSITO</span><strong>Maria<br/><em>Júlia.</em></strong><div>WEB · SOFTWARE · SOLUÇÕES</div></div><div className={styles.aboutBody}><h2>Olá, sou a <em>Maria Júlia.</em></h2><p className={styles.lead}>Sou a fundadora da Sairaf Studio.</p><p>Uno tecnologia e visão de negócios para construir a estrutura digital que a sua empresa precisa para crescer e transmitir confiança na internet.</p><p>Como Desenvolvedora Web, meu foco é transformar a sua demanda em uma solução digital clara, rápida e focada na experiência dos seus clientes.</p><a className={styles.inlineLink} href="#contato">Vamos tirar o seu projeto do papel? <ArrowUpRight size={15}/></a></div></div>
      <div className={styles.audienceGrid}><article><span>01</span><h3>Para comércios e lojas</h3><p>Sites profissionais que apresentam seus produtos, fortalecem sua marca e ajudam a conquistar clientes pela internet.</p></article><article><span>02</span><h3>Para prestadores de serviços</h3><p>Páginas estratégicas para apresentar seus serviços, gerar contatos e transformar visitantes em oportunidades.</p></article><article><span>03</span><h3>Para pequenas empresas</h3><p>Sistemas personalizados para organizar processos, automatizar tarefas e facilitar a rotina da empresa.</p></article></div>
    </section>
    <section className={styles.contact} id="contato"><div className={styles.contactPanel}><div className={styles.contactCopy}><div className={styles.sectionLabel}><span>03 / CONTATO</span><span>O PRIMEIRO PASSO É UMA CONVERSA</span></div><h2>Tem um projeto?<br/><em>Vamos dar forma.</em></h2><p>Me conte o que o seu negócio precisa. Vamos alinhar suas ideias em uma conversa rápida e sem complicação.</p><div className={styles.contactLinks}><a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp <ArrowUpRight size={14}/></a></div></div><form className={styles.contactForm} onSubmit={submitForm} noValidate><div className={styles.formHeading}><span>CONTE UM POUCO SOBRE O PROJETO</span><span>↘</span></div><label htmlFor="name">Seu nome</label><input id="name" autoComplete="name" value={form.name} onChange={e => setForm({...form, name:e.target.value})} placeholder="Como podemos te chamar?"/><label htmlFor="email">Seu e-mail</label><input id="email" type="email" autoComplete="email" value={form.email} onChange={e => setForm({...form, email:e.target.value})} placeholder="voce@empresa.com.br"/><label htmlFor="message">O que você precisa?</label><textarea id="message" rows={4} value={form.message} onChange={e => setForm({...form, message:e.target.value})} placeholder="Conte um pouco sobre sua ideia ou necessidade..."/><button className={styles.primaryButton} type="submit">Enviar pelo WhatsApp <ArrowUpRight size={17}/></button>{error && <p className={styles.formMessage} role="alert">{error}</p>}{sent && <p className={styles.formSuccess} role="status">O WhatsApp foi aberto com sua mensagem. Confira e toque em enviar.</p>}<small className={styles.formHint}>A mensagem será enviada pelo WhatsApp depois que você confirmar no aplicativo.</small></form></div></section>
    <a className={styles.floatingWhatsapp} href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre seus serviços.")}`} target="_blank" rel="noreferrer" aria-label="Fale comigo pelo WhatsApp para atendimento rápido"><MessageCircle size={24} strokeWidth={2.2}/><span>Precisa de ajuda?</span></a>
    <footer className={styles.footer}><a className={styles.footerBrand} href="#inicio">SAIRAF<span>.</span></a><span>Soluções digitais pensadas para o seu negócio.</span><a href="#inicio">Voltar ao topo ↑</a><small>© {new Date().getFullYear()} Sairaf · Tecnologia & Desenvolvimento</small></footer>
  </main>;
}
