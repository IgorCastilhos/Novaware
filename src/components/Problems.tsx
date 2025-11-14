import { XCircle, Clock, TrendingDown, Users, Smartphone, DollarSign } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Problems() {
  const problems = [
    {
      icon: Users,
      title: "Agenda cheia de pacientes errados",
      description: "Tempo perdido com pessoas que não têm perfil para pagar por procedimentos premium"
    },
    {
      icon: Clock,
      title: "Gestão operacional caótica",
      description: "Horas desperdiçadas gerenciando tecnologia, configurando sistemas e testando ferramentas"
    },
    {
      icon: Smartphone,
      title: "Dependência do Instagram",
      description: "Marketing imprevisível que depende de posts virais e não gera pacientes consistentes"
    },
    {
      icon: TrendingDown,
      title: "Falta de previsibilidade",
      description: "Não saber quantos pacientes virão no próximo mês impossibilita planejamento e crescimento"
    },
    {
      icon: XCircle,
      title: "Alto índice de perdas de consulta",
      description: "Agenda furada por faltas de última hora e pacientes que simplesmente desaparecem"
    },
    {
      icon: DollarSign,
      title: "Receita instável",
      description: "Faturamento oscila mês a mês sem controle, dificultando investimentos e expansão"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-red-600">Problemas que Travam Seu Crescimento</h2>
          <p className="text-xl text-gray-600">
            Profissionais de saúde excelentes perdem milhares em receita todos os meses por falta de sistema
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <Card key={i} className="border-red-100 hover:border-red-300 transition-colors hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-50 rounded-lg">
                      <Icon className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-gray-900">{problem.title}</h3>
                      <p className="text-sm text-gray-600">{problem.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
