// ===== i18n — Internationalization =====

const translations = {
  es: {
    // Nav
    "nav.about": "Resumen",
    "nav.expertise": "Expertise",
    "nav.experience": "Experiencia",
    "nav.certifications": "Certificaciones",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",

    // Hero
    "hero.subtitle": "Enterprise Architect · DevOps · Cloud · GenAI",
    "hero.tagline": "Transformando infraestructura en ventaja competitiva con IA",
    "hero.cta_contact": "Contacto",
    "hero.cta_experience": "Ver experiencia",

    // About
    "about.title": "Resumen Profesional",
    "about.text": 'Enterprise Architect y Technical Lead con <strong>más de 17 años de experiencia</strong> diseñando e implementando soluciones de infraestructura, automatización y arquitectura cloud a escala empresarial. Especializado en <span class="text-primary-500 font-semibold">DevOps</span>, <span class="text-primary-500 font-semibold">Cloud (AWS, Azure, GCP)</span> y <span class="text-accent-500 font-semibold">IA Generativa / MLOps</span>. Apasionado por la intersección entre operaciones, arquitectura y machine learning, con una trayectoria probada liderando equipos multidisciplinarios y transformaciones digitales.',

    // Expertise
    "expertise.title": "Áreas de Expertise",
    "expertise.devops_desc": "CI/CD, IaC, Containerización, GitOps, SRE",
    "expertise.cloud_desc": "AWS, Azure, GCP, Multi-cloud, Serverless",
    "expertise.arch_title": "Enterprise Architecture",
    "expertise.arch_desc": "TOGAF, Microservices, API Design, System Design",

    // Experience
    "experience.title": "Experiencia Profesional",
    "exp1.date": "2022 – Presente",
    "exp1.company": "Empresa de Tecnología",
    "exp1.b1": "Liderazgo de arquitectura cloud multi-account en AWS",
    "exp1.b2": "Diseño e implementación de pipelines CI/CD enterprise",
    "exp1.b3": "Adopción de GenAI y MLOps en flujos productivos",
    "exp1.b4": "Mentoría a equipos de DevOps y desarrollo",
    "exp2.company": "Consultoría Cloud",
    "exp2.b1": "Migración de cargas de trabajo on-premise a AWS y Azure",
    "exp2.b2": "Implementación de Infrastructure as Code con Terraform",
    "exp2.b3": "Orquestación de contenedores con Kubernetes y ECS",
    "exp2.b4": "Automatización de procesos con Ansible y CloudFormation",
    "exp3.company": "Empresa de Software",
    "exp3.b1": "Implementación de pipelines CI/CD con Jenkins y GitLab",
    "exp3.b2": "Containerización de aplicaciones con Docker",
    "exp3.b3": "Monitoreo y observabilidad con ELK Stack y Prometheus",
    "exp3.b4": "Gestión de configuración con Chef y Puppet",
    "exp4.title": "Systems Administrator / Infrastructure Engineer",
    "exp4.company": "Sector Empresarial",
    "exp4.b1": "Administración de servidores Linux y Windows",
    "exp4.b2": "Virtualización con VMware y KVM",
    "exp4.b3": "Networking, firewalls y seguridad perimetral",
    "exp4.b4": "Scripting con Bash y Python para automatización",

    // AI/ML
    "aiml.title": "AI & Machine Learning Journey",
    "aiml.subtitle": "Transición natural desde DevOps/Cloud hacia MLOps e IA Generativa",
    "aiml.cert_title": "Certificación AWS ML",
    "aiml.cert_desc": "AWS Certified Machine Learning – Specialty. Validación de conocimientos en ML pipelines, feature engineering y deployment.",
    "aiml.mlops_desc": "Programa de aprendizaje estructurado (12 semanas) para la transición DevOps → MLOps. Cubriendo pipelines de datos, model serving y monitoring.",
    "aiml.rag_desc": "Desarrollo de pipelines de ingesta vectorial con LangChain, Qdrant y Ollama. Chatbot con Retrieval-Augmented Generation.",
    "aiml.llm_desc": "Herramientas CLI con LangGraph + Ollama para generación automatizada de commits con IA.",
    "aiml.applied_title": "ML Aplicado",
    "aiml.applied_desc": "Predicción de propiedades moleculares con Graph Convolutional Networks usando PyTorch y DGL.",

    // Skills
    "skills.title": "Habilidades Técnicas",
    "skills.lang_title": "Lenguajes & Herramientas",

    // Certifications
    "certs.title": "Certificaciones",

    // Projects
    "projects.title": "Proyectos Destacados",
    "proj.selva_desc": "Pipeline RAG con LangChain + Qdrant + Ollama. Ingesta vectorial de documentos y chatbot conversacional.",
    "proj.commiter_desc": "Generador de mensajes de commit con IA usando LangGraph + Ollama. Herramienta CLI en Python.",
    "proj.mol_title": "Predicción de Solubilidad Molecular",
    "proj.mol_desc": "ML con Graph Convolutional Networks para predecir propiedades de moléculas usando PyTorch/DGL.",
    "proj.mlops_desc": "Syllabus completo de 12 semanas para transición DevOps → MLOps. Pipelines, model serving, monitoring.",
    "proj.pyhtml_desc": "Herramienta Python open-source para empaquetar HTML con assets en base64 como archivo standalone.",
    "proj.hackathon_desc": "Proyecto de hackathon DevOps demostrando mejores prácticas de CI/CD, containerización y automatización.",

    // Education
    "edu.title": "Educación",
    "edu.degree": "Ingeniería en Sistemas Computacionales",

    // Contact
    "contact.title": "Contacto",
    "contact.text": "¿Interesado en colaborar? ¡Hablemos!",

    // Footer
    "footer.text": "&copy; 2026 Victor Cabello. Hecho con Tailwind CSS."
  },

  en: {
    // Nav
    "nav.about": "Summary",
    "nav.expertise": "Expertise",
    "nav.experience": "Experience",
    "nav.certifications": "Certifications",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero
    "hero.subtitle": "Enterprise Architect · DevOps · Cloud · GenAI",
    "hero.tagline": "Turning infrastructure into competitive advantage with AI",
    "hero.cta_contact": "Contact",
    "hero.cta_experience": "View experience",

    // About
    "about.title": "Professional Summary",
    "about.text": 'Enterprise Architect and Technical Lead with <strong>17+ years of experience</strong> designing and implementing infrastructure, automation, and cloud architecture solutions at enterprise scale. Specialized in <span class="text-primary-500 font-semibold">DevOps</span>, <span class="text-primary-500 font-semibold">Cloud (AWS, Azure, GCP)</span> and <span class="text-accent-500 font-semibold">Generative AI / MLOps</span>. Passionate about the intersection of operations, architecture, and machine learning, with a proven track record leading cross-functional teams and digital transformations.',

    // Expertise
    "expertise.title": "Areas of Expertise",
    "expertise.devops_desc": "CI/CD, IaC, Containerization, GitOps, SRE",
    "expertise.cloud_desc": "AWS, Azure, GCP, Multi-cloud, Serverless",
    "expertise.arch_title": "Enterprise Architecture",
    "expertise.arch_desc": "TOGAF, Microservices, API Design, System Design",

    // Experience
    "experience.title": "Professional Experience",
    "exp1.date": "2022 – Present",
    "exp1.company": "Technology Company",
    "exp1.b1": "Led multi-account cloud architecture on AWS",
    "exp1.b2": "Designed and implemented enterprise CI/CD pipelines",
    "exp1.b3": "Drove GenAI and MLOps adoption in production workflows",
    "exp1.b4": "Mentored DevOps and development teams",
    "exp2.company": "Cloud Consulting",
    "exp2.b1": "Migrated on-premise workloads to AWS and Azure",
    "exp2.b2": "Implemented Infrastructure as Code with Terraform",
    "exp2.b3": "Orchestrated containers with Kubernetes and ECS",
    "exp2.b4": "Automated processes with Ansible and CloudFormation",
    "exp3.company": "Software Company",
    "exp3.b1": "Implemented CI/CD pipelines with Jenkins and GitLab",
    "exp3.b2": "Containerized applications with Docker",
    "exp3.b3": "Set up monitoring and observability with ELK Stack and Prometheus",
    "exp3.b4": "Managed configuration with Chef and Puppet",
    "exp4.title": "Systems Administrator / Infrastructure Engineer",
    "exp4.company": "Enterprise Sector",
    "exp4.b1": "Administered Linux and Windows servers",
    "exp4.b2": "Virtualization with VMware and KVM",
    "exp4.b3": "Networking, firewalls, and perimeter security",
    "exp4.b4": "Scripting with Bash and Python for automation",

    // AI/ML
    "aiml.title": "AI & Machine Learning Journey",
    "aiml.subtitle": "A natural transition from DevOps/Cloud into MLOps and Generative AI",
    "aiml.cert_title": "AWS ML Certification",
    "aiml.cert_desc": "AWS Certified Machine Learning – Specialty. Validated expertise in ML pipelines, feature engineering, and deployment.",
    "aiml.mlops_desc": "Structured 12-week learning program for the DevOps → MLOps transition. Covering data pipelines, model serving, and monitoring.",
    "aiml.rag_desc": "Built vector ingestion pipelines with LangChain, Qdrant, and Ollama. Conversational chatbot with Retrieval-Augmented Generation.",
    "aiml.llm_desc": "CLI tools built with LangGraph + Ollama for AI-powered automated commit message generation.",
    "aiml.applied_title": "Applied ML",
    "aiml.applied_desc": "Molecular property prediction with Graph Convolutional Networks using PyTorch and DGL.",

    // Skills
    "skills.title": "Technical Skills",
    "skills.lang_title": "Languages & Tools",

    // Certifications
    "certs.title": "Certifications",

    // Projects
    "projects.title": "Featured Projects",
    "proj.selva_desc": "RAG pipeline with LangChain + Qdrant + Ollama. Vector document ingestion and conversational chatbot.",
    "proj.commiter_desc": "AI-powered commit message generator using LangGraph + Ollama. Python CLI tool.",
    "proj.mol_title": "Molecular Solubility Prediction",
    "proj.mol_desc": "ML with Graph Convolutional Networks to predict molecular properties using PyTorch/DGL.",
    "proj.mlops_desc": "Complete 12-week syllabus for DevOps → MLOps transition. Pipelines, model serving, monitoring.",
    "proj.pyhtml_desc": "Open-source Python tool to bundle HTML with base64-encoded assets into a standalone file.",
    "proj.hackathon_desc": "DevOps hackathon project showcasing CI/CD best practices, containerization, and automation.",

    // Education
    "edu.title": "Education",
    "edu.degree": "B.S. in Computer Systems Engineering",

    // Contact
    "contact.title": "Contact",
    "contact.text": "Interested in collaborating? Let's talk!",

    // Footer
    "footer.text": "&copy; 2026 Victor Cabello. Built with Tailwind CSS."
  }
};

// Detect language: localStorage > navigator.language > fallback to 'en'
function detectLanguage() {
  const saved = localStorage.getItem('lang');
  if (saved === 'es' || saved === 'en') return saved;

  const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
  if (browserLang.startsWith('es')) return 'es';
  return 'en';
}

// Apply translations to all [data-i18n] elements
function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = dict[key];
      } else {
        el.innerHTML = dict[key];
      }
    }
  });

  // Update toggle button styles
  var btnEs = document.getElementById('lang-es');
  var btnEn = document.getElementById('lang-en');
  if (btnEs && btnEn) {
    if (lang === 'es') {
      btnEs.className = 'px-2.5 py-1.5 transition-colors bg-primary-500 text-white';
      btnEn.className = 'px-2.5 py-1.5 transition-colors text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700';
    } else {
      btnEn.className = 'px-2.5 py-1.5 transition-colors bg-primary-500 text-white';
      btnEs.className = 'px-2.5 py-1.5 transition-colors text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700';
    }
  }
}

// Apply language as early as possible to prevent flash
(function() {
  var lang = detectLanguage();
  // Set html lang immediately
  document.documentElement.lang = lang;
  // Apply translations once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      applyLanguage(lang);
      bindToggle();
    });
  } else {
    applyLanguage(lang);
    bindToggle();
  }
})();

function bindToggle() {
  var btnEs = document.getElementById('lang-es');
  var btnEn = document.getElementById('lang-en');
  if (btnEs) btnEs.addEventListener('click', function() { applyLanguage('es'); });
  if (btnEn) btnEn.addEventListener('click', function() { applyLanguage('en'); });
}
