
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

const ProdutosPage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Nossos Produtos
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Soluções e materiais para a gestão completa da segurança do trabalho
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="documentos" className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="documentos">Documentos e Manuais</TabsTrigger>
                <TabsTrigger value="sinalização">Sinalização</TabsTrigger>
                <TabsTrigger value="software">Software</TabsTrigger>
                <TabsTrigger value="treinamentos">Material de Treinamento</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="documentos">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4">
                      <div className="flex items-center justify-center h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Manual de Procedimentos NR-12</h3>
                    <p className="text-gray-600 mb-4">
                      Manual completo com procedimentos de segurança para operação e manutenção de máquinas e equipamentos, personalizado para sua indústria.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-primary">R$ 1.200,00</span>
                      <Button asChild size="sm">
                        <Link to="/contato">Solicitar</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4">
                      <div className="flex items-center justify-center h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 0 0 2.25 2.25h.75m0-3h-3a2.25 2.25 0 0 0-2.25 2.25v.75" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Templates de Documentação Completa</h3>
                    <p className="text-gray-600 mb-4">
                      Conjunto de templates editáveis para toda a documentação de segurança do trabalho, incluindo PGR, APR, PT, e mais.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-primary">R$ 890,00</span>
                      <Button asChild size="sm">
                        <Link to="/contato">Solicitar</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4">
                      <div className="flex items-center justify-center h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Manual de Prevenção de Acidentes</h3>
                    <p className="text-gray-600 mb-4">
                      Manual completo com orientações sobre prevenção de acidentes específicos para o setor industrial, com casos práticos e ilustrações.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-primary">R$ 750,00</span>
                      <Button asChild size="sm">
                        <Link to="/contato">Solicitar</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4">
                      <div className="flex items-center justify-center h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Checklist de Inspeção de Segurança</h3>
                    <p className="text-gray-600 mb-4">
                      Conjunto de checklists para inspeções periódicas de segurança em diferentes áreas da indústria, em formato digital e impresso.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-primary">R$ 490,00</span>
                      <Button asChild size="sm">
                        <Link to="/contato">Solicitar</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="sinalização">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4">
                      <div className="flex items-center justify-center h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Kit de Placas de Sinalização NR-12</h3>
                    <p className="text-gray-600 mb-4">
                      Conjunto completo de placas de sinalização para máquinas e equipamentos conforme NR-12, em material PVC de alta durabilidade.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-primary">R$ 580,00</span>
                      <Button asChild size="sm">
                        <Link to="/contato">Solicitar</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4">
                      <div className="flex items-center justify-center h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Faixas de Sinalização de Piso</h3>
                    <p className="text-gray-600 mb-4">
                      Faixas adesivas para demarcação de áreas de risco, rotas de fuga e delimitação de espaços conforme normas de segurança.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-primary">R$ 320,00</span>
                      <Button asChild size="sm">
                        <Link to="/contato">Solicitar</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="software">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4">
                      <div className="flex items-center justify-center h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Sistema de Gestão de Segurança K&K</h3>
                    <p className="text-gray-600 mb-4">
                      Software completo para gestão de todos os aspectos da segurança do trabalho, incluindo controle de documentos, treinamentos e indicadores.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-primary">Consulte</span>
                      <Button asChild size="sm">
                        <Link to="/contato">Solicitar Demo</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4">
                      <div className="flex items-center justify-center h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Dashboard de Indicadores de Segurança</h3>
                    <p className="text-gray-600 mb-4">
                      Ferramenta para visualização e acompanhamento dos principais indicadores de segurança, com geração automática de relatórios.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-primary">R$ 2.400,00/ano</span>
                      <Button asChild size="sm">
                        <Link to="/contato">Solicitar Demo</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="treinamentos">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4">
                      <div className="flex items-center justify-center h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-400">
                          <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Vídeos de Treinamento NRs</h3>
                    <p className="text-gray-600 mb-4">
                      Conjunto de vídeos didáticos para treinamentos das principais NRs, com exemplos práticos e casos reais do setor industrial.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-primary">R$ 1.900,00</span>
                      <Button asChild size="sm">
                        <Link to="/contato">Solicitar</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4">
                      <div className="flex items-center justify-center h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Kit de Slides para Treinamentos</h3>
                    <p className="text-gray-600 mb-4">
                      Apresentações profissionais e editáveis para ministrar treinamentos de segurança do trabalho na sua empresa.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-primary">R$ 850,00</span>
                      <Button asChild size="sm">
                        <Link to="/contato">Solicitar</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Metodologia para Desenvolvimento de Produtos</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Como criamos produtos de alta qualidade para atender às necessidades do setor industrial
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Análise do Setor</h3>
                <p className="text-gray-600">
                  Estudamos profundamente o setor industrial para entender suas particularidades, desafios e necessidades específicas em termos de segurança do trabalho.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Desenvolvimento Técnico</h3>
                <p className="text-gray-600">
                  Nossa equipe de especialistas desenvolve produtos que atendam às normas regulamentadoras e às melhores práticas de segurança, com foco na aplicabilidade e facilidade de uso.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Teste em Campo</h3>
                <p className="text-gray-600">
                  Todos os nossos produtos são testados em ambientes industriais reais para garantir sua eficácia e adequação às necessidades práticas dos clientes.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Melhoria Contínua</h3>
                <p className="text-gray-600">
                  Coletamos feedback constante dos clientes para aprimorar nossos produtos e garantir que estejam sempre atualizados em relação às normas e às necessidades do mercado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">
              Precisa de um produto personalizado?
            </h2>
            <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
              Entre em contato para discutir suas necessidades específicas e desenvolvermos uma solução sob medida.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contato">Solicitar Orçamento</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProdutosPage;
