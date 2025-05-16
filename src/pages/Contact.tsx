
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    
    // For now, we'll just simulate a successful submission
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Estamos prontos para ajudar sua empresa a alcançar excelência em segurança do trabalho e qualidade. Entre em contato conosco hoje mesmo.
          </p>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Envie sua mensagem</h2>
              
              {isSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p>Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Nome completo *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">E-mail *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Telefone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-gray-700 mb-2">Empresa</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Assunto *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-blue-500"
                    required
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="Consultoria em Segurança do Trabalho">Consultoria em Segurança do Trabalho</option>
                    <option value="Gestão da Qualidade">Gestão da Qualidade</option>
                    <option value="Treinamentos">Treinamentos</option>
                    <option value="Orçamento">Solicitação de Orçamento</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Mensagem *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-blue-500"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
                  >
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold mb-6">Informações de Contato</h2>
              
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-2">Endereço:</h3>
                  <p className="text-gray-700">
                    Av. Tancredo Neves, 1632<br />
                    Salvador Business, Sala 1201<br />
                    Caminho das Árvores, Salvador - BA<br />
                    CEP: 41820-020
                  </p>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-2">Telefone:</h3>
                  <p className="text-gray-700">(71) 3333-1234</p>
                  <p className="text-gray-700">(71) 99999-8888</p>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-2">E-mail:</h3>
                  <p className="text-gray-700">contato@kkconsultoria.com.br</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-2">Horário de Funcionamento:</h3>
                  <p className="text-gray-700">Segunda a Sexta: 8h às 18h</p>
                </div>
              </div>
              
              {/* Google Maps placeholder */}
              <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center text-gray-600">
                Mapa Google aqui
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
