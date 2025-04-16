
import { companyInfo } from "@/lib/data";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-medical-gray">
      <div className="container px-4 mx-auto">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-medical-blue mb-4">About Nirmal Corporation</h2>
          <div className="h-1 w-20 bg-medical-teal mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">A leading provider of quality medical supplies since {new Date().getFullYear() - companyInfo.yearsExperience}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/company-founder.jpg" 
              alt={`${companyInfo.founder}, Founder of ${companyInfo.name}`}
              className="w-full h-auto object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://source.unsplash.com/random/600x400/?business,medical";
              }}
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-medical-blue mb-4">Our Story</h3>
            <p className="text-gray-700 mb-6">
              {companyInfo.about}
            </p>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-16 w-16 rounded-full bg-medical-blue flex items-center justify-center text-white text-2xl font-bold mr-4">
                  {companyInfo.founder.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xl font-semibold">{companyInfo.founder}</h4>
                  <p className="text-gray-500">Founder & CEO</p>
                </div>
              </div>
              
              <p className="italic text-gray-600">
                "With {companyInfo.yearsExperience} years in the medical supply industry, we've built our reputation on providing healthcare professionals with reliable, high-quality products that help them deliver the best possible care to their patients."
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-medical-blue mb-2">{companyInfo.yearsExperience}+</div>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-medical-blue mb-2">1000+</div>
                <p className="text-gray-600">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
