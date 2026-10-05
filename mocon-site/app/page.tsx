import { PageBlobs } from "@/components/decorations/pageBlobs/PageBlobs";
import { About } from "@/components/sections/about/About";
import { LatestBlog } from "@/components/sections/blog/LatestBlog";
import { ContactSection } from "@/components/sections/contact/ContactSection";
import { Hero } from "@/components/sections/hero/Hero.";
import { Point } from "@/components/sections/point/Point";
import { Process } from "@/components/sections/process/Process";
import { ServiceList } from "@/components/sections/service/Service";
import { LatestWorks } from "@/components/sections/works/LatestWorks";

import { heroData } from "@/content/hero";

export default function Home() {
  return (
    <>
      <PageBlobs/>

      <Hero data={heroData} />
      <ServiceList />
      <About />
      <LatestWorks />
      <LatestBlog />
      <Process />
      <Point />
      <ContactSection />
    </>
  );
}
