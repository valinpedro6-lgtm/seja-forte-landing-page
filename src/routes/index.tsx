import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Dumbbell, Lock, MessagesSquare, PlayCircle, Salad, Zap } from "lucide-react";

import foto1 from "@/assets/seja-forte-1.jpg.asset.json";
import foto2 from "@/assets/seja-forte-2.jpg.asset.json";
import foto3 from "@/assets/seja-forte-3.jpg.asset.json";
import foto4 from "@/assets/seja-forte-4.jpg.asset.json";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { OFFER } from "@/lib/offer";

const TITLE = "SEJA FORTE — treinos, dieta e comunidade do @ogabmts";
const DESCRIPTION =
  "Treinos completos, dieta, vídeos de execução e grupo exclusivo com o @ogabmts. Acesso por R$ 27,90, pagamento único.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const BENEFITS = [
  {
    icon: Dumbbell,
    title: "Treinos completos",
    text: "A divisão, os exercícios, as séries e as repetições que eu uso. É abrir e executar.",
  },
  {
    icon: Salad,
    title: "Dieta e alimentação",
    text: "Como eu como para crescer e secar, sem complicação e sem dieta de fome.",
  },
  {
    icon: PlayCircle,
    title: "Vídeos de execução",
    text: "Cada movimento mostrado em detalhe, para você treinar certo e sentir o músculo trabalhar.",
  },
  {
    icon: MessagesSquare,
    title: "Grupo comigo",
    text: "Um espaço fechado para tirar dúvidas, trocar ideia e manter a constância junto de quem treina sério.",
  },
];

const FAQ = [
  {
    q: "Como recebo o acesso?",
    a: "Assim que o pagamento é aprovado, você recebe o acesso à comunidade pela Lastlink, no e-mail que usou na compra.",
  },
  {
    q: "É mensalidade?",
    a: "Não. São R$ 27,90 em pagamento único.",
  },
  {
    q: "Serve para iniciante?",
    a: "Serve. Os vídeos de execução e o grupo existem justamente para você aprender a fazer certo desde o começo.",
  },
  {
    q: "O pagamento é seguro?",
    a: "Sim. A compra acontece no checkout seguro da Lastlink, uma das maiores plataformas de comunidades do Brasil.",
  },
];

const MARQUEE = ["Disciplina", "Constância", "Força", "Treino", "Dieta", "Seja forte"];

function CheckoutButton({ label = "Quero ser forte" }: { label?: string }) {
  return (
    <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
      <a href={OFFER.checkoutUrl} target="_blank" rel="noopener noreferrer">
        {label}
        <ArrowRight className="size-5!" />
      </a>
    </Button>
  );
}

function Index() {
  return (
    <main className="overflow-x-hidden pb-24 md:pb-0">
      {/* Abertura */}
      <section className="grain relative flex min-h-[100svh] flex-col">
        <img
          src={foto1.url}
          alt="@ogabmts na academia mostrando o braço"
          className="absolute inset-0 h-full w-full object-cover object-[50%_20%]"
        />
        <div className="bg-fade absolute inset-0" />

        <header className="relative z-10 flex items-center justify-between px-5 pt-5 md:px-10">
          <span className="font-display text-xl">Seja Forte</span>
          <a
            href={OFFER.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
          >
            {OFFER.creator}
          </a>
        </header>

        <div className="relative z-10 mt-auto px-5 pb-28 md:px-10 md:pb-16">
          <p className="animate-rise mb-4 inline-flex items-center gap-2 rounded-full border border-primary/50 bg-background/60 px-3 py-1 text-xs font-semibold tracking-widest text-primary uppercase backdrop-blur">
            <Zap className="size-3.5" /> Comunidade exclusiva
          </p>
          <h1 className="animate-rise font-display text-[26vw] md:text-[11rem]" style={{ animationDelay: "0.1s" }}>
            Seja
            <br />
            <span className="text-primary">Forte</span>
          </h1>
          <p
            className="animate-rise mt-5 max-w-md text-lg text-foreground/85"
            style={{ animationDelay: "0.25s" }}
          >
            Todo o meu conteúdo completo e exclusivo num lugar só. Treino, dieta e eu do seu lado.
          </p>
          <div className="animate-rise mt-7 flex flex-col gap-3 sm:flex-row sm:items-center" style={{ animationDelay: "0.4s" }}>
            <CheckoutButton label={`Entrar por R$ ${OFFER.price}`} />
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Lock className="size-4" /> Pagamento único · acesso imediato
            </span>
          </div>
        </div>
      </section>

      {/* Faixa */}
      <div className="bg-red-gradient overflow-hidden py-3 text-primary-foreground">
        <div className="animate-marquee flex w-max gap-8 whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE].map((w, i) => (
            <span key={i} className="font-display flex items-center gap-8 text-2xl">
              {w} <span className="text-primary-foreground/50">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Manifesto */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center md:px-10 md:py-28">
        <div>
          <h2 className="font-display text-5xl md:text-7xl">
            Chega de treinar <span className="text-outline">no escuro</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Ficar mudando de treino toda semana, comer sem saber o que está fazendo e não ver o corpo
            mudar. Eu já passei por isso.
          </p>
          <p className="mt-4 text-lg text-foreground">
            No <strong className="text-primary">SEJA FORTE</strong> eu abro tudo o que faço: o
            treino, a alimentação e a execução de cada exercício. Sem segredo.
          </p>
        </div>
        <div className="relative">
          <img
            src={foto2.url}
            alt="@ogabmts de perfil mostrando o ombro e o braço"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-lg object-cover"
          />
          <div className="absolute -bottom-5 -left-3 rounded-md bg-primary px-4 py-2 font-display text-2xl text-primary-foreground shadow-glow md:-left-6">
            Sem segredo
          </div>
        </div>
      </section>

      {/* O que você recebe */}
      <section className="bg-card py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-10">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">
            O que você recebe
          </p>
          <h2 className="font-display mt-3 text-5xl md:text-7xl">Tudo que eu uso</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border bg-border md:grid-cols-2">
            {BENEFITS.map((b, i) => (
              <div key={b.title} className="group bg-card p-7 transition-colors hover:bg-muted md:p-9">
                <div className="flex items-start justify-between">
                  <b.icon className="size-9 text-primary" strokeWidth={1.75} />
                  <span className="font-display text-4xl text-foreground/15 transition-colors group-hover:text-primary/40">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display mt-6 text-3xl">{b.title}</h3>
                <p className="mt-3 text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fotos */}
      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-5 py-20 md:gap-5 md:px-10 md:py-28">
        <div className="relative">
          <img
            src={foto4.url}
            alt="@ogabmts mostrando as pernas na academia"
            loading="lazy"
            className="aspect-[3/4] w-full rounded-lg object-cover"
          />
          <span className="font-display absolute bottom-3 left-3 text-2xl md:text-4xl">Constância</span>
        </div>
        <div className="relative mt-10 md:mt-20">
          <img
            src={foto3.url}
            alt="@ogabmts sentado em um aparelho da academia"
            loading="lazy"
            className="aspect-[3/4] w-full rounded-lg object-cover"
          />
          <span className="font-display absolute bottom-3 left-3 text-2xl text-primary md:text-4xl">
            Disciplina
          </span>
        </div>
      </section>

      {/* Preço */}
      <section id="entrar" className="px-5 pb-20 md:px-10 md:pb-28">
        <div className="grain relative mx-auto max-w-xl overflow-hidden rounded-xl border border-primary/40 bg-card p-8 text-center shadow-glow md:p-12">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">Acesso completo</p>
          <h2 className="font-display mt-3 text-6xl md:text-7xl">Seja Forte</h2>
          <div className="mt-8 flex items-end justify-center gap-2">
            <span className="mb-3 text-xl font-semibold text-muted-foreground">R$</span>
            <span className="font-display text-8xl text-foreground md:text-9xl">{OFFER.price}</span>
          </div>
          <p className="mt-2 font-semibold text-primary">Pagamento único</p>
          <ul className="mx-auto mt-8 max-w-xs space-y-3 text-left">
            {BENEFITS.map((b) => (
              <li key={b.title} className="flex items-center gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15">
                  <Check className="size-4 text-primary" />
                </span>
                {b.title}
              </li>
            ))}
          </ul>
          <div className="relative z-10 mt-10 flex justify-center">
            <div className="animate-pulse-ring w-full rounded-md sm:w-auto">
              <CheckoutButton label="Quero entrar agora" />
            </div>
          </div>
          <p className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Lock className="size-3.5" /> Checkout seguro pela Lastlink
          </p>
        </div>
      </section>

      {/* Dúvidas */}
      <section className="mx-auto max-w-2xl px-5 pb-24 md:px-10">
        <h2 className="font-display text-5xl">Dúvidas</h2>
        <Accordion type="single" collapsible className="mt-6">
          {FAQ.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-base font-semibold hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <footer className="border-t px-5 py-10 text-center md:px-10">
        <p className="font-display text-3xl">Seja Forte</p>
        <a
          href={OFFER.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          {OFFER.creator}
        </a>
      </footer>

      {/* Botão fixo no celular */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-background/90 p-3 backdrop-blur md:hidden">
        <a
          href={OFFER.checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-gradient font-display flex h-14 items-center justify-between rounded-md px-5 text-lg text-primary-foreground shadow-glow"
        >
          <span>Entrar no Seja Forte</span>
          <span>R$ {OFFER.price}</span>
        </a>
      </div>
    </main>
  );
}
