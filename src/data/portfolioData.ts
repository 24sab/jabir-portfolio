export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  category: 'Trading' | 'Bakery' | 'Manufacturing' | 'Institutional' | 'Dairy';
  summary?: string;
  subRoles?: {
    title: string;
    period: string;
    points: string[];
  }[];
  responsibilities: string[];
  achievements?: string[];
  keyTags: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer?: string;
  scope: string;
  badge: string;
  highlight?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  year: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  description: string;
  skills: string[];
}

export const portfolioData = {
  personal: {
    name: "Jabir PK",
    primaryTitle: "Food Technologist & Hygiene Officer",
    subTitles: [
      "Quality Controller",
      "HSE / QHSE Officer",
      "Hygiene Officer",
      "Food Safety Auditor"
    ],
    experienceSummary: "8+ Years Experience in Food Manufacturing, Trading & Institutional Compliance",
    location: "Dubai, United Arab Emirates",
    phone: "+971 56 936 5700",
    email: "jabirpk111@gmail.com",
    linkedin: "https://www.linkedin.com/in/jabirpk",
    linkedinDisplay: "linkedin.com/in/jabirpk",
    nationality: "Indian",
    visaStatus: "Employment Visa",
    resumePdfUrl: "/Jabir_PK_Resume.pdf",
    heroImage: "/jabir-photo.png",
    
    summary: "Dynamic and adaptable Quality, Hygiene, and HSE professional with over 8 years of experience across food manufacturing, trading, and institutional environments in the UAE. Skilled in HACCP, ISO 22000, and FSSC 22000 documentation and auditing, incident investigation and root cause analysis, and staff training on food safety and workplace safety standards. Proven record of achieving high audit scores, leading continuous improvement initiatives, and maintaining regulatory compliance.",
    
    aboutNarrative: [
      "Jabir PK is an experienced Quality, Hygiene, and HSE professional dedicated to ensuring uncompromising food safety, process integrity, and international regulatory compliance across the food supply chain.",
      "With specialized postgraduate training in Food Science & Technology and Biotechnology, combined with over eight years of hands-on operational leadership in Dubai, UAE, Jabir bridges scientific principles with rigorous day-to-day industrial practice.",
      "His technical scope spans from establishing FSSC 22000 and ISO 22000 management systems and commanding client/external audits, to active floor-level GMP tours, CCP validation, Modified Atmosphere Packaging (MAP) testing, microbial sampling, and warehouse FIFO/FEFO governance."
    ]
  },

  metrics: [
    { label: "Industry Experience", value: "8+ Years", detail: "Food manufacturing, trading & institutions in UAE" },
    { label: "Core Standards", value: "FSSC / ISO", detail: "FSSC 22000, ISO 22000:2018 & HACCP" },
    { label: "Professional Credentials", value: "5 Certified", detail: "NEBOSH, Highfield L4, HACCP L3, PIC Advanced" },
    { label: "Academic Qualifications", value: "M.Sc. & B.Sc.", detail: "Food Science & Tech / Biotechnology" }
  ],

  standards: [
    { name: "FSSC 22000", desc: "Food Safety System Certification Documentation & Internal Auditing" },
    { name: "ISO 22000:2018", desc: "Food Safety Management Systems (FSMS) Implementation" },
    { name: "HACCP Level 3", desc: "Hazard Analysis Critical Control Points in Food Manufacturing" },
    { name: "GMP & Hygiene", desc: "Good Manufacturing Practices, Daily Tours & CCP Verification" },
    { name: "HALAL & DM", desc: "Dubai Municipality Regulatory Compliance & Halal Manuals" },
    { name: "NEBOSH IGC", desc: "Occupational Health & Safety International Standards" },
    { name: "FIFO / FEFO", desc: "Warehouse Material Management & Cold Chain Dispatch Control" }
  ],

  experiences: [
    {
      id: "farzana",
      role: "HSE Officer",
      company: "Farzana Trading LLC",
      location: "Dubai, UAE",
      period: "Oct 2024 – Present",
      isCurrent: true,
      category: "Trading",
      summary: "Leading health, safety, environmental, and food safety compliance for one of the UAE's premier fresh produce and food trading organizations.",
      keyTags: ["FSSC 22000", "ISO 22000", "External Audits", "Supplier Vetting", "FIFO/FEFO", "Staff Training"],
      responsibilities: [
        "Develop, maintain, and update documentation for FSSC 22000 and ISO 22000 certification, ensuring alignment with international food safety standards.",
        "Coordinate and lead external and client audits, consistently achieving high audit scores through meticulous preparation and systematic compliance.",
        "Oversee daily cleaning and sanitation operations to ensure adherence to hygiene protocols and regulatory requirements.",
        "Participate in supplier vetting processes to ensure quality and compliance with company standards.",
        "Conduct daily inspections of warehouse facilities, enforcing FIFO/FEFO principles to maintain product quality and minimize waste.",
        "Design and deliver staff training programs on hygiene, safety protocols, and food handling best practices, including fire safety, emergency evacuation, PPE usage, and incident reporting.",
        "Lead incident investigations, conduct root cause analysis for safety incidents, and implement preventive measures to enhance workplace safety culture.",
        "Implement corrective actions based on audit findings, inspection reports, and compliance reviews."
      ],
      achievements: [
        "Consistently achieving high audit scores during external and client food safety audits through systematic compliance.",
        "Maintained robust FSSC 22000 and ISO 22000 certification documentation frameworks.",
        "Enhanced workplace safety culture through comprehensive root cause analysis and proactive incident prevention."
      ]
    },
    {
      id: "yaumi",
      role: "Quality Control Inspector",
      company: "Yaumi International Bakery",
      location: "Dubai, UAE",
      period: "Jan 2024 – Aug 2024",
      category: "Bakery",
      summary: "Executed rigorous industrial quality assurance, laboratory sampling, and HACCP compliance in a large-scale commercial bakery production plant.",
      keyTags: ["GMP Tours", "Microbial Testing", "CCP Verification", "Mock Recalls", "Traceability", "Cold Chain"],
      responsibilities: [
        "Approved or rejected raw materials, packaging materials, labeling, and finished goods against strict quality specifications.",
        "Maintained documentation for ISO and HACCP systems.",
        "Reviewed production records for traceability and mock recall accuracy and completeness.",
        "Conducted daily GMP tours and reported findings to relevant departments; verified CCPs and raised non-conformity reports.",
        "Determined root causes of quality issues and advised on prevention and recurrence control.",
        "Carried out monthly safety inspections per QHSE policy and reported deviations.",
        "Monitored process flow to ensure established standards were consistently met.",
        "Collected samples for monthly microbial testing (water, air, finished goods, food/non-food contact surfaces, and hand swabs).",
        "Inspected product loading at the dispatch area for vehicle condition, cleanliness, and product temperature.",
        "Submitted monthly reports to the Quality Manager covering non-conformance, laboratory analysis, and material receiving/loading."
      ]
    },
    {
      id: "hassani",
      role: "Quality Controller cum Production In-Charge",
      company: "Hassani Group of Companies",
      location: "Dubai, UAE",
      period: "Dec 2020 – Jan 2023",
      category: "Manufacturing",
      summary: "Dual operational and quality leadership role overseeing manufacturing line efficiency, packaging integrity, and multi-standard audit compliance.",
      keyTags: ["MAP Packaging", "Sensory Tests", "ISO 22000:2018", "HALAL & DM Audits", "Production Planning", "Shelf-Life"],
      responsibilities: [],
      subRoles: [
        {
          title: "Production In-Charge",
          period: "Jan 2022 – Jan 2023",
          points: [
            "Participated in production planning, ensuring coordination of materials and resources with the production plan.",
            "Prepared and maintained daily, weekly, and monthly production reports for the General Manager.",
            "Ensured production targets were consistently met by optimizing machine speed and efficiency.",
            "Coordinated with external laboratories, pest control services, water tank services, and calibration teams.",
            "Generated maintenance requests and followed up to resolution."
          ]
        },
        {
          title: "Quality Controller",
          period: "Dec 2020 – Jan 2022",
          points: [
            "Conducted physical and chemical tests; evaluated Modified Atmosphere Packaging (MAP), vacuum packaging, and sensory tests.",
            "Inspected and received raw materials and packaging materials.",
            "Monitored production and expiry dates and quality of raw, packing, and finished materials throughout production.",
            "Compiled, reviewed, and approved product nutritional information, specifications, and labeling.",
            "Ensured worker hygiene and implementation of hygienic practices on the production floor.",
            "Maintained documentation for ISO 22000:2018, HACCP, and HALAL manuals; supported HACCP, ISO 22000, and HALAL & DM audits.",
            "Tracked shelf-life reference samples through to expiry."
          ]
        }
      ]
    },
    {
      id: "straightpath",
      role: "QHSE Officer",
      company: "Straightpath International School",
      location: "Dubai, UAE",
      period: "Jun 2019 – Oct 2020",
      category: "Institutional",
      summary: "Ensured high standard occupational health, safety, hygiene, and environmental policies across institutional school operations.",
      keyTags: ["QHSE Policies", "Institutional Safety", "Environmental Protocols", "Dubai Compliance"],
      responsibilities: [
        "Supported implementation of quality, health, safety, and environmental (QHSE) policies and procedures across school operations.",
        "Monitored facility-wide hygiene, campus sanitation, and safety standards in accordance with UAE regulatory guidelines."
      ]
    },
    {
      id: "lazza",
      role: "Hygiene Officer",
      company: "Lazza Ice Cream, Cream Packs Pvt. Ltd",
      location: "India / Manufacturing",
      period: "Sep 2016 – Nov 2018",
      category: "Dairy",
      summary: "Managed production hygiene and food safety standards for a major commercial dairy and ice cream manufacturing company.",
      keyTags: ["Dairy Hygiene", "Food Safety Compliance", "Sanitation Protocols", "Production Operations"],
      responsibilities: [
        "Monitored hygiene and food safety compliance within production operations.",
        "Ensured rigorous sanitation of ice cream processing equipment, cold storage integrity, and compliance with personal hygiene standards for production line personnel."
      ]
    }
  ] as ExperienceItem[],

  certifications: [
    {
      id: "nebosh",
      title: "NEBOSH IGC",
      scope: "International General Certificate in Occupational Health and Safety",
      issuer: "NEBOSH (National Examination Board in Occupational Safety and Health)",
      badge: "HSE International Benchmark",
      highlight: true
    },
    {
      id: "highfield",
      title: "Highfield Level 4 Award in Food Safety Management",
      scope: "Advanced Food Safety Management Systems, Hazard Analysis & Verification",
      issuer: "Highfield Qualifications",
      badge: "Level 4 Management",
      highlight: true
    },
    {
      id: "haccp",
      title: "HACCP Level 3 Certified in Food Manufacturing",
      scope: "Hazard Analysis & Critical Control Points in Industrial Food Manufacturing",
      issuer: "Food Safety Certification Body",
      badge: "Level 3 Manufacturing",
      highlight: true
    },
    {
      id: "fssc",
      title: "FSSC 22000 Internal Auditor",
      scope: "Auditing of Food Safety Management Systems, PRPs & ISO/TS 22002-1",
      issuer: "FSSC 22000 Auditing Body",
      badge: "Internal Auditor",
      highlight: true
    },
    {
      id: "pic",
      title: "Person in Charge (PIC) Advanced — Dubai",
      scope: "Dubai Municipality Mandatory High-Risk Food Establishment Certification",
      issuer: "Dubai Municipality / Awarding Body",
      badge: "Dubai Municipality Approved",
      highlight: true
    }
  ] as CertificationItem[],

  education: [
    {
      id: "msc",
      degree: "M.Sc. Food Science and Technology",
      field: "Advanced Food Processing, Chemistry, Microbiology, Food Quality & Preservation",
      institution: "University of Calicut",
      year: "2016",
      description: "Master's degree focused on food chemistry, industrial food preservation, industrial microbiology, food engineering, quality evaluation, and technological innovations in food processing."
    },
    {
      id: "bsc",
      degree: "B.Sc. Biotechnology",
      field: "Biochemistry, Molecular Biology, Microbiology & Analytical Techniques",
      institution: "University of Calicut",
      year: "2014",
      description: "Foundational science degree providing rigorous laboratory competence in microbiology, biochemical analysis, sterilization protocols, and cellular biology essential for modern food safety diagnostics."
    }
  ] as EducationItem[],

  skillCategories: [
    {
      category: "Food Safety & Quality Management",
      icon: "ShieldCheck",
      description: "Comprehensive management systems ensuring zero contamination and total product integrity.",
      skills: [
        "HACCP System Implementation",
        "ISO 22000:2018 Standards",
        "FSSC 22000 Documentation & Compliance",
        "Good Manufacturing Practices (GMP)",
        "HALAL & Dubai Municipality (DM) Manuals",
        "CCP Verification & Critical Limits Monitoring"
      ]
    },
    {
      category: "Auditing & Compliance",
      icon: "FileCheck2",
      description: "Leading internal and external audit regimes with meticulous documentation and systematic adherence.",
      skills: [
        "External & Client Audit Leadership",
        "FSSC 22000 Internal Auditing",
        "Audit Management & Root Cause Analysis",
        "Non-Conformity Reporting (NCR)",
        "Corrective & Preventive Action (CAPA)",
        "Traceability & Mock Recall Verification"
      ]
    },
    {
      category: "Quality Control & Laboratory Testing",
      icon: "FlaskConical",
      description: "Hands-on analytical validation of incoming ingredients, packaging, and finished goods.",
      skills: [
        "Microbial Sampling (Air, Water, Surfaces, Hand Swabs)",
        "Physical & Chemical Testing",
        "Modified Atmosphere Packaging (MAP) Evaluation",
        "Vacuum Packaging & Leak Testing",
        "Sensory & Organoleptic Testing",
        "Nutritional Info, Labeling & Specification Approval",
        "Shelf-Life Reference Sample Tracking"
      ]
    },
    {
      category: "HSE / QHSE & Occupational Safety",
      icon: "HardHat",
      description: "Fostering an incident-free working environment through structured risk mitigation.",
      skills: [
        "HSE / QHSE Policy Implementation",
        "Incident Investigation & Root Cause Analysis",
        "Monthly Safety Inspections & Hazard Reporting",
        "Fire Safety & Emergency Evacuation Protocols",
        "Personal Protective Equipment (PPE) Compliance",
        "Safety Culture Development"
      ]
    },
    {
      category: "Operations & Supply Chain",
      icon: "Boxes",
      description: "Bridging quality assurance with warehouse integrity and production targets.",
      skills: [
        "Warehouse FIFO / FEFO Principles",
        "Supplier Vetting & Vendor Quality Assurance",
        "Cold Chain & Dispatch Temperature Verification",
        "Production Planning & Target Optimization",
        "Pest Control, Tank Cleaning & Calibration Oversight",
        "Maintenance Coordination"
      ]
    },
    {
      category: "Training & Professional Leadership",
      icon: "Users",
      description: "Equipping floor personnel and supervisors with vital hygiene and compliance habits.",
      skills: [
        "Hygiene & Food Handling Staff Training",
        "Worker Personal Hygiene Monitoring",
        "Production & Quality Reporting (Daily, Weekly, Monthly)",
        "Cross-Departmental Coordination",
        "Microsoft Office (Word, Excel) Reporting",
        "Communication & Systematic Problem-Solving"
      ]
    }
  ] as SkillCategory[],

  auditMethodology: [
    {
      step: "01",
      title: "Meticulous Documentation & Standards Alignment",
      detail: "Formulating and maintaining comprehensive manuals, SOPs, and record templates compliant with FSSC 22000, ISO 22000:2018, and HACCP."
    },
    {
      step: "02",
      title: "Daily GMP Tours & Process Verification",
      detail: "Conducting active shopfloor inspections, checking hand hygiene, personal grooming, sanitation logs, and validating Critical Control Points (CCPs)."
    },
    {
      step: "03",
      title: "Traceability & Mock Recalls",
      detail: "Rigorous testing of backwards and forwards traceability across batch records, raw ingredients, packaging lots, and dispatch manifests to ensure 100% recall readiness."
    },
    {
      step: "04",
      title: "Scientific Root Cause Analysis (RCA)",
      detail: "Systematic investigation of non-conformities using root-cause techniques, establishing robust CAPAs that eliminate repeat deviations."
    }
  ]
};
