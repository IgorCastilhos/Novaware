import { TrendingUp, DollarSign, Award, Clock, Users, Sparkles } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: TrendingUp,
      stat: "+40%",
      label: "Aumento de Faturamento",
      description: "Agenda cheia com pacientes qualificados que realmente pagam"
    },
    {
      icon: DollarSign,
      stat: "+35%",
      label: "Ticket Médio Maior",
      description: "Processo profissional que justifica valores premium"
    },
    {
      icon: Clock,
      stat: "-60%",
      label: "Redução de Perdas de Consulta",
      description: "Lembretes automáticos e confirmações mantêm agenda preenchida"
    },
    {
      icon: Users,
      stat: "3x",
      label: "Mais Pacientes Recorrentes",
      description: "Follow-up automatizado que mantém pacientes engajados"
    },
    {
      icon: Award,
      stat: "100%",
      label: "Autoridade Local",
      description: "Presença digital profissional que inspira confiança"
    },
    {
      icon: Sparkles,
      stat: "24/7",
      label: "IA Trabalhando",
      description: "Sistema captando e qualificando pacientes sem parar"
    }
  ];

  return (
    <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-white">Resultados Que Você Pode Esperar</h2>
          <p className="text-xl text-emerald-100">
            Transformação real e mensurável para sua clínica
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div key={i} className="text-center">
                <div className="inline-flex p-4 bg-emerald-800/50 rounded-full mb-4 backdrop-blur-sm border border-emerald-700/50">
                  <Icon className="h-8 w-8 text-emerald-200" />
                </div>
                <div className="mb-2 text-emerald-200">{benefit.stat}</div>
                <h3 className="mb-2 text-white">{benefit.label}</h3>
                <p className="text-emerald-100">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
