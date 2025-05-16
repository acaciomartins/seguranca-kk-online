
const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Sobre Nós</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conheça a história da K&K Consultoria e nossa missão de ajudar empresas a alcançarem excelência em segurança do trabalho e qualidade.
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Nossa História</h2>
            <p className="mb-6">
              A K&K Consultoria foi fundada em 2010 por dois engenheiros de segurança do trabalho, Karina e Kleber, 
              que perceberam a necessidade de serviços especializados em segurança do trabalho e gestão da qualidade no mercado.
            </p>
            <p className="mb-6">
              Ao longo dos anos, expandimos nossa equipe e serviços para atender às crescentes demandas de nossos clientes. 
              Hoje, contamos com uma equipe multidisciplinar de engenheiros, técnicos e especialistas comprometidos em oferecer 
              as melhores soluções para nossos clientes.
            </p>
            <p className="mb-6">
              Nossa trajetória é marcada por parcerias de sucesso com empresas de diversos segmentos, 
              contribuindo para ambientes de trabalho mais seguros e processos mais eficientes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Missão, Visão e Valores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Missão</h3>
              <p>
                Proporcionar soluções em segurança do trabalho e gestão da qualidade que garantam o bem-estar dos 
                trabalhadores e a excelência operacional das empresas, contribuindo para um ambiente de trabalho 
                mais seguro e produtivo.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Visão</h3>
              <p>
                Ser referência nacional em consultoria de segurança do trabalho e gestão da qualidade, 
                reconhecida pela excelência técnica, inovação e comprometimento com os resultados dos clientes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Valores</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Ética e transparência em todas as relações</li>
                <li>Compromisso com a excelência técnica</li>
                <li>Valorização da vida e bem-estar</li>
                <li>Respeito às normas e legislações</li>
                <li>Melhoria contínua</li>
                <li>Responsabilidade social</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nossa Equipe</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="bg-gray-300 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-600">Foto</span>
              </div>
              <h3 className="text-xl font-bold mb-1">Karina Silva</h3>
              <p className="text-blue-700 mb-2">Co-Fundadora / Engenheira de Segurança</p>
              <p className="text-gray-600">
                Especialista em gestão de riscos e sistemas de gestão de segurança.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="bg-gray-300 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-600">Foto</span>
              </div>
              <h3 className="text-xl font-bold mb-1">Kleber Santos</h3>
              <p className="text-blue-700 mb-2">Co-Fundador / Engenheiro de Qualidade</p>
              <p className="text-gray-600">
                Especialista em sistemas de gestão da qualidade e auditorias.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="bg-gray-300 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-600">Foto</span>
              </div>
              <h3 className="text-xl font-bold mb-1">Ana Oliveira</h3>
              <p className="text-blue-700 mb-2">Técnica de Segurança</p>
              <p className="text-gray-600">
                Especialista em treinamentos e programas de prevenção.
              </p>
            </div>
            
            {/* Team Member 4 */}
            <div className="text-center">
              <div className="bg-gray-300 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-600">Foto</span>
              </div>
              <h3 className="text-xl font-bold mb-1">Carlos Mendes</h3>
              <p className="text-blue-700 mb-2">Consultor de Qualidade</p>
              <p className="text-gray-600">
                Especialista em implementação de normas ISO.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para trabalhar conosco?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato hoje mesmo e descubra como nossa equipe pode ajudar sua empresa a alcançar excelência em segurança e qualidade.
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

export default About;
