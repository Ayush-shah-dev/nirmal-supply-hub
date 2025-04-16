
export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  whatsappMessage: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  products: Product[];
}

export const WHATSAPP_NUMBER = "+919879033221";

export const productCategories: ProductCategory[] = [
  {
    id: "diagnostic-devices",
    title: "Diagnostic Devices",
    description: "High-quality diagnostic equipment for accurate health monitoring",
    image: "/diagnostic-devices.jpg",
    products: [
      {
        id: "glucometers",
        name: "Glucometers",
        description: "Accurate and easy-to-use devices for quick blood sugar monitoring. Essential for diabetes management at home and in clinical settings.",
        image: "/glucometer.jpg",
        whatsappMessage: "Hey, I have an enquiry for Glucometers"
      },
      {
        id: "pulse-oximeters",
        name: "Pulse Oximeters",
        description: "Compact, non-invasive devices that measure oxygen saturation and pulse rate instantly. Ideal for both hospital and home use.",
        image: "/pulse-oximeter.jpg",
        whatsappMessage: "Hey, I have an enquiry for Pulse Oximeters"
      },
      {
        id: "nebulizers",
        name: "Nebulizers",
        description: "Effective medication delivery systems for patients with respiratory conditions such as asthma or COPD. Suitable for adults and children.",
        image: "/nebulizer.jpg",
        whatsappMessage: "Hey, I have an enquiry for Nebulizers"
      },
      {
        id: "ecg-machines",
        name: "ECG Machines",
        description: "Reliable electrocardiograph systems for capturing detailed heart activity. Designed for clinics, hospitals, and mobile diagnostic setups.",
        image: "/ecg-machine.jpg",
        whatsappMessage: "Hey, I have an enquiry for ECG Machines"
      }
    ]
  },
  {
    id: "minor-procedure-kits",
    title: "Minor Procedure Kits",
    description: "Sterile kits and tools for various medical procedures",
    image: "/procedure-kits.jpg",
    products: [
      {
        id: "dressing-sets",
        name: "Dressing Sets",
        description: "Sterile kits with essential tools for routine wound dressing and minor surgical procedures.",
        image: "/dressing-set.jpg",
        whatsappMessage: "Hey, I have an enquiry for Dressing Sets"
      },
      {
        id: "suture-removal-kits",
        name: "Suture Removal Kits",
        description: "Pre-assembled sterile kits for safe and efficient suture removal.",
        image: "/suture-removal-kit.jpg",
        whatsappMessage: "Hey, I have an enquiry for Suture Removal Kits"
      },
      {
        id: "injection-trays",
        name: "Injection Trays",
        description: "Ready-to-use trays with tools and compartments for hygienic injection administration.",
        image: "/injection-tray.jpg",
        whatsappMessage: "Hey, I have an enquiry for Injection Trays"
      }
    ]
  },
  {
    id: "consumables-disposables",
    title: "Consumables & Disposables",
    description: "Essential single-use medical supplies for healthcare facilities",
    image: "/consumables.jpg",
    products: [
      {
        id: "examination-gloves",
        name: "Examination Gloves",
        description: "Latex and nitrile gloves (powdered/powder-free) for optimal protection.",
        image: "/gloves.jpg",
        whatsappMessage: "Hey, I have an enquiry for Examination Gloves"
      },
      {
        id: "syringes-needles",
        name: "Syringes & Needles",
        description: "Sterile, disposable syringes and needles in multiple sizes.",
        image: "/syringe.jpg",
        whatsappMessage: "Hey, I have an enquiry for Syringes & Needles"
      },
      {
        id: "masks-ppe-kits",
        name: "Face Masks & PPE Kits",
        description: "Includes N95/3-ply masks, face shields, gowns, and gloves.",
        image: "/masks-ppe.jpg",
        whatsappMessage: "Hey, I have an enquiry for Face Masks & PPE Kits"
      },
      {
        id: "cotton-gauze",
        name: "Cotton Rolls & Gauze Pads",
        description: "High-absorbency and sterile supplies for wound dressing.",
        image: "/cotton-gauze.jpg",
        whatsappMessage: "Hey, I have an enquiry for Cotton Rolls & Gauze Pads"
      }
    ]
  },
  {
    id: "general-clinic-supplies",
    title: "General Clinic Supplies",
    description: "Day-to-day essentials for clinic operation and maintenance",
    image: "/general-supplies.jpg",
    products: [
      {
        id: "sanitizers-disinfectants",
        name: "Sanitizers & Disinfectants",
        description: "Hospital-grade hand sanitizers and surface cleaners.",
        image: "/sanitizer.jpg",
        whatsappMessage: "Hey, I have an enquiry for Sanitizers & Disinfectants"
      },
      {
        id: "medical-waste-bins",
        name: "Medical Waste Bins",
        description: "Color-coded bins for safe biomedical waste disposal.",
        image: "/waste-bin.jpg",
        whatsappMessage: "Hey, I have an enquiry for Medical Waste Bins"
      },
      {
        id: "charts-patient-files",
        name: "Charts & Patient Files",
        description: "Folders and record-keeping materials for smooth clinic operations.",
        image: "/charts-files.jpg",
        whatsappMessage: "Hey, I have an enquiry for Charts & Patient Files"
      }
    ]
  }
];

export const companyInfo = {
  name: "Nirmal Corporation",
  tagline: "A Trusted Name in Hospital and Doctor Supplies",
  founder: "Parag Shah",
  yearsExperience: 20,
  about: "With two decades of experience, Nirmal Corporation has established itself as a premier provider of quality medical supplies. Led by Parag Shah, our commitment to excellence has made us a trusted partner for healthcare professionals across the nation.",
  whatsappNumber: "+919879033221"
};
