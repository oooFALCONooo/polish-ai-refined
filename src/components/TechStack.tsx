import { Card } from "@/components/ui/card";

const technologies = [
  {
    category: "Modele Językowe",
    items: ["Mistral-7B-Instruct", "Medical-LLaMA-3-8B", "Legal-GPT-4B", "NLLB-200-3.3B", "DeBERTa-v3"]
  },
  {
    category: "Generowanie Obrazów",
    items: ["Stable Diffusion XL", "ControlNet", "OpenPose", "AutoencoderKL", "DPM Solver"]
  },
  {
    category: "Bezpieczeństwo",
    items: ["Qiskit", "Kyber", "Dilithium", "YARA", "TPM 2.0", "Secure Enclave"]
  },
  {
    category: "Audio & AR",
    items: ["ElevenLabs", "SpeechBrain", "ARKit", "Whisper", "Voice Cloning"]
  }
];

const TechStack = () => {
  return (
    <section className="py-24 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient">
            Stos Technologiczny
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter">
            Najnowocześniejsze technologie AI i machine learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <Card 
              key={index}
              className="glass-card p-6 space-y-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <h3 className="text-lg font-orbitron font-bold text-primary">
                {tech.category}
              </h3>
              <ul className="space-y-2">
                {tech.items.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground font-inter flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;