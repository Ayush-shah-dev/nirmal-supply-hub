
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/lib/data";

const Hero = () => {
  const handleWhatsAppContact = () => {
    window.open(`https://wa.me/${companyInfo.whatsappNumber.replace(/\+/g, '')}`, "_blank");
  };

  return (
    <section className="relative bg-gradient-to-br from-medical-blue to-medical-teal text-white py-24 overflow-hidden">
      {/* Abstract medical shapes in background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full border-4 border-white"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full border-4 border-white"></div>
        <div className="absolute top-40 right-40 w-32 h-32 rounded-full border-2 border-white"></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {companyInfo.name}
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-white/90">
            {companyInfo.tagline}
          </p>
          <p className="text-lg mb-8 text-white/80">
            With {companyInfo.yearsExperience} years of industry experience, we provide high-quality medical supplies to hospitals, clinics, and healthcare professionals nationwide.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg"
              className="bg-white text-medical-blue hover:bg-medical-light transition-colors"
              onClick={handleWhatsAppContact}
            >
              Get in Touch
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              className="border-white text-white hover:bg-white/10 transition-colors"
              asChild
            >
              <a href="#diagnostic-devices">Browse Products</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
