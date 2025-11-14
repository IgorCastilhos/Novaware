import { CheckCircle2 } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Análise Estratégica",
      description: "Entendemos seu consultório, seus objetivos e criamos a estratégia perfeita para seu nicho específico"
    },
    {
      number: "02",
      title: "Implementação do Sistema",
      description: "Configuramos landing pages, automações, chatbots e integrações com suas ferramentas atuais"
    },
    {
      number: "03",
      title: "Treinamento da Equipe",
      description: "Sua equipe aprende a usar o sistema de forma simples, sem complicação técnica"
    },
    {
      number: "04",
      title: "Ativação e Monitoramento",
      description: "Sistema entra no ar e começamos a captar pacientes. Você acompanha tudo em tempo real"
    },
    {
      number: "05",
      title: "Otimização Contínua",
      description: "Ajustamos e melhoramos constantemente baseado nos dados e resultados reais"
    }
  ];

  const targetAudience = [
    "Médicos Estéticos",
    "Dentistas de Harmonização",
    "Nutricionistas Premium",
    "Personal Trainers Premium",
    "Pequenos Consultórios"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-gray-900">Como Funciona</h2>
          <p className="text-xl text-gray-600">
            Do diagnóstico aos resultados em 5 passos simples
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-200 hidden md:block"></div>
            
            {steps.map((step, i) => (
              <div key={i} className="relative mb-12 last:mb-0">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center relative z-10 shadow-lg">
                    <span className="text-xl">{step.number}</span>
                  </div>
                  <div className="flex-1 bg-emerald-50 p-6 rounded-lg border border-emerald-100">
                    <h3 className="mb-2 text-emerald-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-8 md:p-12 rounded-2xl shadow-xl">
          <h3 className="mb-6 text-center text-white">Ideal Para Profissionais de Saúde</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {targetAudience.map((audience, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <CheckCircle2 className="h-5 w-5 text-emerald-200 flex-shrink-0" />
                <span>{audience}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
