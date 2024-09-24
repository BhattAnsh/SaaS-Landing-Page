import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricingdemo";
import AboutUs from "@/components/aboutUs";
import WhyInvest from "@/components/Why";
import InvestmentOpportunities from "@/components/invest";
import InvestmentSection from "@/components/Investment";


export default function Home() {
  return (
    <>
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutUs />
      <Features />
      <WhyInvest />
      <InvestmentOpportunities />
      <ProductShowcase />
      <FAQs />     
      <CallToAction />
      </div>
      <Footer />
    </>
  );
}
