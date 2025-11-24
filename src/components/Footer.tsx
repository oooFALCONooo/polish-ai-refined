import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-orbitron font-bold text-gradient">PINN AI</h3>
            <p className="text-sm text-muted-foreground font-inter">
              Zaawansowana platforma sztucznej inteligencji nowej generacji
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-orbitron font-semibold text-foreground">Platforma</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-inter">
              <li><a href="#" className="hover:text-primary transition-colors">Funkcje</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Dokumentacja</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cennik</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-orbitron font-semibold text-foreground">Firma</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-inter">
              <li><a href="#" className="hover:text-primary transition-colors">O nas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Kariera</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Kontakt</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-orbitron font-semibold text-foreground">Społeczność</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground font-inter">
          <p>&copy; 2025 PINN AI. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;