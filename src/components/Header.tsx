
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { companyInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsAppContact = () => {
    window.open(`https://wa.me/${companyInfo.whatsappNumber.replace(/\+/g, '')}`, "_blank");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-medical-blue">
              {companyInfo.name}
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#diagnostic-devices" className="text-gray-600 hover:text-medical-blue transition-colors">
              Diagnostic Devices
            </a>
            <a href="#minor-procedure-kits" className="text-gray-600 hover:text-medical-blue transition-colors">
              Procedure Kits
            </a>
            <a href="#consumables-disposables" className="text-gray-600 hover:text-medical-blue transition-colors">
              Consumables
            </a>
            <a href="#general-clinic-supplies" className="text-gray-600 hover:text-medical-blue transition-colors">
              Clinic Supplies
            </a>
            <a href="#about" className="text-gray-600 hover:text-medical-blue transition-colors">
              About
            </a>
            <Button 
              onClick={handleWhatsAppContact}
              className="bg-medical-teal hover:bg-medical-blue transition-colors"
            >
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-medical-light"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 pb-6 border-t border-gray-200 space-y-4">
            <a 
              href="#diagnostic-devices" 
              className="block px-4 py-2 text-gray-700 hover:bg-medical-light rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Diagnostic Devices
            </a>
            <a 
              href="#minor-procedure-kits" 
              className="block px-4 py-2 text-gray-700 hover:bg-medical-light rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Procedure Kits
            </a>
            <a 
              href="#consumables-disposables" 
              className="block px-4 py-2 text-gray-700 hover:bg-medical-light rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Consumables
            </a>
            <a 
              href="#general-clinic-supplies" 
              className="block px-4 py-2 text-gray-700 hover:bg-medical-light rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Clinic Supplies
            </a>
            <a 
              href="#about" 
              className="block px-4 py-2 text-gray-700 hover:bg-medical-light rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <Button 
              onClick={handleWhatsAppContact}
              className="w-full bg-medical-teal hover:bg-medical-blue transition-colors"
            >
              Contact Us
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
