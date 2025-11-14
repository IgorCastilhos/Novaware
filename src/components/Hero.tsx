import { Button } from "./ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-sm">Sistema de Aquisição Automática de Pacientes</span>
          </div>
          
          <h1 className="mb-6 text-4xl md:text-6xl leading-tight">
            Preencha Sua Agenda com <span className="text-emerald-200">Pacientes de Alto Ticket</span>
          </h1>
          
          <p className="mb-8 text-xl md:text-2xl text-emerald-50 max-w-3xl mx-auto">
            Menos perdas de consulta. Mais receita previsível. Automação completa para profissionais de saúde.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-white text-emerald-700 hover:bg-emerald-50 shadow-xl hover:shadow-2xl transition-all"
            >
              Quero Crescer Minha Clínica
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById("solucao")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-white text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm"
            >
              Saiba Como Funciona
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              "Automação completa de captação",
              "IA personalizada para sua clínica",
              "Relatórios de performance em tempo real"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-left bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <CheckCircle2 className="h-5 w-5 text-emerald-200 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
