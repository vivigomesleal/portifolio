window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    document.getElementById("main").classList.remove("hidden");
  }, 2000);
});



document.querySelectorAll(".project-item button").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    const isActive = item.classList.toggle("active");

    btn.textContent = isActive ? "Ver menos" : "Ver mais";
    btn.setAttribute("aria-expanded", isActive);
  });
});


const track = document.querySelector('.testimonials-track');
const cards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.querySelector('.testimonial-arrow.prev');
const nextBtn = document.querySelector('.testimonial-arrow.next');

let currentIndex = 0;
let cardsPerView = getCardsPerView();

function getCardsPerView() {
  if (window.innerWidth <= 768) return 1;
  if (window.innerWidth <= 1100) return 2;
  return 3;
}

function updateSlider() {
  cardsPerView = getCardsPerView();

  const cardStyle = window.getComputedStyle(cards[0]);
  const cardWidth = cards[0].offsetWidth;
  const gap = parseInt(window.getComputedStyle(track).gap) || 24;

  const moveX = currentIndex * (cardWidth + gap);
  track.style.transform = `translateX(-${moveX}px)`;

  const maxIndex = cards.length - cardsPerView;

  prevBtn.style.opacity = currentIndex <= 0 ? '0.35' : '1';
  nextBtn.style.opacity = currentIndex >= maxIndex ? '0.35' : '1';
}

nextBtn.addEventListener('click', () => {
  const maxIndex = cards.length - cardsPerView;
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateSlider();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

window.addEventListener('resize', () => {
  const maxIndex = cards.length - getCardsPerView();
  if (currentIndex > maxIndex) {
    currentIndex = Math.max(0, maxIndex);
  }
  updateSlider();
});

updateSlider();

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
  localStorage.setItem("siteLanguage", lang);

  document.querySelectorAll(".lang-switch button").forEach((button) => {
    button.classList.remove("active");
    if (button.textContent.trim().toLowerCase() === lang) {
      button.classList.add("active");
    }
  });
}

const translations = {
  pt: {
    nav_home: "Home",
    nav_about: "Sobre Mim",
    nav_about_short: "Sobre",
    nav_projects: "Projetos",
    nav_services: "Serviços",
    nav_contact: "Contato",

    hero_title: "Olá, eu sou a Vivi Gomes",
    hero_subtitle: "Desenvolvedora Web Front-End e Assessoria Digital",
    hero_btn_projects: "Ver Projetos",
    hero_btn_services: "Meus Serviços",

    about_title: "Sobre mim",
    about_text: "Sou uma desenvolvedora em formação no Curso de Sistemas para Internet na FATEC Rubens Lara, movida por curiosidade, criatividade e vontade real de transformar ideias em soluções digitais. Comecei minha jornada nas Redes Sociais buscando cursos de Marketing Digital, ADS e Design Gráfico, mas logo descobri minha verdadeira paixão: o desenvolvimento web. Gosto de desafios, aprender algo novo todos os dias e criar interfaces que façam sentido para pessoas reais. Hoje tenho visão que as empresas e pequenos empreendedores precisam de uma presença digital forte e eficaz para crescerem no mercado competitivo de hoje. Estou aqui para ajudar a transformar essas necessidades em realidade, criando sites e aplicações web que não só sejam visualmente atraentes, mas também funcionais e fáceis de usar.",
    about_btn_cv: "Baixar CV",
    skills_title: "Tecnologias & Ferramentas",

    projects_title: "Projetos",
    projects_sites_title: "Sites",
    projects_fatec_title: "Projetos da FATEC Rubens Lara",
    landing_page_title: "Landing Page",
    institutional_site_title: "Site Institucional",
    digital_media_title: "Mídias Digitais",
    social_media_advisory_title: "Assessoria às Redes Sociais",
    crm_advisory_title: "Assessoria em CRM profissional",
    logos_identity_title: "Logotipos e Identidade Visual",

    project1_title: "Projeto - Gelateria Havana",
    project1_desc: "Site landing page para posicionar uma empresa em um trabalho extracurricular em grupo",
    project1_details: "O projeto foi desenvolvido em grupo na disciplina de Design, com o objetivo de criar um protótipo no Figma para uma empresa real, com autorização para documentação e implementação do site em HTML, CSS e JavaScript.",

    project2_title: "Salerno Consultorias",
    project2_desc: "Criação de website institucional para a Salerno Consultorias, com foco em posicionamento digital e comunicação estratégica dos serviços.",
    project2_details: "O projeto envolveu planejamento de estrutura, design moderno com identidade profissional e desenvolvimento responsivo, garantindo uma navegação fluida em diferentes dispositivos. O objetivo principal foi aumentar a credibilidade da marca, organizar as informações de forma clara e facilitar o contato com potenciais clientes, reforçando a proposta de valor da consultoria no mercado empresarial.",

    project3_title: "Affetto - Especialidades Clínicas",
    project3_desc: "Criação de site institucional para a Affetto Especialidades Clínicas, com foco em presença digital e experiência do paciente.",
    project3_details: "O projeto envolveu organização estratégica das informações, design limpo e acessível, além de desenvolvimento responsivo para garantir usabilidade em todos os dispositivos. O objetivo foi fortalecer a credibilidade da clínica, facilitar o contato e transmitir uma comunicação clara, acolhedora e confiável.",

    project4_title: "Instagram da Gelateria Havana",
    project4_desc: "Assessoria completa de Instagram com foco em posicionamento de marca e crescimento digital.",
    project4_details: "O projeto inclui estudo aprofundado da identidade da empresa, definição de linguagem visual e planejamento estratégico de conteúdo. São produzidos posts, reels e stories com calendário de publicação estruturado, garantindo consistência e maior alcance. O objetivo é aumentar a visibilidade da marca, gerar engajamento e fortalecer sua autoridade no ambiente digital.",

    project5_title: "Corretores de Imóveis",
    project5_desc: "Assessoria completa para corretores de imóveis na gestão de sistemas e presença digital.",
    project5_details: "Inclui organização de CRM, cadastro de imóveis com fotos, vídeos e descrições profissionais, além da criação de identidade visual para anúncios. O objetivo é aumentar a visibilidade dos imóveis, atrair mais clientes e permitir que o corretor foque no fechamento de vendas enquanto toda a parte digital é cuidada de forma estratégica.",

    project6_title: "Logotipo para alguns profissionais",
    project6_desc: "Desenvolvo logotipos exclusivos que representam a essência da sua marca, unindo criatividade, estratégia e tecnologia.",
    project6_details: "Mais do que apenas um design, meu objetivo é construir junto com você uma marca forte e autêntica. Trabalhamos em parceria para entender o que faz sentido para o seu negócio, traduzindo valores, propósito e posicionamento em uma identidade visual única. Cada projeto é pensado de forma personalizada, garantindo que sua marca se destaque no mercado e se conecte verdadeiramente com seu público.",

    btn_see_more: "Ver mais",
    btn_see_less: "Ver menos",
    btn_access_project: "Acessar projeto",
    open_new_tab: " (Abre em nova tela)",

    services_title: "Meus Serviços",
    service1_title: "Desenvolvimento Web",
    service1_item1: "Landing Pages",
    service1_item2: "Sites Institucionais",
    service1_item3: "Mobile",
    service1_item4: "WordPress",
    service1_item5: "Manutenção e Suporte",

    service2_title: "Assessoria Digital",
    service2_text: "Posicionamento de empresas e profissionais no ambiente digital, incluindo cadastro no Google Business para ampliar visibilidade.",

    service3_title: "Gestão de Instagram",
    service3_item1: "Planejamento de conteúdo",
    service3_item2: "Criação de Reels e Stories",
    service3_item3: "Calendário estratégico de publicações",
    service3_item4: "Gestão completa de Instagram com foco em crescimento, engajamento e posicionamento de marca, utilizando conteúdo estratégico e consistente.",

    service4_title: "Identidade Visual & Design",
    service4_item1: "Logotipos",
    service4_item2: "Identidade Visual Completa",
    service4_item3: "Desenvolvimento de identidades visuais únicas e profissionais, alinhadas com o propósito da sua marca e pensadas para gerar reconhecimento e conexão com o público.",

    service5_title: "CRM para Profissionais",
    service5_item1: "Sistemas personalizados para gestão de clientes",
    service5_item2: "E-commerce",
    service5_item3: "Lojas virtuais",

    service6_title: "Soluções para Corretores de Imóveis",
    service6_item1: "Gestão Digital Imobiliária",
    service6_item2: "Cadastro de imóveis",
    service6_item3: "Edição e criação de vídeos para redes sociais",
    service6_item4: "Criação de anúncios",

    service7_title: "Parcerias",
    service7_item1: "Projetos de outros desenvolvedores",
    service7_item2: "Sites ou sistemas para ONG",
    service7_item3: "Desenvolvimento de projetos personalizados e parcerias estratégicas, adaptadas às necessidades específicas de cada cliente ou negócio.",

    service8_title: "Gestão de Mídias Digitais",
    service8_text: "Planejamento e gestão estratégica de redes sociais com foco em crescimento e posicionamento digital. Produção de conteúdos visuais, edição de vídeos e imagens, além da organização da presença digital em plataformas que precisam de visibilidade e posicionamento.",

    services_cta: "Fale comigo",

    testimonials_title: "Depoimentos",
    testimonial_prev: "Depoimento anterior",
    testimonial_next: "Próximo depoimento",
    testimonial1_text: "Texto.",
    testimonial1_role: "Empreendedora",
    testimonial1_date: "12 de janeiro de 2026",
    testimonial2_text: "Texto.",
    testimonial2_role: "Empreendedora da Gelateria Havana",
    testimonial2_date: "20 de novembro de 2025",
    testimonial3_text: "Texto.",
    testimonial3_role: "Psicóloga Clínica",
    testimonial3_date: "30 de março de 2026",
    testimonial4_role: "Corretora de Imóveis",
    testimonial4_date: "08 de fevereiro de 2025",

    contact_title: "Contato",
    contact_text: "Atendimento: Online via WhatsApp",
    contact_btn: "Enviar Mensagem",
    contact_close: "Fechar",

    skip_link: "Pular para o conteúdo"
  },

  en: {
    nav_home: "Home",
    nav_about: "About Me",
    nav_about_short: "About",
    nav_projects: "Projects",
    nav_services: "Services",
    nav_contact: "Contact",

    hero_title: "Hi, I'm Vivi Gomes",
    hero_subtitle: "Front-End Web Developer & Digital Consulting",
    hero_btn_projects: "View Projects",
    hero_btn_services: "My Services",

    about_title: "About Me",
    about_text: "I am a developer in training in the Internet Systems course at FATEC Rubens Lara, driven by curiosity, creativity, and a real desire to turn ideas into digital solutions. I began my journey in social media, exploring courses in Digital Marketing, Systems Analysis, and Graphic Design, but soon discovered my true passion: web development. I enjoy challenges, learning something new every day, and creating interfaces that make sense for real people. Today, I understand that companies and small entrepreneurs need a strong and effective digital presence to grow in today's competitive market. I am here to help transform these needs into reality by creating websites and web applications that are not only visually appealing, but also functional and easy to use.",
    about_btn_cv: "Download CV",
    skills_title: "Technologies & Tools",

    projects_title: "Projects",
    projects_sites_title: "Websites",
    projects_fatec_title: "FATEC Rubens Lara Projects",
    landing_page_title: "Landing Page",
    institutional_site_title: "Institutional Website",
    digital_media_title: "Digital Media",
    social_media_advisory_title: "Social Media Consulting",
    crm_advisory_title: "Professional CRM Consulting",
    logos_identity_title: "Logos and Visual Identity",

    project1_title: "Project - Gelateria Havana",
    project1_desc: "Landing page website developed to position a company in an extracurricular group project",
    project1_details: "The project was developed in a group for the Design course, with the goal of building a Figma prototype for a real company, with authorization for documentation and website implementation using HTML, CSS, and JavaScript.",

    project2_title: "Salerno Consultorias",
    project2_desc: "Creation of an institutional website for Salerno Consultorias, focused on digital positioning and strategic service communication.",
    project2_details: "The project involved structure planning, modern design with a professional identity, and responsive development, ensuring smooth navigation across different devices. The main goal was to increase the brand's credibility, organize information clearly, and facilitate contact with potential clients, reinforcing the consultancy's value proposition in the business market.",

    project3_title: "Affetto - Clinical Specialties",
    project3_desc: "Creation of an institutional website for Affetto Clinical Specialties, focused on digital presence and patient experience.",
    project3_details: "The project involved strategic organization of information, clean and accessible design, and responsive development to ensure usability across all devices. The goal was to strengthen the clinic's credibility, facilitate contact, and convey clear, welcoming, and trustworthy communication.",

    project4_title: "Gelateria Havana Instagram",
    project4_desc: "Complete Instagram consulting focused on brand positioning and digital growth.",
    project4_details: "The project includes an in-depth study of the company's identity, visual language definition, and strategic content planning. Posts, reels, and stories are produced with a structured publication calendar, ensuring consistency and greater reach. The goal is to increase brand visibility, generate engagement, and strengthen its authority in the digital environment.",

    project5_title: "Real Estate Agents",
    project5_desc: "Complete consulting for real estate agents in system management and digital presence.",
    project5_details: "It includes CRM organization, property listings with photos, videos, and professional descriptions, as well as the creation of visual identity for ads. The goal is to increase property visibility, attract more clients, and allow the agent to focus on closing sales while the entire digital side is managed strategically.",

    project6_title: "Logo Design for Professionals",
    project6_desc: "I create exclusive logos that represent the essence of your brand, combining creativity, strategy, and technology.",
    project6_details: "More than just design, my goal is to build a strong and authentic brand with you. We work together to understand what makes sense for your business, translating values, purpose, and positioning into a unique visual identity. Each project is created in a personalized way, ensuring your brand stands out in the market and truly connects with your audience.",

    btn_see_more: "See more",
    btn_see_less: "See less",
    btn_access_project: "Access project",
    open_new_tab: " (Opens in a new tab)",

    services_title: "My Services",
    service1_title: "Web Development",
    service1_item1: "Landing Pages",
    service1_item2: "Institutional Websites",
    service1_item3: "Mobile",
    service1_item4: "WordPress",
    service1_item5: "Maintenance and Support",

    service2_title: "Digital Consulting",
    service2_text: "Positioning companies and professionals in the digital environment, including Google Business registration to increase visibility.",

    service3_title: "Instagram Management",
    service3_item1: "Content planning",
    service3_item2: "Reels and Stories creation",
    service3_item3: "Strategic publishing calendar",
    service3_item4: "Complete Instagram management focused on growth, engagement, and brand positioning through strategic and consistent content.",

    service4_title: "Visual Identity & Design",
    service4_item1: "Logos",
    service4_item2: "Complete Visual Identity",
    service4_item3: "Development of unique and professional visual identities aligned with your brand's purpose and designed to generate recognition and audience connection.",

    service5_title: "CRM for Professionals",
    service5_item1: "Custom systems for client management",
    service5_item2: "E-commerce",
    service5_item3: "Online stores",

    service6_title: "Solutions for Real Estate Agents",
    service6_item1: "Real Estate Digital Management",
    service6_item2: "Property listings",
    service6_item3: "Video editing and creation for social media",
    service6_item4: "Ad creation",

    service7_title: "Partnerships",
    service7_item1: "Projects from other developers",
    service7_item2: "Websites or systems for NGOs",
    service7_item3: "Development of custom projects and strategic partnerships tailored to the specific needs of each client or business.",

    service8_title: "Digital Media Management",
    service8_text: "Strategic planning and management of social media focused on growth and digital positioning. Production of visual content, video and image editing, and organization of digital presence across platforms that need visibility and positioning.",

    services_cta: "Talk to me",

    testimonials_title: "Testimonials",
    testimonial_prev: "Previous testimonial",
    testimonial_next: "Next testimonial",
    testimonial1_text: "Text.",
    testimonial1_role: "Entrepreneur",
    testimonial1_date: "January 12, 2026",
    testimonial2_text: "Text.",
    testimonial2_role: "Gelateria Havana Entrepreneur",
    testimonial2_date: "November 20, 2025",
    testimonial3_text: "Text.",
    testimonial3_role: "Clinical Psychologist",
    testimonial3_date: "March 30, 2026",
    testimonial4_role: "Real Estate Agent",
    testimonial4_date: "February 8, 2025",

    contact_title: "Contact",
    contact_text: "Service: Online via WhatsApp",
    contact_btn: "Send Message",
    contact_close: "Close",

    skip_link: "Skip to content"
  }
};

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
  localStorage.setItem("siteLanguage", lang);

  document.querySelectorAll(".lang-switch button, .lang-switch-mobile button").forEach((button) => {
    button.classList.remove("active");
    if (button.textContent.trim().toLowerCase() === lang) {
      button.classList.add("active");
    }
  });

  updateProjectButtons(lang);
}

function updateProjectButtons(lang) {
  document.querySelectorAll(".project-item").forEach((item) => {
    const btn = item.querySelector("button[data-i18n]");
    if (!btn) return;

    const isActive = item.classList.contains("active");
    btn.textContent = isActive
      ? translations[lang].btn_see_less
      : translations[lang].btn_see_more;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("siteLanguage") || "pt";
  setLanguage(savedLanguage);

  document.querySelectorAll(".project-item button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".project-item");
      const isActive = item.classList.toggle("active");
      const currentLang = localStorage.getItem("siteLanguage") || "pt";

      btn.textContent = isActive
        ? translations[currentLang].btn_see_less
        : translations[currentLang].btn_see_more;

      btn.setAttribute("aria-expanded", isActive);
    });
  });
});