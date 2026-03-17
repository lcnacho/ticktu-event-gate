import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 text-center">
      <span className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
        Now Live in Selected Cities
      </span>
      <h1 className="mb-6 text-5xl font-bold leading-[0.95] tracking-tighter text-foreground md:text-7xl lg:text-8xl">
        The night is yours.
        <br />
        Secure the entry.
      </h1>
      <p className="mb-10 max-w-lg text-lg text-muted-foreground md:text-xl">
        Ticktu is the precision ticketing platform for high-energy events. No friction, no fakes, just the music.
      </p>
      <div className="flex gap-4">
        <Button variant="accent" size="lg">
          Download for iOS
        </Button>
        <Button variant="hero_outline" size="lg">
          Android App
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
