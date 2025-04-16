
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCategory from "@/components/ProductCategory";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { productCategories } from "@/lib/data";

const Index = () => {
  // Smooth scrolling effect for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || "");
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.pageYOffset - 80, // Offset for header
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      <main>
        {productCategories.map((category) => (
          <ProductCategory key={category.id} category={category} />
        ))}
        
        <AboutSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
