
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

const PortfolioPage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Nosso Portfólio
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Conheça alguns dos projetos que realizamos para nossos clientes
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="industria" className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="industria">Indústria</TabsTrigger>
                <TabsTrigger value="metalurgica">Metalúrgica</TabsTrigger>
                <TabsTrigger value="plasticos">Embalagens Plásticas</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="industria">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4">
                      <div className="h-48 w-full bg-gray-200 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Implementação de Sistema de Gestão de Segurança</h3>
                    <p className="text-sm text-gray-500 mb-3">Indústria Química de Grande Porte</p>
                    <p className="text-gray-600 mb-4">
                      Desenvolvimento e implementação de um sistema completo de gestão de segurança, incluindo treinamentos, 
                      documentação e ferramentas de gestão para indústria química com mais de 500 funcionários.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">NR-12</span>
                      <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">NR-20</span>
                      <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Gestão de Riscos</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-gray-600">
                        <span className="font-semibold">Resultado:</span> Redução de 65% nos acidentes de trabalho em 12 meses
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4">
                      <div className="h-48 w-full bg-gray-200 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Programa de Treinamento para Operadores</h3>
                    <p className="text-sm text-gray-500 mb-3">Indústria Alimentícia</p>
                    <p className="text-gray-600 mb-4">
                      Desenvolvimento e aplicação de um programa completo de treinamento para operadores de máquinas, 
                      com foco na prevenção de acidentes e na eficiência operacional.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">NR-12</span>
                      <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">NR-36</span>
                      <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Treinamento</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-gray-600">
                        <span className="font-semibold">Resultado:</span> Mais de 200 colaboradores treinados e capacitados
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4">
                      <div className="h-48 w-full bg-gray-200 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Adequação de Maquinário à NR-12</h3>
                    <p className="text-sm text-gray-500 mb-3">Indústria Têxtil</p>
                    <p className="text-gray-600 mb-4">
                      Projeto completo de adequação de parque de máquinas à NR-12, incluindo análise de riscos, 
                      elaboração de projeto técnico e acompanhamento da implementação.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">NR-12</span>
                      <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">APR</span>
                      <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Adequação</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-gray-600">
                        <span className="font-semibold">Resultado:</span> 100% de conformidade com a norma
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4">
                      <div className="h-48 w-full bg-gray-200 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 0 0 2.25 2.25h.75m0-3h-3a2.25 2.25 0 0 0-2.25 2.25v.75" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Elaboração de PGR e Documentação</h3>
                    <p className="text-sm text-gray-500 mb-3">Indústria de Cosméticos</p>
                    <p className="text-gray-600 mb-4">
                      Desenvolvimento completo do Programa de Gerenciamento de Riscos (PGR) e toda a documentação de segurança 
                      do trabalho para uma indústria de cosméticos em expansão.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">PGR</span>
                      <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">NR-1</span>
                      <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Documentação</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-gray-600">
                        <span className="font-semibold">Resultado:</span> Aprovação em auditoria do Ministério do Trabalho
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="metalurgica">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4">
                      <div className="h-48 w-full bg-gray-200 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.412 15.655 9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457 3 3m5.457 5.457 7.086 7.086m0 0L21 21" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Gestão de Riscos em Metalúrgica</h3>
                    <p className="text-sm text-gray-500 mb-3">Metalúrgica de Médio Porte</p>
                    <p className="text-gray-600 mb-4">
                      Implementação completa de um programa de gestão de riscos para uma metalúrgica com 150 funcionários, 
                      incluindo treinamentos específicos para trabalho com metais pesados.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">NR-12</span>
                      <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">NR-13</span>
                      <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">NR-9</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-gray-600">
                        <span className="font-semibold">Resultado:</span> Redução de 70% em acidentes graves
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4">
                      <div className="h-48 w-full bg-gray-200 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Implementação de Indicadores de Segurança</h3>
                    <p className="text-sm text-gray-500 mb-3">Metalúrgica de Grande Porte</p>
                    <p className="text-gray-600 mb-4">
                      Desenvolvimento e implementação de um sistema completo de indicadores de segurança para monitoramento e 
                      melhoria contínua dos processos de segurança.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">KPIs</span>
                      <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Dashboard</span>
                      <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Gestão</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-gray-600">
                        <span className="font-semibold">Resultado:</span> Melhoria contínua de 20% ao ano nos índices de segurança
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="plasticos">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4">
                      <div className="h-48 w-full bg-gray-200 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Adequação de NR-12 em Injetoras Plásticas</h3>
                    <p className="text-sm text-gray-500 mb-3">Indústria de Embalagens Plásticas</p>
                    <p className="text-gray-600 mb-4">
                      Projeto completo de adequação de injetoras plásticas à NR-12, incluindo instalação de proteções, 
                      sistemas de segurança e documentação técnica.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">NR-12</span>
                      <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Injetoras</span>
                      <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Proteções</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-gray-600">
                        <span className="font-semibold">Resultado:</span> Zero acidentes em 18 meses de operação
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4">
                      <div className="h-48 w-full bg-gray-200 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Treinamento em Ergonomia</h3>
                    <p className="text-sm text-gray-500 mb-3">Indústria de Filmes Plásticos</p>
                    <p className="text-gray-600 mb-4">
                      Desenvolvimento e aplicação de um programa completo de ergonomia para linha de produção 
                      de filmes plásticos, com foco na prevenção de lesões por esforço repetitivo.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">NR-17</span>
                      <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Ergonomia</span>
                      <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">LER/DORT</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-gray-600">
                        <span className="font-semibold">Resultado:</span> Redução de 80% nos afastamentos por problemas ergonômicos
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">K&K em Números</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Resultados que comprovam a eficácia de nossos serviços
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-primary mb-2">+200</div>
              <p className="text-gray-600">Clientes atendidos</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-primary mb-2">+5.000</div>
              <p className="text-gray-600">Profissionais treinados</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-primary mb-2">-70%</div>
              <p className="text-gray-600">Redução média de acidentes</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-gray-600">Anos de experiência</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">
              Vamos desenvolver um projeto para sua empresa?
            </h2>
            <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
              Entre em contato para discutir como podemos ajudar sua empresa a melhorar a segurança e a produtividade.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contato">Agendar Reunião</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PortfolioPage;
