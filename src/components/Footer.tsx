
import { companyInfo } from "@/lib/data";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";

const Footer = () => {
  const handleWhatsAppContact = () => {
    window.open(`https://wa.me/${companyInfo.whatsappNumber.replace(/\+/g, '')}`, "_blank");
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-medical-blue text-white pt-16 pb-6">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{companyInfo.name}</h3>
            <p className="mb-4 text-white/80">
              {companyInfo.tagline}
            </p>
            <div className="flex items-center mt-4 space-x-4">
              {/* Add social media icons if needed */}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Product Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#diagnostic-devices" className="text-white/80 hover:text-white transition-colors">
                  Diagnostic Devices
                </a>
              </li>
              <li>
                <a href="#minor-procedure-kits" className="text-white/80 hover:text-white transition-colors">
                  Minor Procedure Kits
                </a>
              </li>
              <li>
                <a href="#consumables-disposables" className="text-white/80 hover:text-white transition-colors">
                  Consumables & Disposables
                </a>
              </li>
              <li>
                <a href="#general-clinic-supplies" className="text-white/80 hover:text-white transition-colors">
                  General Clinic Supplies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  Company Overview
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  Founder's Note
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-white/80">{companyInfo.whatsappNumber}</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-white/80">info@nirmalcorp.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-white/80">123 Medical Plaza, Ahmedabad, Gujarat, India</span>
              </li>
              <li className="flex items-start cursor-pointer" onClick={handleWhatsAppContact}>
                <MessageSquare className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-white/80 hover:text-white">Contact on WhatsApp</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 text-center text-white/60 text-sm">
          <p>&copy; {currentYear} {companyInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
