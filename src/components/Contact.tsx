import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Mail, Phone, CheckCircle2 } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialty: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Criar mensagem para WhatsApp
    const whatsappMessage = encodeURIComponent(
      `*Nova Solicitação - Landing Page*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Telefone:* ${formData.phone}\n` +
      `*Especialidade:* ${formData.specialty}\n` +
      `*Mensagem:* ${formData.message}`
    );
    
    // Criar link mailto
    const mailtoLink = `mailto:novawaresw@gmail.com?subject=Solicitação de Contato - ${formData.name}&body=Nome: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATelefone: ${formData.phone}%0D%0AEspecialidade: ${formData.specialty}%0D%0A%0D%0AMensagem:%0D%0A${formData.message}`;
    
    // Abrir mailto
    window.location.href = mailtoLink;
    
    // Também abrir WhatsApp em nova aba
    window.open(`https://wa.me/5551996302909?text=${whatsappMessage}`, '_blank');
    
    setIsSubmitted(true);
    toast.success("Mensagem enviada! Entraremos em contato em breve.");
    
    // Reset form
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        specialty: "",
        message: ""
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-gray-900">Pronto Para Transformar Sua Clínica?</h2>
          <p className="text-xl text-gray-600">
            Entre em contato e descubra como podemos ajudar você a crescer de forma previsível
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle className="text-gray-900">Envie Sua Mensagem</CardTitle>
              <CardDescription>
                Preencha o formulário e entraremos em contato em até 24 horas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Dr(a). Seu Nome"
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Telefone / WhatsApp *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(51) 99999-9999"
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="specialty">Especialidade / Área *</Label>
                  <Select
                    value={formData.specialty}
                    onValueChange={(value) => setFormData({ ...formData, specialty: value })}
                    required
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecione sua área" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="medico-estetico">Médico Estético</SelectItem>
                      <SelectItem value="dentista">Dentista / Harmonização</SelectItem>
                      <SelectItem value="nutricionista">Nutricionista</SelectItem>
                      <SelectItem value="personal">Personal Trainer</SelectItem>
                      <SelectItem value="consultorio">Pequeno Consultório</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-nos um pouco sobre sua clínica e seus objetivos..."
                    rows={4}
                    className="mt-1"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-emerald-600 hover:bg-emerald-700"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Mensagem Enviada!
                    </>
                  ) : (
                    "Enviar Mensagem"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card className="border-emerald-200 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
              <CardHeader>
                <CardTitle className="text-white">Contato Direto</CardTitle>
                <CardDescription className="text-emerald-100">
                  Prefere falar diretamente? Entre em contato pelos canais abaixo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <a 
                  href="mailto:novawaresw@gmail.com"
                  className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors border border-white/20"
                >
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-emerald-100">Email</div>
                    <div className="break-all">novawaresw@gmail.com</div>
                  </div>
                </a>
                
                <a 
                  href="https://wa.me/5551996302909"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors border border-white/20"
                >
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-emerald-100">WhatsApp</div>
                    <div>(51) 99630-2909</div>
                  </div>
                </a>
              </CardContent>
            </Card>
            
            <Card className="border-emerald-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Por Que Escolher a Novaware?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Engenharia de software especializada em saúde",
                    "Automações que realmente convertem",
                    "Foco em ROI e resultados mensuráveis",
                    "Suporte técnico especializado",
                    "Sistema sob medida para sua clínica"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
