import profileImage from '../assets/profile.jpeg'
import clinicaImg from '../assets/clínica.png'
import portalImg from '../assets/portal.png'
import rastroImg from '../assets/rastro.png'
import sgiImg from '../assets/SGI.png'
import easyCarImg from '../assets/easy car.jpeg'
import aplicativoImg from '../assets/aplicativo.jpeg'

export const portfolio = {
  shortName: 'LM.',
  greeting: 'Ola, eu sou',
  name: 'Lourenço Monjane',
  role: 'Engenheiro de Software & IA Automation',
  summary:
    'Sou um problem solver por natureza, movido pelo desejo de criar soluções com significado através da inovação, criatividade e tecnologia. Com experiência em desenvolvimento de software, automação de processos e integrações, procuro transformar ideias em experiências digitais funcionais, impactantes e orientadas para resolver desafios reais.',
  availability: 'Disponível para crescer a nível profissional e pessoal em software, automação e IA aplicada.',
  email: 'lourencomonjane2@gmail.com',
  photo: profileImage,
  location: 'FPLM, Maputo - Moçambique',

  heroTags: [
    'Fullstack',
    'Automação de processos',
    'Resolução de problemas',
  ],

  contactLinks: [
    {
      label: 'Email',
      value: 'Enviar mensagem',
      href: 'mailto:lourencomonjane2@gmail.com',
    },
    {
      label: 'LinkedIn',
      value: 'Ver perfil',
      href: 'https://www.linkedin.com/in/lourencomonjane',
    },
    {
      label: 'GitHub',
      value: 'Explorar codigo',
      href: 'https://github.com/monjane10',
    },
    {
      label: 'WhatsApp',
      value: 'Conversar no WhatsApp',
      href: 'https://wa.me/258850741012',
    },
  ],

  stats: [
    { value: 'Fullstack', label: 'desenvolvimento de software' },
    { value: 'IA Automation', label: 'integracoes e IA aplicada' },
    { value: 'Criatividade', label: 'solucoes com impacto real' },
  ],

  experience: [
    {
      period: 'Out, 2025 - Actual',
      title: 'Engenheiro de Software & IA Automation',
      company: 'Raggio AI',
      location: 'Remoto',
    },
    {
      period: 'Ago, 2024 - Out, 2025',
      title: 'Desenvolvedor Fullstack',
      company: 'AjpTech',
      location: 'Maputo, Moçambique',
    },
  ],

  education: [
    {
      period: 'Finalista',
      title: 'Licenciatura em Desenvolvimento de Software',
      company: 'Universidade São Tomas de Moçambique - USTM',
      location: 'Maputo, Moçambique',
      description:
        'Formação superior centrada em desenvolvimento de software, pensamento lógico, construção de sistemas e preparação para desafios reais do mercado.',
    },
    {
      period: '2020 - 2021',
      title: 'Ensino Médio',
      company: 'Escola Secundaria da Munhuana',
      location: 'Maputo, Moçambique',
      description:
        'Base acadêmica que reforçou disciplina, curiosidade e preparação para a transição para a área de tecnologia.',
    },
  ],

  skillGroups: [
    {
      title: 'Linguagens de Programação',
      items: ['Java', 'JavaScript', 'React.js', 'Spring Boot', 'Python', 'C#'],
    },
    {
      title: 'Automação e Integração',
      items: ['LLMs', 'RAG', 'Chatbots', 'Integração de sistemas', 'APIs Restful', 'Automação de processos'],
    },
    {
      title: 'Bases de Dados',
      items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Supabase', 'Firebase'],
    },
    {
      title: 'Backend',
      items: ['Spring Boot', 'Node.js', 'Express.js', 'Django', 'Netlify Functions'],
    },
    {
      title: 'Frontend',
      items: ['React.js', 'React Native', 'Tailwind CSS', 'chart.js', 'Material UI'],
    },
    {
      title: 'Ferramentas',
      items: ['Git', 'GitHub', 'n8n', 'postman', 'VS Code', 'IntelliJ IDEA', 'Swagger', 'ClickUp', 'Notion', 'Visual Studio', 'DevTools'],
    },
  ],

  projects: [
    {
      type: 'Sistema Web',
      title: 'Clínica - Gestão de Saúde',
      description:
        'Plataforma web desenvolvida para digitalizar e optimizar a gestão de clínicas e unidades de saúde, centralizando processos críticos como registo de pacientes, marcação de consultas, acompanhamento clínico e gestão de informação médica. O sistema permite o cadastro completo de pacientes, histórico clínico estruturado, registo de exames e emissão de receitas médicas, garantindo maior organização e rastreabilidade dos dados. Para melhorar a experiência e reduzir faltas às consultas, o sistema incorpora um mecanismo de notificações e lembretes automáticos, enviados previamente tanto para o médico quanto para o paciente.',
      stack: ['React.js', 'Node.js', 'PostgreSQL', 'Supabase', 'Tailwind CSS'],
      image: clinicaImg,
      links: {
        live: 'https://clinica-olhos-choupal.netlify.app/',
      },
    },
    {
      type: 'Portal Web',
      title: 'Portal de Gestão Corporativa',
      description:
        'Portal web corporativo com componente de IA e automação, desenvolvido para optimizar processos de recrutamento e gestão interna. A plataforma permite a criação de vagas, recolha estruturada de candidaturas e avaliação automática de candidatos através de um sistema de scoring baseado em critérios definidos pelo RH. Com integração de workflows automatizados, o sistema analisa dados como experiência, formação e competências, gerando classificações objectivas e priorizando candidatos de forma eficiente. A arquitetura escalável e o controlo de acessos por perfil garantem segurança, consistência e uma experiência intuitiva para múltiplos utilizadores.',
      stack: ['React.js', 'Node.js', 'Supabase', 'n8n', 'LLMs para automação de scoring de candidatos'],
      image: portalImg,
      links: {
        live: 'https://carreiras.raggioai.com/',
      },
    },
    {
      type: 'Sistema de Rastreamento',
      title: 'Rastro - Sistema de Rastreabilidade Alimentar',
      description:
        'Plataforma de verificação de produtos alimentares desenvolvida para apoiar o controlo sanitário e a proteção do consumidor, permitindo validar a autenticidade de produtos através de QR Code. O sistema é centrado na entidade reguladora Instituto Nacional de Actividades Económicas, responsável pelo registo e gestão dos dados dos produtos, enquanto o consumidor pode consultar essas informações em tempo real, garantindo transparência e confiança no mercado. A solução integra frontend em React e backend em Node.js, com suporte a comunicação dinâmica via WebSockets.',
      stack: ['React.js', 'Node.js', 'Supabase', 'WebSockets', 'QR Code Generation'],
      image: rastroImg,
      links: {
        live: 'https://rastro-rose.vercel.app/',
      },
    },
    {
      type: 'Gestão de Vendas e Inventário',
      title: 'StockAI - Sistema de Gestão de Vendas e Inventário',
      description:
        'Aplicação full-stack para gestão de vendas e inventário com arquitetura baseada em eventos ao nível da base de dados. Implementa POS com registo de vendas e itens, controlo de inventário por mês, e sincronização automática de stock através de triggers PostgreSQL. Inclui geração dinâmica de SKU, snapshots de produto nas vendas, auditoria de operações e controlo de perfis com RLS.',
      highlight: 'Arquitetura orientada a eventos com triggers para consistência automática do stock.',
      stack: ['React.js', 'TypeScript', 'Supabase (PostgreSQL)', 'Netlify Functions'],
      image: sgiImg,
      links: {
        live: 'https://stockai-dev.netlify.app/',
      },
    }, {
      type: 'Plataforma de Mobilidade',
      title: 'EasyCar - Aplicação Mobile de Transporte',
      description:
        'Solução mobile desenvolvida em React Native para transporte urbano, conectando passageiros e motoristas numa experiência intuitiva, com solicitação de corridas, actualização de estado em tempo real, histórico de viagens e notificações instantâneas.',
      highlight: 'Experiência fluída com rastreamento em tempo real e integração com mapas.',
      stack: ['React Native', 'Node.js', 'Google Maps API', 'Firebase', 'AsyncStorage'],
      image: easyCarImg,
      previewClassName: 'project-preview-handset',
      imageClassName: 'project-preview-image-handset',
      imageStyle: { '--project-image-scale': 1.16 },
      links: {
        github: 'https://github.com/monjane10/easyCar-mobile',
      },
    },
    {
      type: 'Aplicação Mobile',
      title: 'Aplicativo - Geração de Dietas Personalizadas',
      description:
        'Aplicação mobile inteligente desenvolvida para gerar dietas personalizadas com base nos dados e objectivos de cada cliente. A solução integra um backend em Node.js com modelos da OpenAI para criar recomendações alimentares mais ajustadas ao perfil do utilizador, através de uma experiência mobile simples, prática e intuitiva.',
      highlight: 'Geração inteligente de planos alimentares personalizados com apoio de IA.',
      stack: ['React Native', 'Node.js', 'OpenAI API'],
      image: aplicativoImg,
      previewClassName: 'project-preview-handset',
      imageClassName: 'project-preview-image-handset',
      imageStyle: { '--project-image-scale': 1.16 },
      links: {
        github: 'https://github.com/monjane10/mobile',
      },
    },
  ],

  contacts: [
    {
      label: 'Email',
      value: 'lourencomonjane2@gmail.com',
      href: 'mailto:lourencomonjane2@gmail.com',
    },
    {
      label: 'Telefone',
      value: '+258 83 335 4327',
      href: 'tel:+258833354327',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/lourencomonjane',
      href: 'https://www.linkedin.com/in/lourencomonjane',
    },
  ],
}
