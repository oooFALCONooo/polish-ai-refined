import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient">
          Gotowy na przyszłość AI?
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter">
          Dołącz do platformy PINN AI i odkryj nowe możliwości sztucznej inteligencji
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button size="lg" className="cyber-glow bg-primary hover:bg-primary/90 text-primary-foreground font-orbitron text-lg px-8 py-6 group">
            Rozpocznij za darmo
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="border-border hover:bg-card/50 font-orbitron text-lg px-8 py-6 group">
            <Mail className="mr-2 h-5 w-5" />
            Skontaktuj się
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;