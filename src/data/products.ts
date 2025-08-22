export interface Product {
  title: string;
  description: string;
  longDescription?: string[];
  icon: string;
  logoImage?: string;
  slug: string;
  features?: string[];
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
    description: "AI Engine for Clinical Excellence - Specialized RAG models for clinical decision support, built on evidence and tuned for action.",
    icon: "🧠",
    logoImage: "/MedNeuronLogoTransparent.png",
    slug: "medneuron",
    longDescription: [
      "MedNeuron is a specialized AI engine that powers HealthPilot.ai's intelligent healthcare platform while offering standalone AI services for organizations seeking specialized clinical intelligence.",
      "Built on evidence-based knowledge from standards of care, medical literature, screening guidelines, and real-world clinical data, MedNeuron delivers precision clinical intelligence through fine-tuned RAG models.",
      "Available as both standalone service and integrated platform, MedNeuron provides customizable clinical workflows with on-premise or cloud deployment options, all within a HIPAA compliant architecture."
    ],
    features: [
      "Fine-tuned RAG models for multiple medical specialties",
      "Real-time clinical decision support with low-latency inference",
      "Evidence-based recommendations from medical literature",
      "HIPAA compliant architecture for healthcare environments",
      "Specialized models for General Medicine, Obesity, Endocrine, Psychiatry",
      "Customizable clinical workflows and deployment options",
      "Multi-modal data processing capabilities",
      "Continuous learning from clinical outcomes"
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
    logoImage: "/logos/chennai_health_logo.png",
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
  },  {
    title: "IAMAI.HEALTH",
    description: "Revolutionary healthcare technology transforming patient care through advanced AI and robotics.",
    icon: "🤖",
    logoImage: "/logos/IAMAILogo.png",
    slug: "iamai-health",
    longDescription: [
      "IAMAI.HEALTH is pioneering the revolutionary era of advanced robotics and AI in healthcare, where precision meets compassion, and technology saves lives.",
      "Our platform integrates AI-powered diagnostics, real-time monitoring, and robotic surgery capabilities to deliver superhuman accuracy in medical care.",
  "IAMAI.HEALTH represents the future of healthcare with projected 99.9% precision rates and the vision of healthcare robotics enabling physician embodiment of Healthcare AI."
    ],
    features: [
      "AI-powered diagnostics with superhuman accuracy",
      "Real-time patient monitoring with predictive insights",
      "Robotic surgery with AI-guided precision",
      "Continuous patient monitoring with instant alerts",
      "Advanced machine learning algorithms for condition detection",
      "Healthcare robotics for physician embodiment"
    ]
  }
];
