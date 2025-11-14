import { Zap, Bot, BarChart3, Calendar, MessageSquare, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function Solution() {
  const features = [
    {
      icon: Zap,
      title: "Automação Completa de Captação",
      description: "Funis automáticos de WhatsApp e Instagram com chatbots inteligentes que fazem pré-consulta, triagem e agendamento 24/7"
    },
    {
      icon: Bot,
      title: "Copilot com IA Personalizada",
      description: "Inteligência artificial criando textos, respondendo leads sem parecer robô e organizando toda sua operação"
    },
    {
      icon: BarChart3,
      title: "Relatórios de Performance",
      description: "CAC real, taxa de conversão, pacientes recorrentes e indicadores semanais para decisões baseadas em dados"
    },
    {
      icon: Calendar,
      title: "Agendamento Inteligente",
      description: "Sistema que reduz perdas de consulta com lembretes automáticos e confirmações, mantendo sua agenda sempre otimizada"
    },
    {
      icon: MessageSquare,
      title: "Resposta Automática 24h",
      description: "Nunca perca um lead novamente. Sistema responde instantaneamente e qualifica pacientes enquanto você dorme"
    },
    {
      icon: Target,
      title: "Conteúdo Estratégico Pronto",
      description: "Reels, carrosséis e scripts prontos para construir autoridade local sem depender de agência"
    }
  ];

  return (
    <section id="solucao" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full">
            <span>A Solução</span>
          </div>
          <h2 className="mb-4 text-emerald-900">
            Sistema Médico de Crescimento Previsível
          </h2>
          <p className="text-xl text-gray-600">
            Transforme sua clínica em uma máquina previsível, organizada e automatizada
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Card key={i} className="border-emerald-100 hover:border-emerald-300 transition-all hover:shadow-xl">
                <CardHeader>
                  <div className="p-3 bg-emerald-100 rounded-lg w-fit mb-3">
                    <Icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-emerald-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
