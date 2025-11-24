import { Card } from "@/components/ui/card";
import { Brain, Languages, Lock, Microscope, Video, Code, Database, Sparkles } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Orkiestracja LLM",
    description: "Zaawansowany system routingu wykorzystujący modele Mistral-7B, specjalistyczne modele medyczne i prawne z automatycznym wyborem eksperta.",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: Languages,
    title: "System Tłumaczeń",
    description: "Kwantowo zabezpieczone tłumaczenia dla 200 języków z wykorzystaniem NLLB-200-3.3B i walidacją par językowych.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Lock,
    title: "Cyberochrona",
    description: "System obronny klasy militarnej z YARA, analizą PE, kwantowym hashem i wykrywaniem anomalii sprzętowych.",
    gradient: "from-red-500 to-orange-500"
  },
  {
    icon: Video,
    title: "Neural Rendering",
    description: "Hiperrealistyczne renderowanie z ControlNet, OpenPose, SDXL i zaawansowanym pipeline'm do generowania obrazów i wideo.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Microscope,
    title: "Analiza Malware",
    description: "Statyczna i dynamiczna analiza złośliwego oprogramowania z wykorzystaniem technik kwantowych i uczenia maszynowego.",
    gradient: "from-yellow-500 to-amber-500"
  },
  {
    icon: Code,
    title: "AI Model Lab",
    description: "Laboratorium do treningu i fine-tuningu modeli AI z pełnym wsparciem dla PyTorch, GPU i rozproszonych obliczeń.",
    gradient: "from-indigo-500 to-violet-500"
  },
  {
    icon: Database,
    title: "Kwantowy Vault",
    description: "System przechowywania danych zabezpieczony kryptografią kwantową Kyber i Dilithium z TPM i Secure Enclave.",
    gradient: "from-teal-500 to-cyan-500"
  },
  {
    icon: Sparkles,
    title: "Synteza Głosu",
    description: "Generowanie realistycznego głosu z wykorzystaniem ElevenLabs i rozpoznawanie mówcy przez SpeechBrain.",
    gradient: "from-fuchsia-500 to-purple-500"
  }
];

const Features = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient">
            Zaawansowane Możliwości
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter">
            Kompleksowe rozwiązania AI łączące najnowsze technologie w jednej platformie
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="glass-card p-6 space-y-4 hover:scale-105 transition-all duration-300 cyber-glow group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-orbitron font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;