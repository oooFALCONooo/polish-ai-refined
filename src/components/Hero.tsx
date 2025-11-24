import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Shield, Globe, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/50" />
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="inline-block">
          <span className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm">
            🚀 Przyszłość Sztucznej Inteligencji
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black leading-tight">
          <span className="text-gradient">PINN AI</span>
          <br />
          <span className="text-foreground">Platforma</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-inter leading-relaxed">
          Zaawansowana platforma sztucznej inteligencji łącząca orkiestrację LLM, 
          kwantowe bezpieczeństwo i cyberochronę nowej generacji
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button size="lg" className="cyber-glow bg-primary hover:bg-primary/90 text-primary-foreground font-orbitron text-lg px-8 py-6 group">
            Rozpocznij teraz
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="border-border hover:bg-card/50 font-orbitron text-lg px-8 py-6">
            Dowiedz się więcej
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
          <div className="space-y-2">
            <Cpu className="h-8 w-8 mx-auto text-primary animate-glow-pulse" />
            <p className="text-sm font-orbitron text-muted-foreground">Orkiestracja LLM</p>
          </div>
          <div className="space-y-2">
            <Shield className="h-8 w-8 mx-auto text-primary animate-glow-pulse" style={{ animationDelay: "0.5s" }} />
            <p className="text-sm font-orbitron text-muted-foreground">Kwantowe Bezpieczeństwo</p>
          </div>
          <div className="space-y-2">
            <Globe className="h-8 w-8 mx-auto text-primary animate-glow-pulse" style={{ animationDelay: "1s" }} />
            <p className="text-sm font-orbitron text-muted-foreground">200 Języków</p>
          </div>
          <div className="space-y-2">
            <Zap className="h-8 w-8 mx-auto text-primary animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
            <p className="text-sm font-orbitron text-muted-foreground">Neural Rendering</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;