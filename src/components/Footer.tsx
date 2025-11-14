export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="mb-4 text-emerald-400">Novaware Growth Kit</h3>
              <p className="text-gray-400 text-sm">
                Sistema de Aquisição Automática de Pacientes para profissionais de saúde premium.
              </p>
            </div>
            
            <div>
              <h4 className="mb-4 text-white">Especialidades</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Médicos Estéticos</li>
                <li>Dentistas</li>
                <li>Nutricionistas Premium</li>
                <li>Personal Trainers</li>
                <li>Consultórios</li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4 text-white">Contato</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="mailto:novawaresw@gmail.com" className="hover:text-emerald-400 transition-colors">
                    novawaresw@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/5551996302909" className="hover:text-emerald-400 transition-colors" target="_blank" rel="noopener noreferrer">
                    (51) 99630-2909
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Novaware Growth Kit. Todos os direitos reservados.</p>
            <p className="mt-2">Engenharia de Software + Automação + Marketing Orientado a Dados</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
