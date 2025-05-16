
const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Nossos Serviços</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Oferecemos uma ampla gama de serviços em segurança do trabalho e gestão da qualidade para atender às necessidades específicas da sua empresa.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Segurança do Trabalho</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Service 1 */}
            <div className="flex">
              <div className="mr-4 text-blue-600">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">PPRA - Programa de Prevenção de Riscos Ambientais</h3>
                <p className="text-gray-600">
                  Desenvolvimento e implementação de programas para identificar, avaliar e controlar os riscos ambientais no local de trabalho, 
                  atendendo à legislação vigente e garantindo um ambiente seguro.
                </p>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="flex">
              <div className="mr-4 text-blue-600">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">PCMSO - Programa de Controle Médico de Saúde Ocupacional</h3>
                <p className="text-gray-600">
                  Elaboração e acompanhamento de programas de saúde ocupacional, com foco na prevenção de doenças relacionadas ao trabalho 
                  e promoção da saúde dos trabalhadores.
                </p>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="flex">
              <div className="mr-4 text-blue-600">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">CIPA - Comissão Interna de Prevenção de Acidentes</h3>
                <p className="text-gray-600">
                  Assessoria completa para formação e treinamento da CIPA, incluindo planejamento e execução de eleições, 
                  capacitação dos membros e acompanhamento das atividades.
                </p>
              </div>
            </div>
            
            {/* Service 4 */}
            <div className="flex">
              <div className="mr-4 text-blue-600">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Laudos Técnicos</h3>
                <p className="text-gray-600">
                  Elaboração de laudos técnicos especializados, como LTCAT (Laudo Técnico das Condições Ambientais de Trabalho), 
                  insalubridade e periculosidade, para atender requisitos legais e previdenciários.
                </p>
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-12 text-center">Gestão da Qualidade</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Service 5 */}
            <div className="flex">
              <div className="mr-4 text-blue-600">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Implementação ISO 9001</h3>
                <p className="text-gray-600">
                  Consultoria completa para implementação do Sistema de Gestão da Qualidade baseado na norma ISO 9001, 
                  desde o diagnóstico inicial até a certificação.
                </p>
              </div>
            </div>
            
            {/* Service 6 */}
            <div className="flex">
              <div className="mr-4 text-blue-600">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Auditorias Internas</h3>
                <p className="text-gray-600">
                  Realização de auditorias internas para avaliar a conformidade dos processos com os requisitos normativos 
                  e identificar oportunidades de melhoria.
                </p>
              </div>
            </div>
            
            {/* Service 7 */}
            <div className="flex">
              <div className="mr-4 text-blue-600">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Preparação para Certificação</h3>
                <p className="text-gray-600">
                  Assessoria completa na preparação para processos de certificação, incluindo treinamentos, 
                  simulações de auditoria e acompanhamento durante a auditoria externa.
                </p>
              </div>
            </div>
            
            {/* Service 8 */}
            <div className="flex">
              <div className="mr-4 text-blue-600">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Mapeamento e Melhoria de Processos</h3>
                <p className="text-gray-600">
                  Análise e redesenho de processos para aumentar a eficiência e qualidade, eliminando desperdícios 
                  e melhorando a satisfação dos clientes.
                </p>
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-12 text-center">Treinamentos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 9 */}
            <div className="flex">
              <div className="mr-4 text-blue-600">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Treinamentos em NRs</h3>
                <p className="text-gray-600">
                  Treinamentos específicos em Normas Regulamentadoras (NRs), como NR-05, NR-06, NR-10, NR-12, NR-20, NR-33, NR-35, 
                  atendendo às exigências legais e preparando os colaboradores para trabalhar com segurança.
                </p>
              </div>
            </div>
            
            {/* Service 10 */}
            <div className="flex">
              <div className="mr-4 text-blue-600">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Formação de Auditores Internos</h3>
                <p className="text-gray-600">
                  Treinamento para formação de auditores internos em sistemas de gestão da qualidade, 
                  capacitando profissionais para conduzir auditorias eficazes em sua organização.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Precisa de uma solução personalizada?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato conosco hoje mesmo para uma consulta gratuita. Nossa equipe está pronta para criar uma solução sob medida para sua empresa.
          </p>
          <a 
            href="/contato" 
            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Solicitar Orçamento
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
