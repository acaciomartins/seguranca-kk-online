
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SobrePage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Sobre a K&K Consultoria
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Especialistas em segurança ocupacional com experiência no setor industrial
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Nossa História</h2>
              <div className="mt-6 space-y-6 text-gray-600">
                <p>
                  A K&K Consultoria nasceu da paixão de dois engenheiros de segurança do trabalho 
                  que identificaram a necessidade de serviços especializados no setor industrial. 
                  Com mais de 15 anos de experiência em grandes indústrias, fundamos a empresa 
                  com o objetivo de proporcionar soluções personalizadas e eficientes.
                </p>
                <p>
                  Ao longo dos anos, desenvolvemos metodologias próprias para treinamentos e 
                  gestão de segurança que se adequam às necessidades específicas de cada cliente, 
                  garantindo a conformidade com a legislação e a proteção dos colaboradores.
                </p>
                <p>
                  Nossa equipe é formada por profissionais altamente qualificados e especializados 
                  nos diversos segmentos da segurança do trabalho, com foco no setor industrial.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-8">
                <div className="flex items-center justify-center h-full bg-gray-300 text-gray-600">
                  Imagem da Equipe
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nossa Missão</h3>
              <p className="text-gray-600 mb-6">
                Proporcionar soluções em segurança do trabalho que protejam os colaboradores 
                e promovam uma cultura de prevenção nas empresas, contribuindo para um ambiente 
                de trabalho mais seguro e produtivo.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nossa Visão</h3>
              <p className="text-gray-600">
                Ser referência em consultoria e treinamentos de segurança do trabalho 
                para o setor industrial, reconhecida pela excelência técnica e resultados 
                concretos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Nossos Valores</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Princípios que norteiam nosso trabalho diário
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Segurança</h3>
              <p className="text-gray-600">
                Comprometimento total com a segurança e bem-estar dos trabalhadores em todas as nossas ações.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Inovação</h3>
              <p className="text-gray-600">
                Busca constante por soluções inovadoras e eficientes para os desafios de segurança.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.479m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Parceria</h3>
              <p className="text-gray-600">
                Relacionamento de confiança e cooperação com nossos clientes, entendendo suas necessidades específicas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excelência</h3>
              <p className="text-gray-600">
                Comprometimento com a qualidade técnica e a entrega de resultados que superem as expectativas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Nossa Equipe</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Profissionais especializados e comprometidos com sua segurança
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900">Carlos Kowalski</h3>
              <p className="text-gray-600 mb-4">Engenheiro de Segurança do Trabalho</p>
              <p className="text-gray-600 text-sm">
                Com mais de 15 anos de experiência em indústrias de grande porte, 
                Carlos lidera nossa equipe de consultores com expertise em gestão de riscos.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900">Mariana Keller</h3>
              <p className="text-gray-600 mb-4">Especialista em Higiene Ocupacional</p>
              <p className="text-gray-600 text-sm">
                Especializada em avaliações de ambiente de trabalho e elaboração de laudos técnicos 
                para indústrias metalúrgicas e plásticas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900">Rafael Santos</h3>
              <p className="text-gray-600 mb-4">Técnico de Segurança do Trabalho</p>
              <p className="text-gray-600 text-sm">
                Instrutor certificado para treinamentos NR, com ampla experiência 
                em setores industriais de alto risco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">
              Vamos trabalhar juntos?
            </h2>
            <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
              Entre em contato para conhecer melhor nossos serviços e como podemos ajudar sua empresa.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contato">Fale Conosco</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default SobrePage;
