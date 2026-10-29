export type Locale = "en" | "es";
export type Localized = Record<Locale, string>;
export const profile = {
  name: "Sergio Cornejo",
  role: "Platform Engineer",
  linkedin: "https://www.linkedin.com/in/sergio-cornejo-045131277/",
  github: "https://github.com/SergioCorne",
  site: "https://sergiocorne.github.io",
  email: "sergiocp0708@gmail.com",
  cv: "/CV_Sergio_Cornejo.pdf",
};
export const experience = [
  {
    company: "AstroKube",
    role: { en: "Platform Engineer", es: "Platform Engineer" },
    start: "2025-08",
    end: null,
    period: { en: "Aug 2025 — Present", es: "Ago 2025 — Actualidad" },
    intro: {
      en: "Cloud infrastructure, production Kubernetes and reusable platform automation.",
      es: "Infraestructura cloud, Kubernetes en producción y automatización reutilizable de plataformas.",
    },
    bullets: {
      en: [
        "Plan and carry out platform upgrades across production, non-production and disaster recovery environments, with runbooks and backup verification.",
        "Build reusable Terraform modules and operational workflows across AWS, Azure and Google Cloud.",
        "Investigate incidents with developers, document root causes and configure monitoring with Prometheus, Grafana and CloudWatch.",
        "Work with SLIs and SLOs, SSO integrations, credential rotation and infrastructure security reviews.",
      ],
      es: [
        "Planificar y ejecutar actualizaciones en producción, entornos no productivos y recuperación ante desastres, con procedimientos y verificación de backups.",
        "Crear módulos reutilizables de Terraform y flujos operativos en AWS, Azure y Google Cloud.",
        "Investigar incidencias con desarrollo, documentar causas raíz y configurar monitorización con Prometheus, Grafana y CloudWatch.",
        "Trabajar con SLIs y SLOs, integraciones SSO, rotación de credenciales y revisiones de seguridad de infraestructura.",
      ],
    },
    tags: [
      "Kubernetes",
      "Terraform",
      "AWS · Azure · GCP",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    company: "NTT DATA",
    role: { en: "Platform Engineer", es: "Platform Engineer" },
    start: "2025-02",
    end: "2025-07",
    period: { en: "Feb — Jul 2025", es: "Feb — Jul 2025" },
    intro: {
      en: "Bare-metal Kubernetes and tooling for infrastructure operations in the Automation department.",
      es: "Kubernetes bare metal y herramientas para operaciones de infraestructura en el departamento de Automatización.",
    },
    bullets: {
      en: [
        "Developed an Ansible playbook for automated Kubernetes upgrades as my final-year degree project.",
        "Automated cluster deployment and cleanup on bare-metal machines.",
        "Supported incident troubleshooting, integrated Argo CD for continuous delivery and developed Python documentation tooling.",
      ],
      es: [
        "Desarrollé un playbook de Ansible para automatizar actualizaciones de Kubernetes como trabajo de fin de grado.",
        "Automaticé el despliegue y la limpieza de clústeres en máquinas bare metal.",
        "Colaboré en la resolución de incidencias, integré Argo CD para entrega continua y desarrollé herramientas de documentación en Python.",
      ],
    },
    tags: ["Kubernetes", "Ansible", "Argo CD", "Python"],
  },
  {
    company: "Tecnobit · Grupo Oesía",
    role: {
      en: "Software Developer · Internship",
      es: "Desarrollador de software · Prácticas",
    },
    start: "2024-06",
    end: "2024-08",
    period: { en: "Jun — Aug 2024", es: "Jun — Ago 2024" },
    intro: {
      en: "Reusable software and hardware control in the Space department.",
      es: "Software reutilizable y control de hardware en el departamento de Espacio.",
    },
    bullets: {
      en: [
        "Developed Python and C libraries for hardware control and interaction with software components.",
        "Installed, configured and updated software on multiple machines and maintained technical documentation.",
      ],
      es: [
        "Desarrollé bibliotecas de Python y C para controlar hardware e interactuar con componentes software.",
        "Instalé, configuré y actualicé software en varios equipos, manteniendo la documentación técnica.",
      ],
    },
    tags: ["Python", "C", "Technical documentation"],
  },
];
export const stack = [
  {
    id: "cloud",
    name: { en: "Cloud foundations", es: "Base cloud" },
    context: {
      en: "Infrastructure across providers, with operational consistency.",
      es: "Infraestructura entre proveedores con coherencia operativa.",
    },
    tools: ["AWS", "Microsoft Azure", "Google Cloud"],
    mark: "01",
  },
  {
    id: "runtime",
    name: {
      en: "Containers & orchestration",
      es: "Contenedores y orquestación",
    },
    context: {
      en: "Production operation, maintenance and cluster upgrades.",
      es: "Operación en producción, mantenimiento y actualización de clústeres.",
    },
    tools: ["Kubernetes"],
    mark: "02",
  },
  {
    id: "automation",
    name: { en: "Infrastructure as code", es: "Infraestructura como código" },
    context: {
      en: "Reusable modules and automation for repeatable operations.",
      es: "Módulos reutilizables y automatización para operaciones repetibles.",
    },
    tools: ["Terraform", "Ansible"],
    mark: "03",
  },
  {
    id: "delivery",
    name: { en: "Continuous delivery", es: "Entrega continua" },
    context: {
      en: "Declarative application delivery with GitOps.",
      es: "Entrega declarativa de aplicaciones mediante GitOps.",
    },
    tools: ["Argo CD", "GitOps", "CI/CD"],
    mark: "04",
  },
  {
    id: "observe",
    name: {
      en: "Observability & reliability",
      es: "Observabilidad y fiabilidad",
    },
    context: {
      en: "Monitoring, alerting and service reliability with SLIs and SLOs.",
      es: "Monitorización, alertas y fiabilidad de servicios con SLIs y SLOs.",
    },
    tools: ["Prometheus", "Grafana", "CloudWatch"],
    mark: "05",
  },
  {
    id: "code",
    name: { en: "Programming & tooling", es: "Programación y herramientas" },
    context: {
      en: "Operational tools, integrations and reusable libraries.",
      es: "Herramientas operativas, integraciones y bibliotecas reutilizables.",
    },
    tools: ["Python", "Go", "Bash", "C"],
    mark: "06",
  },
];
export const certification = {
  name: "Microsoft Certified: Azure Fundamentals",
  issuer: "Microsoft",
  date: { en: "December 2025", es: "Diciembre de 2025" },
  url: "https://learn.microsoft.com/api/credentials/share/en-us/SergioCornejo-6331/4751AE89B3F46EAB?sharingId",
};
export const project = {
  url: "https://www.linkedin.com/feed/update/urn:li:activity:7521250332312649728/",
  tags: ["Kubernetes", "kubeadm", "etcd", "PostgreSQL"],
};

export const personalProjects = [
  {
    name: "Combat Lab",
    url: "https://combat-lab.woas-team.team/",
    team: "WoAS",
    teamUrl: "https://woas.es/",
    status: { en: "In development", es: "En desarrollo" },
    description: {
      en: "A platform for contact-sport courses and structured physical preparation, which I am developing with my teammates at WoAS.",
      es: "Una plataforma de cursos y preparación física estructurada para deportes de contacto que estoy desarrollando junto a mis compañeros de WoAS.",
    },
    facts: [
      {
        title: { en: "The goal", es: "El objetivo" },
        text: {
          en: "Bring training planning and athlete progress into a shared platform for gyms, coaches and athletes.",
          es: "Reunir la planificación del entrenamiento y el seguimiento de atletas en una plataforma compartida para gimnasios, entrenadores y deportistas.",
        },
      },
      {
        title: { en: "The platform", es: "La plataforma" },
        text: {
          en: "The public preview presents structured training camps, sessions and monitoring of training load and perceived effort.",
          es: "La preview pública presenta campamentos estructurados, sesiones y seguimiento de la carga de entrenamiento y del esfuerzo percibido.",
        },
      },
      {
        title: { en: "My involvement", es: "Mi participación" },
        text: {
          en: "I am working on the project as part of the WoAS team. Development is ongoing; the preview may change as the product evolves.",
          es: "Participo en el desarrollo como parte del equipo WoAS. El proyecto sigue en construcción y la preview puede cambiar a medida que evoluciona el producto.",
        },
      },
    ],
  },
];
