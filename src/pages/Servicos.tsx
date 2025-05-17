
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ServicosPage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Nossos Serviços
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Soluções completas em segurança do trabalho para sua indústria
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Treinamentos NR</h2>
              <div className="space-y-6">
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">NR-10: Segurança em Instalações Elétricas</h3>
                    <p className="text-gray-600 mb-4">
                      Treinamento para trabalhos envolvendo instalações elétricas e serviços com eletricidade.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                      <li>Básico - 40h</li>
                      <li>Complementar - SEP - 40h</li>
                      <li>Reciclagem - 20h</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">NR-12: Segurança no Trabalho em Máquinas e Equipamentos</h3>
                    <p className="text-gray-600 mb-4">
                      Capacitação para operação segura de máquinas e equipamentos, prevenindo acidentes e doenças do trabalho.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                      <li>Operação segura - 8h</li>
                      <li>Manutenção - 16h</li>
                      <li>Reciclagem - 4h</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">NR-33: Espaços Confinados</h3>
                    <p className="text-gray-600 mb-4">
                      Treinamentos para trabalho seguro em espaços confinados.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                      <li>Trabalhador autorizado - 16h</li>
                      <li>Supervisor - 40h</li>
                      <li>Reciclagem - 8h</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">NR-35: Trabalho em Altura</h3>
                    <p className="text-gray-600 mb-4">
                      Capacitação para trabalhos acima de 2 metros do piso, com riscos de queda.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                      <li>Básico - 8h</li>
                      <li>Avançado - 16h</li>
                      <li>Reciclagem - 8h</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Consultoria e Gestão</h2>
              <div className="space-y-6">
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Programa de Gerenciamento de Riscos (PGR)</h3>
                    <p className="text-gray-600 mb-4">
                      Elaboração e implementação do PGR conforme exigências da NR-1, incluindo:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                      <li>Levantamento de perigos e riscos</li>
                      <li>Plano de ação</li>
                      <li>Monitoramento</li>
                      <li>Análise crítica</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Laudos Técnicos</h3>
                    <p className="text-gray-600 mb-4">
                      Elaboração de laudos técnicos por engenheiros especializados:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                      <li>LTCAT - Laudo Técnico das Condições Ambientais de Trabalho</li>
                      <li>Laudo de Insalubridade e Periculosidade</li>
                      <li>Laudo de Ergonomia</li>
                      <li>Análise Preliminar de Riscos (APR)</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Adequação de Máquinas e Equipamentos (NR-12)</h3>
                    <p className="text-gray-600 mb-4">
                      Serviços completos para adequação de máquinas e equipamentos:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                      <li>Inventário de máquinas</li>
                      <li>Análise de riscos</li>
                      <li>Projeto de adequação</li>
                      <li>Acompanhamento da implementação</li>
                      <li>Validação e documentação</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Gestão de SESMT e CIPA</h3>
                    <p className="text-gray-600 mb-4">
                      Assessoria completa na implantação e gestão:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                      <li>Dimensionamento do SESMT</li>
                      <li>Formação e treinamento da CIPA</li>
                      <li>Organização de processos e documentação</li>
                      <li>Acompanhamento de reuniões e ações</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferential */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Por que escolher a K&K Consultoria?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça os diferenciais que nos tornam a escolha certa para sua empresa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expertise</h3>
              <p className="text-gray-600">
                Profissionais com formação avançada e experiência comprovada no setor industrial.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalização</h3>
              <p className="text-gray-600">
                Soluções desenvolvidas especificamente para as necessidades e realidade de cada cliente.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Resultados</h3>
              <p className="text-gray-600">
                Foco em resultados mensuráveis com indicadores claros e acompanhamento contínuo.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Agilidade</h3>
              <p className="text-gray-600">
                Atendimento ágil e eficiente, com respostas rápidas às necessidades dos clientes.
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
              Pronto para melhorar a segurança na sua indústria?
            </h2>
            <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
              Entre em contato para uma avaliação personalizada das necessidades da sua empresa.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contato">Solicitar Proposta</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ServicosPage;
