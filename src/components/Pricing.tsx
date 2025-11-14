import { Check, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "7.500",
      description: "Ideal para começar com automação básica",
      features: [
        "Landing page em Next.js",
        "Integração básica de agendamento",
        "Formulários de captação",
        "Automação de confirmação",
        "Suporte por 30 dias"
      ],
      popular: false
    },
    {
      name: "Growth",
      price: "18.000",
      description: "Solução completa para crescimento acelerado",
      features: [
        "Tudo do Starter +",
        "Automação completa de WhatsApp",
        "Dashboard de KPIs em tempo real",
        "Chatbot com IA personalizada",
        "Integração com CRM",
        "Sequências de follow-up automáticas",
        "Relatórios semanais",
        "Suporte por 90 dias"
      ],
      popular: true
    },
    {
      name: "Scale",
      price: "45.000",
      description: "Para clínicas que querem escalar exponencialmente",
      features: [
        "Tudo do Growth +",
        "Integrações avançadas customizadas",
        "Automação de campanhas de anúncios",
        "A/B testing contínuo",
        "Consultoria estratégica mensal",
        "Retainer de otimização (R$ 2.500/mês)",
        "Acesso prioritário ao suporte",
        "Implementação em até 3 semanas"
      ],
      popular: false
    }
  ];

  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-gray-900">Investimento</h2>
          <p className="text-xl text-gray-600">
            Escolha o plano ideal para o momento da sua clínica
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, i) => (
            <Card key={i} className={`relative ${plan.popular ? 'border-emerald-600 border-2 shadow-xl' : 'border-gray-200'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-emerald-600 text-white px-4 py-1">
                    <Sparkles className="h-3 w-3 mr-1 inline" />
                    Mais Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-gray-900">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl text-gray-900">R$ {plan.price}</span>
                  {plan.name === "Scale" && (
                    <span className="text-gray-600 text-sm ml-2">+ mensalidade</span>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  onClick={scrollToContact}
                  className={`w-full ${plan.popular ? 'bg-emerald-600 hover:bg-emerald-700' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Solicitar Proposta
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="max-w-2xl mx-auto text-center bg-emerald-50 p-8 rounded-xl border border-emerald-100">
          <p className="text-gray-700 mb-4">
            <strong>ROI Típico:</strong> 1 a 3 pacientes de alto ticket já pagam 100% do investimento
          </p>
          <p className="text-sm text-gray-600">
            Parcelamento disponível em até 7x sem juros para planos Growth e Scale
          </p>
        </div>
      </div>
    </section>
  );
}
