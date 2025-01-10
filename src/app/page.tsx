import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle preTitle="AURORA Benefits" title="Why use Aurora">
        Aurora is the best in the world because ...
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle preTitle="The Team" title="Here is the dream team">
        We are here to help.
      </SectionTitle>
      <Team />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Please check the FAQ's before contacting us.
      </SectionTitle>

      <Faq />
      <Contact />
    </Container>
  );
}
