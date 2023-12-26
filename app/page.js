import Button from "@/components/button";
import Container from "@/components/container";
import { Hero, HeroSubtitle, HeroTitle } from "@/components/Hero";
import { Logo } from "@/components/Icons/logo";
import { buttonicon } from "@/components/Icons/Buttonicon";
import Clients from "@/components/clients";
import HeroImage from "@/components/Hero-image";
export default function HomePage() {
  return (
    <div>

      <Container className="py-[6.4rem]">
        <Hero>
          <Button className="animate-fade-in opacity-0 translate-y-[-1rem]" href="/" variant="secondary" size="small">
            <div className="flex items-center gap-2">
              <div>Introducing Linear Asks</div>
              <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" class="w-3 h-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg></div>
            </div>
          </Button>
          <HeroTitle className="animate-fade-in [animation-delay:200ms] opacity-0 translate-y-[-1rem]"> Linear is a better way <br className="hidden md:block" /> to build products</HeroTitle>
          <HeroSubtitle className="animate-fade-in [animation-delay:400ms] opacity-0 translate-y-[-1rem]">Meet the new standard for modern software development. <br className="hidden md:block" />Streamline issues, sprints, and product roadmaps.</HeroSubtitle>
          <Button className="animate-fade-in [animation-delay:600ms] opacity-0 translate-y-[-1rem]" href="/" variant="primary" size="large">
            <div className="flex items-center gap-2 py-1">
              <div className="ml-2">Get Started</div>
              <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" class="w-3 h-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg></div>
            </div>
          </Button>
          <HeroImage/>
        </Hero>
      </Container>
      <Container>
        <Clients/>
      </Container>
    </div>
  );
}