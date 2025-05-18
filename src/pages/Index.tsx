
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ClientLogo from "@/components/ClientLogo";

// Import client logos
import ecocleanLogo from "@/assets/clients/ecoclean.png";
import escalonarLogo from "@/assets/clients/escalonar.png";
import ltsLogo from "@/assets/clients/lts.png";
import construtoraReisLogo from "@/assets/clients/construtora-reis.png";
import artflexLogo from "@/assets/clients/artflex.png";
import befortLogo from "@/assets/clients/befort.png";
import ribeiroPachecoLogo from "@/assets/clients/ribeiro-pacheco.png";
import atlasLogo from "@/assets/clients/atlas.png";
import jiaLogo from "@/assets/clients/jia.png";
import premiumPackLogo from "@/assets/clients/premium-pack.png";

const HomePage = () => {
  const clients = [
    { logo: ecocleanLogo, name: "EcoClean" },
    { logo: escalonarLogo, name: "Escalonar Construtora" },
    { logo: ltsLogo, name: "LTS Engenharia" },
    { logo: construtoraReisLogo, name: "Construtora Reis" },
    { logo: artflexLogo, name: "Artflex Engenharia" },
    { logo: befortLogo, name: "Befort Construtora" },
    { logo: ribeiroPachecoLogo, name: "Ribeiro & Pacheco Eventos" },
    { logo: atlasLogo, name: "Atlas Locações" },
    { logo: jiaLogo, name: "JIA Empreiteira" },
    { logo: premiumPackLogo, name: "Premium Pack" },
  ];
  
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="hero-pattern py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Segurança do trabalho</span>
              <span className="block text-primary">que gera resultados</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Consultoria especializada em treinamentos NRs e gestão de segurança ocupacional para indústrias de embalagens plásticas, metalúrgicas e de grande porte.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link to="/servicos">Conheça Nossos Serviços</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contato">Fale com um Especialista</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Nossos Serviços</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Soluções completas em segurança do trabalho para sua empresa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Treinamentos NR</h3>
                <p className="mt-3 text-gray-600">
                  Treinamentos especializados para atender às Normas Regulamentadoras exigidas pelo Ministério do Trabalho.
                </p>
                <div className="mt-6">
                  <Button variant="link" asChild className="p-0">
                    <Link to="/servicos" className="flex items-center text-primary">
                      Saiba mais
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Gestão de Segurança</h3>
                <p className="mt-3 text-gray-600">
                  Implementação e gestão de sistemas de segurança ocupacional personalizados para sua indústria.
                </p>
                <div className="mt-6">
                  <Button variant="link" asChild className="p-0">
                    <Link to="/servicos" className="flex items-center text-primary">
                      Saiba mais
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 0 0 2.25 2.25h.75m0-3h-3a2.25 2.25 0 0 0-2.25 2.25v.75m11.387-9.758-3.539 3.538a1.5 1.5 0 0 1-1.768.265l-.8-.4a1.5 1.5 0 0 1-.53-2.32l3.538-5.307c.6-.9 1.8-1.199 2.768-.733a13.5 13.5 0 0 1 5.342 4.176.75.75 0 0 1-.23 1.095l-.746.373a13.5 13.5 0 0 1-4.035 1.336Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Consultoria Especializada</h3>
                <p className="mt-3 text-gray-600">
                  Análise de riscos, auditorias e consultoria personalizada para adequação à legislação de segurança do trabalho.
                </p>
                <div className="mt-6">
                  <Button variant="link" asChild className="p-0">
                    <Link to="/servicos" className="flex items-center text-primary">
                      Saiba mais
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/90 to-teal-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">
              Pronto para melhorar a segurança na sua empresa?
            </h2>
            <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
              Agende uma consultoria gratuita com nossos especialistas e descubra como podemos ajudar sua empresa.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contato">Entre em Contato</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Nossos Clientes</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Empresas que confiam em nossos serviços de consultoria e treinamentos
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {clients.map((client, index) => (
              <ClientLogo 
                key={index} 
                src={client.logo} 
                alt={`Logo ${client.name}`} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">O Que Dizem Nossos Clientes</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça a experiência de quem já trabalhou conosco
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-600 mb-4">
                  "A K&K Consultoria foi fundamental para a adequação da nossa indústria às normas de segurança. Os treinamentos foram práticos e os consultores são extremamente qualificados."
                </blockquote>
                <div className="flex items-center mt-6">
                  <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center">
                    <span className="font-semibold text-gray-700">MR</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-semibold text-gray-900">Marcos Ribeiro</p>
                    <p className="text-sm text-gray-600">Diretor Operacional, Indústria Plástica</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-600 mb-4">
                  "Reduzimos em mais de 40% os acidentes de trabalho após implementar as recomendações da K&K. A gestão de segurança melhorou consideravelmente."
                </blockquote>
                <div className="flex items-center mt-6">
                  <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center">
                    <span className="font-semibold text-gray-700">AS</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-semibold text-gray-900">Ana Silva</p>
                    <p className="text-sm text-gray-600">Gerente de RH, Metalúrgica</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-600 mb-4">
                  "Os treinamentos da NR-12 foram excelentes. Nossa equipe está mais consciente e preparada para operar as máquinas com segurança."
                </blockquote>
                <div className="flex items-center mt-6">
                  <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center">
                    <span className="font-semibold text-gray-700">PO</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-semibold text-gray-900">Paulo Oliveira</p>
                    <p className="text-sm text-gray-600">Supervisor de Produção, Indústria</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
