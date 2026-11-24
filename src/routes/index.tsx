import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Dumbbell, Lock, MessagesSquare, PlayCircle, Salad, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { OFFER } from "@/lib/offer";
import { Reveal } from "@/components/reveal";

const TITLE = "Landing Page Teste — transforme interesse em ação";
const DESCRIPTION = "Uma landing page pronta para apresentar seu produto, serviço ou comunidade com clareza e impacto.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const BENEFITS = [
  { icon: Dumbbell, title: "Conteúdo completo", text: "Apresente sua solução de forma simples, direta e fácil de entender." },
  { icon: Salad, title: "Experiência organizada", text: "Conduza visitantes por uma jornada clara, sem excesso de informação." },
  { icon: PlayCircle, title: "Demonstração prática", text: "Mostre o valor do que você oferece e ajude o público a tomar uma decisão." },
  { icon: MessagesSquare, title: "Relacionamento próximo", text: "Crie conexão com sua audiência e incentive o próximo passo." },
];

const FAQ = [
  { q: "Para quem é esta página?", a: "Para quem quer apresentar um produto, serviço, comunidade ou oferta de maneira profissional." },
  { q: "Posso trocar os textos?", a: "Sim. Todos os textos foram organizados para você adaptar à sua marca e ao seu público." },
  { q: "Posso adicionar minhas imagens?", a: "Sim. A estrutura está pronta para receber as imagens e os conteúdos da sua oferta." },
  { q: "Como começo?", a: "Personalize a identidade visual, os textos e o botão de ação para publicar sua própria oferta." },
];

const MARQUEE = ["Clareza", "Conexão", "Resultado", "Estratégia", "Ação", "Sua marca"];

function ActionButton({ label = "Quero começar" }: { label?: string }) {
  return (
    <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
      <a href="#contato">
        {label}
        <ArrowRight className="size-5!" />
      </a>
    </Button>
  );
}

function Index() {
  return (
    <main className="overflow-x-hidden pb-24 md:pb-0">
      <section className="grain bg-spotlight relative flex min-h-[100svh] flex-col">
        <header className="relative z-10 flex items-center justify-between px-5 pt-5 md:px-10">
          <span className="font-display text-xl">Landing Page Teste</span>
          <span className="text-sm font-semibold text-foreground/80">{OFFER.creator}</span>
        </header>
        <div className="relative z-10 mt-auto px-5 pb-28 md:px-10 md:pb-16">
          <p className="animate-rise mb-4 inline-flex items-center gap-2 rounded-full border border-primary/50 bg-background/60 px-3 py-1 text-xs font-semibold tracking-widest text-primary uppercase backdrop-blur">
            <Zap className="size-3.5" /> Uma nova experiência
          </p>
          <h1 className="animate-rise font-display text-[22vw] md:text-[10rem]" style={{ animationDelay: "0.1s" }}>
            Sua
            <br />
            <span className="text-shine">Marca</span>
          </h1>
          <p className="animate-rise mt-5 max-w-md text-lg text-foreground/85" style={{ animationDelay: "0.25s" }}>
            Uma presença digital forte para apresentar sua oferta e transformar atenção em ação.
          </p>
          <div className="animate-rise mt-7 flex flex-col gap-3 sm:flex-row sm:items-center" style={{ animationDelay: "0.4s" }}>
            <ActionButton />
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Lock className="size-4" /> Experiência simples e objetiva
            </span>
          </div>
        </div>
      </section>

      <div className="bg-red-gradient overflow-hidden py-3 text-primary-foreground">
        <div className="animate-marquee flex w-max gap-8 whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE].map((word, index) => (
            <span key={index} className="font-display flex items-center gap-8 text-2xl">
              {word} <span className="text-primary-foreground/50">✦</span>
            </span>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-28">
        <Reveal>
          <h2 className="font-display text-5xl md:text-7xl">
            Chega de comunicar <span className="text-outline">no escuro</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Uma boa oferta merece uma página que explique seu valor, crie confiança e facilite a decisão de quem chegou até você.
          </p>
          <p className="mt-4 max-w-2xl text-lg text-foreground">
            Personalize esta estrutura com a sua identidade, a sua mensagem e o próximo passo da sua audiência.
          </p>
        </Reveal>
      </section>

      <section className="bg-card py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-10">
          <p className="flex items-center gap-3 text-sm font-semibold tracking-widest text-primary uppercase">
            <span className="h-px w-8 bg-primary" /> O que você recebe
          </p>
          <h2 className="font-display mt-3 text-5xl md:text-7xl">Tudo em um só lugar</h2>
          <Reveal className="mt-12 grid gap-px overflow-hidden rounded-lg border bg-border md:grid-cols-2">
            {BENEFITS.map((benefit, index) => (
              <div key={benefit.title} className="group bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-muted md:p-9">
                <div className="flex items-start justify-between">
                  <benefit.icon className="size-9 text-primary transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />
                  <span className="font-display text-4xl text-foreground/15 transition-colors group-hover:text-primary/40">0{index + 1}</span>
                </div>
                <h3 className="font-display mt-6 text-3xl">{benefit.title}</h3>
                <p className="mt-3 text-muted-foreground">{benefit.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="contato" className="relative overflow-hidden px-5 py-20 md:px-10 md:py-28">
        <div className="absolute inset-0 bg-background/70" />
        <div className="grain relative mx-auto max-w-xl overflow-hidden rounded-xl border border-primary/40 bg-card p-8 text-center shadow-glow md:p-12">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">Pronto para começar?</p>
          <h2 className="font-display mt-3 text-6xl md:text-7xl">Sua oferta</h2>
          <p className="mx-auto mt-6 max-w-md text-muted-foreground">
            Troque este conteúdo pela sua proposta e direcione seus visitantes para o próximo passo.
          </p>
          <div className="relative z-10 mt-10 flex justify-center">
            <div className="animate-pulse-ring w-full rounded-md sm:w-auto">
              <ActionButton label="Quero saber mais" />
            </div>
          </div>
          <p className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Lock className="size-3.5" /> Comunicação clara e profissional
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-5 pb-24 md:px-10">
        <h2 className="font-display text-5xl">Dúvidas</h2>
        <Accordion type="single" collapsible className="mt-6">
          {FAQ.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger className="text-base font-semibold hover:no-underline">{item.q}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <footer className="border-t px-5 py-10 text-center md:px-10">
        <p className="font-display text-3xl">Landing Page Teste</p>
        <span className="mt-2 inline-block text-sm text-muted-foreground">{OFFER.creator}</span>
      </footer>
    </main>
  );
}
