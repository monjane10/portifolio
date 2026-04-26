import profileImage from '../assets/profile.jpeg'
import clinicaImg from '../assets/clinica.png'
import portalImg from '../assets/portal.png'
import rastroImg from '../assets/rastro.png'
import sgiImg from '../assets/SGI.png'
import easyCarImg from '../assets/easy car.jpeg'
import aplicativoImg from '../assets/aplicativo.jpeg'

export const portfolio = {
  shortName: 'LM.',
  greeting: 'Olá, eu sou',
  name: 'Lourenço Monjane',
  role: 'Engenheiro de Software & IA Automation',
  summary:
    'Sou engenheiro de software com foco em desenvolvimento fullstack e automação com IA. Actuo na criação de sistemas web e aplicações inteligentes que optimizam processos, reduzem esforço manual e melhoram a tomada de decisão. Tenho experiência no desenvolvimento de plataformas completas, desde a arquitectura backend até interfaces modernas, integrando APIs, bases de dados e workflows automatizados. O meu foco é simples: transformar problemas reais em soluções digitais eficientes e escaláveis.',
  availability: 'Disponível para crescer a nível profissional e pessoal em software, automação e IA aplicada.',
  email: 'lourencomonjane2@gmail.com',
  photo: profileImage,
  location: 'Maputo, Moçambique',


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
      period: '2022 - 2026',
      title: 'Licenciatura em Desenvolvimento de Software',
      company: 'Universidade São Tomas de Moçambique - USTM',
      location: 'Maputo, Moçambique',
      description:
        'Formação superior centrada em desenvolvimento de software, pensamento lógico, construção de sistemas e preparação para desafios reais do mercado.',
    },
    {
      period: '2020 - 2021',
      title: 'Ensino Médio',
      company: 'Escola Secundária da Munhuana',
      location: 'Maputo, Moçambique',
      description:
        'Base acadêmica que reforçou disciplina, curiosidade e preparação para a transição para a área de tecnologia.',
    },
  ],

  courses: [
    {
      period: '2025-12',
      title: 'AI Agents Fundamentals',
      company: 'Hugging Face',
      location: '',
      description: 'Curso sobre agentes de IA e fundamentos práticos. Certificado disponível.',
    },
    {
      period: '2025-10',
      title: 'Artificial Intelligence Fundamentals',
      company: 'IBM',
      location: '',
      description: 'Fundamentos de IA com conceitos teóricos e práticos. Certificado disponível.',
    },
    {
      period: '2024-12',
      title: 'NLW Pocket: Mobile - React Native',
      company: 'Rocketseat',
      location: '',
      description: 'Formação prática em React Native. Certificado disponível.',
    },
    {
      period: '2024-11',
      title: 'Curso Gratuito de Java - Java',
      company: 'Rocketseat',
      location: '',
      description: 'Curso introdutório de Java. Certificado disponível.',
    },
    {
      period: '2023-01',
      title: 'Introduction to Front-end Development',
      company: 'Coursera (Meta)',
      location: '',
      description: 'Introdução a HTML, CSS e JavaScript. Certificado disponível.',
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
      items: ['Git', 'GitHub', 'n8n', 'Make', 'postman', 'VS Code', 'IntelliJ IDEA', 'Swagger', 'ClickUp', 'Notion', 'Visual Studio', 'DevTools'],
    },
  ],

  projects: [
    {
      type: 'Sistema Web',
      title: 'Sistema de Gestão de Clínicas - Clínica dos Olhos Choupal',
      description:
        `Sistema web para gestão de clínicas que centraliza pacientes, consultas e histórico clínico numa única plataforma. Registo completo de pacientes e histórico médico estruturado. Marcação e acompanhamento de consultas. Emissão de receitas e registo de exames.
Notificações automáticas para reduzir faltas e melhorar a comunicação. Resultado: maior organização, rastreabilidade e eficiência nos processos clínicos`,
      stack: ['React.js', 'Node.js', 'PostgreSQL', 'Supabase', 'Tailwind CSS'],
      image: clinicaImg,
      links: {
        live: 'https://clinica-olhos-choupal.netlify.app/',
      },
    },
    {
      type: 'Portal Web',
      title: 'Portal de Recrutamento e Gestão Interna ',
      description:
        'Plataforma corporativa com IA para automatizar processos de recrutamento e gestão interna. Criação e gestão de vagas com recolha estruturada de candidaturas. Sistema de scoring automático baseado em critérios de RH. Avaliação inteligente de candidatos com base em dados reais. Workflows automatizados para optimizar o processo de seleção. Resultado: redução significativa do tempo de recrutamento e decisões mais objectivas',
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
        'Plataforma para verificação da autenticidade de produtos alimentares, focada em transparência e segurança do consumidor. Validação de produtos via QR Code. Consulta em tempo real de informações registadas. Sistema orientado à entidade reguladora para controlo sanitário. Comunicação em tempo real com WebSockets. Resultado: maior confiança do consumidor e melhor controlo de qualidade no mercado',
      stack: ['React.js', 'Node.js', 'Supabase', 'WebSockets', 'QR Code Generation'],
      image: rastroImg,
      links: {
        live: 'https://rastro-rose.vercel.app/',
      },
    },
    {
      type: 'Gestão de Vendas e Inventário',
      title: 'SGI - Sistema de Gestão de Vendas e Inventário',
      description:
        'Sistema full-stack para gestão de vendas e controlo de stock com arquitectura orientada a eventos. Registo de vendas (POS) com snapshot de produtos. Controlo de inventário com sincronização automática. Triggers no PostgreSQL para consistência de dados. Geração dinâmica de SKU e auditoria de operações. Controlo de acessos com Row Level Security (RLS). Resultado: gestão de stock mais precisa e redução de inconsistências operacionais',
      stack: ['React.js', 'TypeScript', 'Supabase (PostgreSQL)', 'Netlify Functions'],
      image: sgiImg,
      links: {
        live: 'https://stockai-dev.netlify.app/',
      },
    }, {
      type: 'Plataforma de Mobilidade',
      title: 'EasyCar - Aplicação Mobile de Transporte',
      description:
        `Aplicação mobile para transporte urbano com experiência em tempo real para passageiros e motoristas.
Solicitação de corridas com geolocalização
Atualização de estado em tempo real
Histórico de viagens e notificações instantâneas
Integração com mapas para navegação
Resultado: experiência fluida e eficiente na gestão de transporte urbano`,
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
        `Aplicação mobile que gera planos alimentares personalizados com suporte de inteligência artificial.
Geração automática de dietas com base no perfil do utilizador
Integração com modelos de IA para recomendações inteligentes
Interface simples e orientada ao utilizador
Backend optimizado para processamento de dados personalizados
Resultado: recomendações alimentares mais precisas e adaptadas a cada utilizador`,
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
