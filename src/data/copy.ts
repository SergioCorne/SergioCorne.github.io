export const copy = {
  en: {
    title: "Sergio Cornejo · Platform Engineer",
    description:
      "Platform Engineer and Computer Engineering graduate. Cloud infrastructure, Kubernetes, Terraform, GitOps and production reliability. Based in Spain.",
    skip: "Skip to content",
    menu: "Menu",
    nav: ["About", "Stack", "Experience", "Projects", "Contact"],
    location: "Based in Spain",
    eyebrow: "CLOUD / KUBERNETES / AUTOMATION",
    headline: ["Infrastructure,", "with intention."],
    intro:
      "I’m Sergio Cornejo, Platform Engineer. I work on cloud infrastructure and production Kubernetes, with a focus on automation, reliability and understanding how systems behave.",
    cta: "Explore my work",
    contact: "Let’s connect",
    scroll: "A closer look",
    heroNote: "From a change in Git to a platform you can operate.",
    diagram: "Anatomy of a platform",
    illustration: "Illustrative architecture · select a layer",
    diagramHint: "Explore the layers",
    layers: [
      [
        "Declare",
        "Infrastructure as code makes changes explicit and repeatable. Terraform defines cloud resources; Ansible automates operational tasks.",
      ],
      [
        "Deliver",
        "GitOps connects versioned configuration to application delivery. Argo CD reconciles the desired state of the cluster.",
      ],
      [
        "Run",
        "Kubernetes orchestrates workloads. Operating it includes planning upgrades, diagnosing failures and verifying recovery.",
      ],
      [
        "Observe",
        "Prometheus, Grafana and CloudWatch help understand system behaviour. SLIs and SLOs connect signals to service reliability.",
      ],
    ],
    aboutLabel: "01 / THE ENGINEER",
    aboutTitle: "Understand it.\nThen improve it.",
    aboutText: [
      "I’m a Computer Engineering graduate working at the intersection of software and infrastructure. My work spans AWS, Azure and Google Cloud, with Kubernetes as a core part of my day-to-day.",
      "When something fails, I want to understand why. My software background helps me trace issues across application code and infrastructure, and work with developers on a fix.",
    ],
    principles: [
      [
        "Automate the repeatable",
        "Build reusable tooling for operational work.",
      ],
      [
        "Investigate the unexpected",
        "Follow the evidence and document the root cause.",
      ],
      [
        "Verify the recovery",
        "Check backups, plan upgrades and validate the result.",
      ],
    ],
    stackLabel: "02 / THE TOOLBOX",
    stackTitle: "A connected ecosystem.",
    stackIntro:
      "The tools I use, organised by their role in a platform. No proficiency scores. Just context.",
    expLabel: "03 / THE JOURNEY",
    expTitle: "Built through practice.",
    expIntro:
      "From software development to platform engineering and production operations.",
    current: "Current role",
    responsibilities: "Responsibilities",
    projectLabel: "04 / PERSONAL PROJECTS",
    projectTitle: "Building, testing, learning.",
    projectIntro:
      "Projects I develop with my team and practical lessons from my personal homelab.",
    caseLabel: "CASE STUDY / PERSONAL HOMELAB",
    caseTitle: "When a backup file\nbecomes a live manifest.",
    caseIntro:
      "An upgrade of a single-node bare-metal Kubernetes cluster stalled during the etcd update. The cause was hiding alongside the active manifests.",
    caseSteps: [
      [
        "01",
        "Prepare",
        "Planned downtime, kept backups off the server and tested snapshot and database restores.",
      ],
      [
        "02",
        "Investigate",
        "Found old .bak copies of static pod manifests being read by kubelet, causing conflicting definitions.",
      ],
      [
        "03",
        "Recover",
        "Moved the copies outside the manifests directory, restarted kubelet and completed the upgrade.",
      ],
      [
        "04",
        "Verify",
        "Checked application responses and compared PostgreSQL records and content before closing the maintenance.",
      ],
    ],
    readCase: "Read the original write-up",
    caseNote:
      "Personal infrastructure. No client systems or private configuration.",
    eduLabel: "05 / FOUNDATIONS",
    eduTitle: "Learning, applied.",
    degree: "Degree in Computer Engineering",
    university: "Universidad de Castilla-La Mancha",
    degreeDate: "Sep 2021 — Jun 2025",
    degreeText:
      "Final-year project: automating bare-metal Kubernetes cluster upgrades with Ansible, following documented Kubernetes procedures.",
    obtained: "Certification obtained",
    verify: "View credential",
    contactLabel: "06 / GET IN TOUCH",
    contactTitle: "Good engineering\nstarts with a conversation.",
    contactText:
      "Cloud platforms, Kubernetes operations or a technical challenge worth discussing. I’m glad to exchange ideas with engineers working on similar problems.",
    linkedin: "Connect on LinkedIn",
    github: "Explore GitHub",
    downloadCv: "Download CV (PDF)",
    footer: "Designed with intention. Built with Astro.",
    top: "Back to top",
    language: "ES · Cambiar a español",
    diagramLabels: [
      "Cloud resources",
      "Desired state",
      "Workloads",
      "Signals & feedback",
    ],
    errorTitle: "This route does not exist.",
    errorText: "Head back to the portfolio to explore the platform.",
    home: "Back to portfolio",
  },
  es: {
    title: "Sergio Cornejo · Platform Engineer",
    description:
      "Platform Engineer e Ingeniero Informático. Infraestructura cloud, Kubernetes, Terraform, GitOps y fiabilidad en producción. En España.",
    skip: "Saltar al contenido",
    menu: "Menú",
    nav: ["Sobre mí", "Stack", "Experiencia", "Proyectos", "Contacto"],
    location: "En España",
    eyebrow: "CLOUD / KUBERNETES / AUTOMATIZACIÓN",
    headline: ["Infraestructura,", "con criterio."],
    intro:
      "Soy Sergio Cornejo, Platform Engineer. Trabajo con infraestructura cloud y Kubernetes en producción, centrado en automatizar, mejorar la fiabilidad y entender cómo se comportan los sistemas.",
    cta: "Explorar mi trabajo",
    contact: "Hablemos",
    scroll: "Más de cerca",
    heroNote: "De un cambio en Git a una plataforma que puedes operar.",
    diagram: "Anatomía de una plataforma",
    illustration: "Arquitectura ilustrativa · selecciona una capa",
    diagramHint: "Explora las capas",
    layers: [
      [
        "Declarar",
        "La infraestructura como código hace los cambios explícitos y repetibles. Terraform define recursos cloud; Ansible automatiza tareas operativas.",
      ],
      [
        "Entregar",
        "GitOps conecta la configuración versionada con la entrega de aplicaciones. Argo CD reconcilia el estado deseado del clúster.",
      ],
      [
        "Ejecutar",
        "Kubernetes orquesta las cargas de trabajo. Operarlo implica planificar actualizaciones, diagnosticar fallos y verificar la recuperación.",
      ],
      [
        "Observar",
        "Prometheus, Grafana y CloudWatch permiten entender los sistemas. Los SLIs y SLOs conectan las señales con la fiabilidad del servicio.",
      ],
    ],
    aboutLabel: "01 / EL INGENIERO",
    aboutTitle: "Entenderlo.\nDespués, mejorarlo.",
    aboutText: [
      "Soy Ingeniero Informático y trabajo entre el software y la infraestructura. Mi experiencia abarca AWS, Azure y Google Cloud, con Kubernetes como parte central del día a día.",
      "Cuando algo falla, quiero entender por qué. Mi base en desarrollo me ayuda a seguir los problemas entre el código y la infraestructura, y a colaborar con los desarrolladores para resolverlos.",
    ],
    principles: [
      [
        "Automatizar lo repetible",
        "Crear herramientas reutilizables para el trabajo operativo.",
      ],
      [
        "Investigar lo inesperado",
        "Seguir las evidencias y documentar la causa raíz.",
      ],
      [
        "Verificar la recuperación",
        "Comprobar backups, planificar actualizaciones y validar el resultado.",
      ],
    ],
    stackLabel: "02 / LAS HERRAMIENTAS",
    stackTitle: "Un ecosistema conectado.",
    stackIntro:
      "Las herramientas con las que trabajo, organizadas por su papel en una plataforma. Con contexto, sin puntuaciones de dominio.",
    expLabel: "03 / EL RECORRIDO",
    expTitle: "Aprender haciendo.",
    expIntro:
      "Del desarrollo de software a la ingeniería de plataformas y las operaciones en producción.",
    current: "Puesto actual",
    responsibilities: "Responsabilidades",
    projectLabel: "04 / PROYECTOS PERSONALES",
    projectTitle: "Construir, probar, aprender.",
    projectIntro:
      "Proyectos que desarrollo en equipo y aprendizajes prácticos de mi homelab personal.",
    caseLabel: "CASO TÉCNICO / HOMELAB PERSONAL",
    caseTitle: "Cuando un backup\nse convierte en manifiesto activo.",
    caseIntro:
      "La actualización de un clúster Kubernetes bare metal de un solo nodo se bloqueó al actualizar etcd. La causa estaba junto a los manifiestos activos.",
    caseSteps: [
      [
        "01",
        "Preparar",
        "Planifiqué la parada, guardé backups fuera del servidor y probé restauraciones de snapshots y bases de datos.",
      ],
      [
        "02",
        "Investigar",
        "Encontré copias .bak de manifiestos de pods estáticos que kubelet también leía, creando definiciones contradictorias.",
      ],
      [
        "03",
        "Recuperar",
        "Moví las copias fuera del directorio de manifiestos, reinicié kubelet y completé la actualización.",
      ],
      [
        "04",
        "Verificar",
        "Comprobé las respuestas de las aplicaciones y comparé registros y contenido de PostgreSQL antes de cerrar el mantenimiento.",
      ],
    ],
    readCase: "Leer la publicación original",
    caseNote:
      "Infraestructura personal. Sin sistemas de clientes ni configuración privada.",
    eduLabel: "05 / LA BASE",
    eduTitle: "Formación que se aplica.",
    degree: "Grado en Ingeniería Informática",
    university: "Universidad de Castilla-La Mancha",
    degreeDate: "Sep 2021 — Jun 2025",
    degreeText:
      "Trabajo de fin de grado: automatización de actualizaciones de clústeres Kubernetes bare metal con Ansible, siguiendo los procedimientos documentados de Kubernetes.",
    obtained: "Certificación obtenida",
    verify: "Ver credencial",
    contactLabel: "06 / CONTACTO",
    contactTitle: "La buena ingeniería\nempieza con una conversación.",
    contactText:
      "Plataformas cloud, operación de Kubernetes o un reto técnico que merezca la pena comentar. Me gusta intercambiar ideas con profesionales que trabajan en problemas similares.",
    linkedin: "Conectar en LinkedIn",
    github: "Explorar GitHub",
    downloadCv: "Descargar CV (PDF)",
    footer: "Diseñado con criterio. Desarrollado con Astro.",
    top: "Volver arriba",
    language: "EN · Switch to English",
    diagramLabels: [
      "Recursos cloud",
      "Estado deseado",
      "Cargas de trabajo",
      "Señales y feedback",
    ],
    errorTitle: "Esta ruta no existe.",
    errorText: "Vuelve al portfolio para explorar la plataforma.",
    home: "Volver al portfolio",
  },
};
