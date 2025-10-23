import {
  useState
} from "react";
import {
  useForm
} from "react-hook-form";
import {
  zodResolver
} from "@hookform/resolvers/zod";
import * as z
  from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Input
} from "@/components/ui/input";
import {
  Label
} from "@/components/ui/label";
import {
  Textarea
} from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  ShineBorder
} from "@/components/magicui/shine-border";
import {
  RainbowButton
} from "@/components/magicui/rainbow-button";
import {
  AnimatedGridPattern
} from "@/components/ui/animated-grid-pattern";
import {
  toast
} from "sonner";
import logo
  from "@/assets/logo.png";
import {
  ChevronRight
} from "lucide-react";
import {
  cn
} from "@/lib/utils";

const formSchema = z.object({
  firstName: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(50, "Nome muito longo"),
  lastName: z.string().min(2, "Sobrenome deve ter pelo menos 2 caracteres").max(50, "Sobrenome muito longo"),
  company: z.string().min(2, "Nome da empresa deve ter pelo menos 2 caracteres").max(100, "Nome da empresa muito longo"),
  email: z.string().email("E-mail inválido").max(255, "E-mail muito longo"),
  phone: z.string().regex(/^\(\d{2}\)\s?\d{4,5}-?\d{4}$/, "Telefone deve estar no formato (XX) XXXXX-XXXX"),
  projectType: z.string().min(1, "Selecione um tipo de projeto"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(1000, "Mensagem muito longa"),
});

type FormData = z.infer<typeof formSchema>;

const Index = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  
  const projectType = watch("projectType");
  
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        toast.success("Formulário enviado com sucesso! Entraremos em contato em breve.");
        reset();
      } else {
        toast.error(result.error || "Erro ao enviar formulário. Tente novamente.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Erro ao enviar formulário. Tente novamente.");
    }
    
    setIsSubmitting(false);
  };
  
  return (
    <div
      className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden">
        {/* Animated Background */}
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "absolute inset-0 h-full w-full skew-y-12"
          )}
        />
        <div
          className="relative z-10 w-full max-w-6xl text-center">
          <img
            src={logo}
            alt="Novaware Logo"
            className="h-20 sm:h-20 lg:h-32 mx-auto mb-8 sm:mb-12"
          />
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
            Criamos <span
            className="bg-gradient-to-r from-[#123366] via-[#1769aa] to-[#45c8ff] bg-clip-text text-transparent">soluções digitais</span> que
            convertem
          </h1>
          <p
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 sm:mb-12">
            Software
            House
            especializada
            em
            Landing
            Pages,
            Websites
            e
            Automações
            que
            impulsionam
            seu
            negócio
          </p>
          <button
            onClick={scrollToForm}
            className="group inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-[#123366] via-[#1769aa] to-[#45c8ff] text-white hover:from-[#0d2347] hover:via-[#0f4e7d] hover:to-[#2db3ed] transition-all duration-300"
          >
            <span>🚀</span>
            Transforme
            seu
            negócio
            <ChevronRight
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
          </button>
        </div>
      </section>
      
      {/* Form Section */}
      <section
        id="contact-form"
        className="relative min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div
          className="w-full max-w-4xl">
          
          {/* Form with Shine Border */}
          <ShineBorder
            borderRadius={16}
            borderWidth={2}
            duration={14}
            color={["hsl(var(--shine-gradient-start))",
              "hsl(var(--shine-gradient-mid))",
              "hsl(var(--shine-gradient-end))"]}
            className="w-full"
          >
            <Card
              className="w-full border-0 shadow-none">
              <CardHeader
                className="space-y-1 pb-6">
                <CardTitle
                  className="text-2xl sm:text-3xl font-bold text-center">
                  Solicite
                  um
                  Orçamento
                </CardTitle>
                <CardDescription
                  className="text-center text-base">
                  Preencha
                  o
                  formulário
                  abaixo
                  e
                  entraremos
                  em
                  contato
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6">
                  <div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {/* First Name */}
                    <div
                      className="space-y-2">
                      <Label
                        htmlFor="firstName">Nome
                        *</Label>
                      <Input
                        id="firstName"
                        placeholder="João"
                        {...register("firstName")}
                        className={errors.firstName ?
                          "border-destructive" :
                          ""}
                      />
                      {errors.firstName && (
                        <p
                          className="text-sm text-destructive">{errors.firstName.message}</p>)}
                    </div>
                    
                    {/* Last Name */}
                    <div
                      className="space-y-2">
                      <Label
                        htmlFor="lastName">Sobrenome
                        *</Label>
                      <Input
                        id="lastName"
                        placeholder="Silva"
                        {...register("lastName")}
                        className={errors.lastName ?
                          "border-destructive" :
                          ""}
                      />
                      {errors.lastName && (
                        <p
                          className="text-sm text-destructive">{errors.lastName.message}</p>)}
                    </div>
                  </div>
                  
                  {/* Company Name */}
                  <div
                    className="space-y-2">
                    <Label
                      htmlFor="company">Nome
                      da
                      Empresa
                      *</Label>
                    <Input
                      id="company"
                      placeholder="Sua Empresa Ltda"
                      {...register("company")}
                      className={errors.company ?
                        "border-destructive" :
                        ""}
                    />
                    {errors.company && (
                      <p
                        className="text-sm text-destructive">{errors.company.message}</p>)}
                  </div>
                  
                  <div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {/* Email */}
                    <div
                      className="space-y-2">
                      <Label
                        htmlFor="email">Seu
                        Melhor
                        E-mail
                        *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="contato@empresa.com"
                        {...register("email")}
                        className={errors.email ?
                          "border-destructive" :
                          ""}
                      />
                      {errors.email && (
                        <p
                          className="text-sm text-destructive">{errors.email.message}</p>)}
                    </div>
                    
                    {/* Phone */}
                    <div
                      className="space-y-2">
                      <Label
                        htmlFor="phone">Telefone
                        com
                        DDD
                        *</Label>
                      <Input
                        id="phone"
                        placeholder="(51) 99999-9999"
                        {...register("phone")}
                        className={errors.phone ?
                          "border-destructive" :
                          ""}
                      />
                      {errors.phone && (
                        <p
                          className="text-sm text-destructive">{errors.phone.message}</p>)}
                    </div>
                  </div>
                  
                  {/* Project Type */}
                  <div
                    className="space-y-2">
                    <Label
                      htmlFor="projectType">Tipo
                      de
                      Projeto
                      *</Label>
                    <Select
                      value={projectType}
                      onValueChange={(value) => setValue("projectType", value)}
                    >
                      <SelectTrigger
                        className={errors.projectType ?
                          "border-destructive" :
                          ""}>
                        <SelectValue
                          placeholder="Selecione o tipo de projeto"/>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem
                          value="landing-page">Landing
                          Page</SelectItem>
                        <SelectItem
                          value="website">Website</SelectItem>
                        <SelectItem
                          value="website-institucional">Website
                          Institucional</SelectItem>
                        <SelectItem
                          value="automacao">Automação</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.projectType && (
                      <p
                        className="text-sm text-destructive">{errors.projectType.message}</p>)}
                  </div>
                  
                  {/* Message */}
                  <div
                    className="space-y-2">
                    <Label
                      htmlFor="message">Mensagem
                      *</Label>
                    <Textarea
                      id="message"
                      placeholder="Descreva seu projeto e necessidades..."
                      rows={5}
                      {...register("message")}
                      className={errors.message ?
                        "border-destructive" :
                        ""}
                    />
                    {errors.message && (
                      <p
                        className="text-sm text-destructive">{errors.message.message}</p>)}
                  </div>
                  
                  {/* Submit Button */}
                  <RainbowButton
                    type="submit"
                    className="w-full text-base font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ?
                      "Enviando..." :
                      "Enviar Solicitação"}
                  </RainbowButton>
                </form>
              </CardContent>
            </Card>
          </ShineBorder>
          
          {/* Footer with Contact Info */}
          <div
            className="mt-8 text-center space-y-2 text-sm text-muted-foreground">
            <p>CNPJ:
              57.344.498/0001-27</p>
            <p>
              <a
                href="tel:+5551996302909"
                className="hover:text-primary transition-colors">
                Telefone:
                (51)
                99630-2909
              </a>
              {" | "}
              <a
                href="mailto:novawaresw@gmail.com"
                className="hover:text-primary transition-colors">
                novawaresw@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>);
};

export default Index;
