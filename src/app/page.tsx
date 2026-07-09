import type { Metadata } from "next";

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { WhyUs } from "@/components/why-us";
import { Services } from "@/components/services";
import { FamiliesPets } from "@/components/families-pets";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Limpieza profesional en El Casar de Guadalajara",
  description:
    "LimnGroup cuida tu hogar: limpieza del hogar, colchones, tapicería, coches y edredones en El Casar de Guadalajara. Pide presupuesto en menos de 24 horas.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Services />
        <FamiliesPets />
        <HowItWorks />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
