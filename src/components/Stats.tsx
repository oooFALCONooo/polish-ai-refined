import { Card } from "@/components/ui/card";

const stats = [
  { value: "200+", label: "Obsługiwanych Języków", suffix: "" },
  { value: "10", label: "Modeli AI", suffix: "+" },
  { value: "99.9", label: "Dostępność", suffix: "%" },
  { value: "256", label: "Bit Encryption", suffix: "-bit" }
];

const Stats = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="glass-card p-8 text-center space-y-2 hover:scale-105 transition-transform cyber-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-orbitron font-black text-gradient">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm text-muted-foreground font-inter">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;