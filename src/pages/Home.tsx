
const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">K&K Consultoria</h1>
          <p className="text-xl md:text-2xl mb-8">
            Consultoria e Assessoria em Segurança do Trabalho e Gestão da Qualidade
          </p>
          <a 
            href="/contato" 
            className="bg-white text-blue-800 px-6 py-3 rounded-lg font-medium hover:bg-blue-100 transition-colors"
          >
            Entre em Contato
          </a>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Segurança do Trabalho</h3>
              <p className="text-gray-600">
                Assessoria completa em segurança do trabalho, incluindo normas regulamentadoras e prevenção de acidentes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Gestão da Qualidade</h3>
              <p className="text-gray-600">
                Implementação e manutenção de sistemas de gestão da qualidade, incluindo ISO 9001.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Treinamentos</h3>
              <p className="text-gray-600">
                Treinamentos especializados em segurança do trabalho e qualidade para sua equipe.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/servicos" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
              Ver todos os serviços →
            </a>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-4">Sobre a K&K Consultoria</h2>
              <p className="mb-4 text-gray-700">
                Somos uma empresa especializada em consultoria e assessoria em segurança do trabalho e gestão da qualidade. 
                Com mais de 10 anos de experiência no mercado, oferecemos soluções personalizadas para empresas de todos os portes.
              </p>
              <p className="text-gray-700">
                Nossa equipe é composta por profissionais altamente qualificados e experientes, prontos para ajudar sua empresa a 
                atender todas as exigências legais e melhorar seus processos.
              </p>
              <a href="/sobre" className="inline-block mt-6 text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Conheça nossa história →
              </a>
            </div>
            <div className="md:w-1/2">
              <div className="bg-blue-800 h-64 rounded-lg flex items-center justify-center text-white text-2xl">
                Imagem da Empresa
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para melhorar a segurança e a qualidade da sua empresa?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato conosco hoje mesmo para uma consultoria personalizada e descubra como podemos ajudar sua empresa.
          </p>
          <a 
            href="/contato" 
            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Fale Conosco
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
