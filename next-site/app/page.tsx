import { AboutSection } from "@/components/sections/about/AboutSection";
import { ContactSection } from "@/components/sections/contact/ContactSection";
import { Hero } from "@/components/sections/hero/Hero";
import { NewsSection } from "@/components/sections/news/NewsSection";
import { ProcessSection } from "@/components/sections/process/ProcessSection";
import { LatestProducts } from "@/components/sections/product/LatestProducts";
import { ServiceList } from "@/components/sections/service/ServiceList";
import { WhyOurCompany } from "@/components/sections/whyUs/WhyUsCompany";

import { heroData } from "@/content/hero";

export default function HomePage() {
    return (
      
    <>
      <Hero data={heroData} />
      <ServiceList />
      <LatestProducts />
      <AboutSection />
      <WhyOurCompany />
      <ProcessSection />
      <NewsSection />
      <ContactSection />
    </>
  );
}