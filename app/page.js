import Button from "@/components/button";
import Container from "@/components/container";
import { Hero, HeroSubtitle, HeroTitle } from "@/components/Hero";
import { Logo } from "@/components/Icons/logo";
import { buttonicon } from "@/components/Icons/Buttonicon";
import Clients from "@/components/clients";
import HeroImage from "@/components/Hero-image";
import classNames from "classnames";
import { StarsIllustration } from "@/components/Icons/stars";
import UnlikeAnyTool from "@/components/sections/unlike-any-tool";
export default function HomePage() {
  return (
    <div>
      <div className="pb-[16.4rem] md:pb-[25.4rem]">
        <Container className="pt-[6.4rem]">
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
            <HeroImage />
          </Hero>
        </Container>
      </div>

      <Container>

        <Clients />
      </Container>
      <div className={classNames("h-[60rem] overflow-hidden mb-[-12.8rem] mt-[-1.8rem] relative mask-radial-faded pointer-index-none z-[-1]",
        "before:bg-radial-faded [--color:#7877C6] before:absolute before:inset-0 before:opacity-[0.4]",
        "after:absolute after:h-[142%] after:bg-background after:rounded-[50%] after:border-[rgba(120,_119,_198,_0.4)] after:border-t after:top-1/2 after:-left-1/2 after:w-[200%]"
      )}>
        <div className="ml-[20rem]">
        <StarsIllustration />
        </div>
      </div>
      <Container>
        <UnlikeAnyTool/>
      </Container>
    </div>
  );
}