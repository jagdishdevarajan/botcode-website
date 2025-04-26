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
    logoImage: "/logos/health_pilot_logo.png",
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
    title: "Talks.Doctor",
    description: "Bringing out the best in the best doctors in the field through AI-enhanced communication and knowledge sharing.",
    icon: "🎙️",
    logoImage: "/logos/talks_doctor_logo.jpg",
    slug: "talks-doctor",
    longDescription: [
      "Talks.Doctor is a knowledge-sharing platform that amplifies medical expertise through intelligent content creation, curation, and distribution.",
      "Our system helps leading physicians transform their clinical insights into valuable educational content that can be shared with colleagues, trainees, and patients.",
      "By capturing and disseminating specialized knowledge, Talks.Doctor creates a multiplier effect for medical expertise, extending the reach and impact of top healthcare professionals."
    ],
    features: [
      "AI-assisted content creation",
      "Specialized medical transcription",
      "Smart content distribution",
      "Audience engagement analytics",
      "Secure collaboration tools"
    ]
  },
  {
    title: "QuestionAir",
    description: "Helping students identify weak areas and retain knowledge through intelligently timed practice questions.",
    icon: "❓",
    logoImage: "/logos/questionair_logo.png",
    slug: "questionair",
    longDescription: [
      "QuestionAir is a product that helps students identify their weak areas in subjects and answer questions with appropriate intervals so the knowledge can be retained to score better in exams.",
      "Our system uses AI to analyze student performance patterns, identify knowledge gaps, and create personalized question sets that reinforce learning at optimal intervals.",
      "QuestionAir can be used as a standalone implementation or integrated with SchoolSkies to provide a comprehensive education technology solution for schools and educational institutions."
    ],
    features: [
      "Personalized question sets based on student performance",
      "Spaced repetition algorithms for improved retention",
      "Weakness identification and targeted practice",
      "Performance analytics and progress tracking",
      "Integration with SchoolSkies or standalone operation",
      "Multi-subject support across different curricula"
    ]
  },
  {
    title: "SchoolSkies",
    description: "Comprehensive school management platform that streamlines and automates administrative tasks for educational institutions.",
    icon: "🏫",
    logoImage: "/logos/school_skies_logo.svg",
    slug: "schoolskies",
    longDescription: [
      "SchoolSkies is a leading school ERP (Enterprise Resource Planning) software tailored for educational institutions, providing advanced features for efficient and intelligent school management.",
      "Our platform simplifies everything from admissions and attendance to fee collection and academic reporting, creating a seamless experience for administrators, teachers, students, and parents.",
      "With innovative safety features like BLE ID cards for student tracking and GPS monitoring for school buses, SchoolSkies prioritizes both educational excellence and student security."
    ],
    features: [
      "Student and teacher management",
      "Admission portal and fee management",
      "Attendance tracking and library management",
      "Mobile app for parents and teachers",
      "Safety features including student tracking",
      "Customizable to meet specific school requirements"
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
  }
];
