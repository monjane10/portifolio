import profileImage from '../assets/profile-avatar.jpg'
import clinicaImg from '../assets/clinica-crop.png'
import rastroImg from '../assets/rastro-crop.png'
import sgiImg from '../assets/SGI2.png'
import carteiraImg from '../assets/carteira-crop.png'
import tivacvImg from '../assets/tivacv-crop.png'
import procurementImg from '../assets/inovafem-crop.png'

export const portfolio = {
  name: 'Lourenço Monjane',
  role: 'Desenvolvedor de Software',
  location: 'Maputo, Moçambique',
  photo: profileImage,
  email: 'lourencomonjane2@gmail.com',
  summary:
    'Desenvolvedor de software especializado em aplicações web e mobile com React, Next.js e React Native. Com experiência também em backend, acompanho cada projecto da concepção à entrega, com foco na qualidade, no desempenho e na experiência do utilizador.',

  links: [
    { label: 'GitHub', href: 'https://github.com/monjane10' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lourencomonjane' },
    { label: 'WhatsApp', href: 'https://wa.me/258850741012' },
  ],

  projects: [
    {
      title: 'Supplyflow',
      year: '2026',
      featured: true,
      tags: ['Web', 'IA'],
      type: 'Compras e logística',
      description:
        'Gere as compras de uma empresa que concorre a concursos: cotações, comparação de fornecedores, propostas e entregas. A IA lê os documentos e redige as propostas.',
      stack: ['React', 'TanStack Start', 'TypeScript', 'Supabase', 'Netlify Functions', 'n8n', 'OCR'],
      image: procurementImg,
      links: { live: 'https://inovafem.netlify.app/' },
    },
    {
      title: 'TivaCV',
      year: '2026',
      featured: true,
      tags: ['Web', 'IA', 'Pagamentos móveis'],
      type: 'Criação de currículos',
      description:
        'Cria um currículo profissional no telemóvel em poucos minutos, com sugestões de texto e tradução para inglês por IA. O PDF paga-se no fim, por M-Pesa ou e-Mola.',
      stack: ['React', 'Vite', 'JavaScript', 'CSS', 'Node.js', 'Netlify Functions', 'Netlify Blobs', 'Puppeteer', 'Claude API', 'Zod', 'M-Pesa API'],
      image: tivacvImg,
      links: { live: 'https://tivacv.netlify.app/' },
    },
    {
      title: 'Carteira MZ',
      year: '2026',
      featured: true,
      tags: ['PWA', 'Mobile'],
      type: 'Finanças pessoais',
      description:
        'PWA de finanças pessoais: regista receitas, despesas e empréstimos, define orçamentos e metas, e mostra num dashboard os gastos do mês.',
      stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Zustand', 'Zod', 'PWA'],
      image: carteiraImg,
      mobile: true,
      links: { live: 'https://carteira-mz.vercel.app/login' },
    },
    {
      title: 'Clínica dos Olhos Choupal',
      year: '2026',
      type: 'Sistema web',
      description:
        'Gestão de uma clínica oftalmológica: pacientes, consultas, receitas e exames numa só plataforma, com lembretes automáticos para reduzir faltas.',
      stack: ['React', 'Node.js', 'PostgreSQL', 'Supabase', 'Tailwind'],
      image: clinicaImg,
      links: { live: 'https://clinica-olhos-choupal.netlify.app/' },
    },
    {
      title: 'Rastro',
      year: '2025',
      type: 'Plataforma web',
      description:
        'Verifica a origem de produtos alimentares. Cada produto tem um QR Code que mostra os dados registados em tempo real.',
      stack: ['React', 'Node.js', 'Supabase', 'WebSockets'],
      image: rastroImg,
      links: { live: 'https://rastro-rose.vercel.app/' },
    },
    {
      title: 'SGI',
      year: '2025',
      type: 'Vendas e inventário',
      description:
        'Ponto de venda com controlo de stock. O inventário actualiza-se a cada venda, com auditoria das operações e permissões por utilizador.',
      stack: ['React', 'TypeScript', 'Supabase', 'Netlify Functions'],
      image: sgiImg,
      links: { live: 'https://stockai-dev.netlify.app/' },
    },
  ],

  experience: [
    {
      period: 'Out 2025 – actualmente',
      title: 'Desenvolvedor de Software',
      company: 'Raggio AI',
    },
    {
      period: 'Ago 2024 – Jul 2025',
      title: 'Desenvolvedor Frontend',
      company: 'AjpTech',
    },
  ],

  education: [
    {
      period: '2022 – 2026',
      title: 'Licenciatura em Desenvolvimento de Software',
      company: 'Universidade São Tomás de Moçambique',
      initials: 'USTM',
    },
    {
      period: '2020 – 2021',
      title: 'Ensino Médio',
      company: 'Escola Secundária da Munhuana',
    },
  ],

  courses: [
    { period: 'Dez 2025', title: 'AI Agents Fundamentals', company: 'Hugging Face' },
    { period: 'Out 2025', title: 'Artificial Intelligence Fundamentals', company: 'IBM' },
    { period: 'Dez 2024', title: 'NLW Pocket: Mobile com React Native', company: 'Rocketseat' },
    { period: 'Nov 2024', title: 'Java', company: 'Rocketseat' },
    { period: 'Jan 2023', title: 'Introduction to Front-end Development', company: 'Meta, via Coursera' },
  ],

  skills: [
    { title: 'Frontend', items: ['React.js', 'React Native', 'Next.js', 'Flutter', 'HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'TypeScript'] },
    { title: 'Backend', items: ['Node.js', 'Express.js', 'Java', 'Spring Boot', 'C#'] },
    { title: 'Dados', items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Supabase', 'Firebase'] },
    { title: 'Ferramentas', items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Swagger', 'n8n', 'DevTools'] },
  ],
}
