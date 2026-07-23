export interface Product {
  title: string;
  description: string;
  longDescription?: string[];
  icon: string;
  logoImage?: string;
  slug: string;
  features?: string[];
  /** Trailing part of the title shown in the product's own brand colour, e.g. "Neuron". */
  accentSuffix?: string;
}

export const products: Product[] = [
  {
    title: "HealthPilot.ai",
    description: "Scaling medical expertise through intelligent agents that guide clinical decision-making and care pathways.",
    icon: "🏥",
    logoImage: "/logos/health_pilot_logo.jpg",
    slug: "healthpilot",
    longDescription: [
      "HealthPilot.ai is an agentic AI system designed to augment the capabilities of healthcare professionals, enabling them to deliver more accurate diagnoses and effective treatment plans.",
      "Our intelligent agents analyze patient data, medical literature, and clinical guidelines to provide real-time insights and recommendations, helping physicians make better decisions at critical moments.",
      "By automating routine tasks and providing evidence-based suggestions, HealthPilot.ai allows healthcare providers to focus on what matters most: patient care and complex decision-making."
    ],
    features: [
      "Real-time clinical decision support",
      "Evidence-based recommendations",
      "Integration with EHR systems",
      "Multimodal analysis of patient data",
      "Continuous learning from outcomes"
    ]
  },
  {
    title: "MedNeuron",
    accentSuffix: "Neuron",
    description: "The patent-pending inference gate for clinical AI. It suppresses AI computation while a patient is on track, so cost scales with deviation rather than data volume.",
    icon: "🧠",
    logoImage: "/logos/medneuron-mark.svg",
    slug: "medneuron",
    longDescription: [
      "MedNeuron is a control layer, not another model. For every milestone of a patient's expected treatment trajectory it derives the minimal clinical signal set, the handful of data points actually needed to confirm the patient is on track, and uses that set as a gate on computation itself.",
      "While those signals confirm expected progress, the system suppresses model execution entirely and logs the confirmation. Only on a detected deviation does it escalate, selecting the least costly sufficient tier from deterministic rules up to a large model. Red-flag signals override everything for safety.",
      "Trajectories come from clinical guidelines where they exist. Where they do not, an intuitive editor lets the physician design the trajectory their patients usually follow, and the gate treats it exactly like a guideline-derived one. A resource-footprint ledger then itemizes what was avoided: model runs, lab tests, imaging, visits, and travel, converted into energy, cost, and carbon terms.",
      "Patent pending in India, application number 202641072734. MedNeuron is designed to drop in behind any EHR, CDS, or remote-monitoring stack, and is coming soon out of the box on HealthPilot.ai."
    ],
    features: [
      "Minimal clinical signal set derived per milestone",
      "Tiered inference gate, from rules to a large model",
      "Physician-designed trajectories where guidelines do not fit",
      "Resource-footprint ledger with energy, cost, and CO₂e",
      "Expected side effects tracked in-stream, not as new workups",
      "Natural-history comparison for shared decision-making",
      "Every suppression and escalation carries its basis",
      "REST API for any EHR, CDS, or remote-monitoring stack"
    ]
  },
  {
    title: "First Clinic",
    description: "Augmenting point of presence healthcare with HealthPilot technology and partnering with real estate owners to be part of the health care ecosystem to deliver smarter, more efficient care.",
    icon: "👨‍⚕️",
    logoImage: "/logos/first_clinic_logo.jpg",
    slug: "first-clinic",
    longDescription: [
      "First Clinic transforms traditional healthcare delivery by integrating HealthPilot technology at the point of care, creating an enhanced clinical experience for both providers and patients.",
      "Our solution equips clinics and hospitals with intelligent systems that streamline workflows, reduce administrative burden, and improve diagnostic accuracy.",
      "By partnering with real estate owners, we expand healthcare accessibility and create a comprehensive ecosystem that serves communities more effectively, ensuring quality care is available where it's needed most."
    ],
    features: [
      "Strategic real estate partnerships",
      "Intelligent triage and prioritization",
      "Automated documentation assistance",
      "Clinical protocol adherence monitoring",
      "Integrated patient follow-up systems",
      "Community-based healthcare solutions"
    ]
  },
  {
    title: "Chennai.Health",
    description: "Making Chennai the preferred healthcare destination for the world with cutting-edge AI and medical expertise.",
    icon: "🌍",
    logoImage: "/ChennaiHealthLogo.png",
    slug: "chennai-health",
    longDescription: [
      "Chennai.Health is an initiative to position Chennai as a global hub for advanced healthcare services, leveraging the city's medical expertise and BotCode's AI capabilities.",
      "Our platform connects international patients with Chennai's premier healthcare providers, facilitating seamless medical tourism experiences from initial consultation to follow-up care.",
      "By combining world-class medical facilities with cutting-edge AI technology, Chennai.Health is setting new standards for global healthcare delivery and patient experience."
    ],
    features: [
      "International patient coordination",
      "Multilingual support services",
      "Personalized care pathways",
      "Remote follow-up capabilities",
      "Healthcare provider network"
    ]
  },
  {
    title: "PScribe.in",
    description: "India’s prescription platform for doctors to write, manage, and share prescriptions with clinical notes and voice input.",
    icon: "📝",
    logoImage: "/PScribeLogo.png",
    slug: "pscribe",
    longDescription: [
      "PScribe.in is a modern prescription platform built for doctors across India.",
      "It helps clinicians create precision prescriptions, capture clinical notes (including via voice-to-text), and share verified prescriptions with patients.",
      "PScribe also supports structured diagnosis workflows, smart templates, and a patient portal so records stay accessible and organized."
    ],
    features: [
      "Voice-to-text dictation for clinical notes",
      "ICD-11 diagnosis code search",
      "Clinical notes, requests, and diagnosis capture",
      "Patient portal for record access",
      "Smart templates for reusable formats",
      "Secure, QR-verified prescriptions"
    ]
  },
  {
    title: "NeetClass",
    description: "AI-assisted NEET exam trainer with adaptive learning for UG and PG medical entrance preparation.",
    icon: "📚",
    logoImage: "/neetclass_favicon_512.png",
    slug: "neetclass",
    longDescription: [
      "NeetClass is an intelligent exam preparation platform designed for aspiring medical professionals preparing for NEET (National Eligibility cum Entrance Test) exams.",
      "Our AI-powered system provides personalized learning pathways for both undergraduate (UG) and postgraduate (PG) candidates, adapting to individual learning styles and knowledge gaps.",
      "With real-time performance analytics, AI tutoring, and curated exam-focused content, NeetClass helps students maximize their preparation efficiency and exam performance. Visit neetclass.com to learn more."
    ],
    features: [
      "AI-powered adaptive learning engine",
      "Personalized study pathways for UG and PG",
      "Real-time performance analytics and insights",
      "AI-assisted doubt resolution and tutoring",
      "Comprehensive question bank with explanations",
      "Mock tests with exam-like experience",
      "Progress tracking and recommendation engine"
    ]
  }
];
