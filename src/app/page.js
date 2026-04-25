import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Clients from "@/components/sections/Clients";
import {
  AccredianEdge,
  DomainExpertise,
} from "@/components/sections/AccredianEdge";
import {
  CourseSegmentation,
  WhoShouldJoin,
} from "@/components/sections/CourseSegmentation";
import {
  CatFramework,
  HowItWorks,
} from "@/components/sections/CatAndHowItWorks";
import FAQs from "@/components/sections/Faqs";
import {
  Testimonials,
  SupportCTA,
} from "@/components/sections/TestimonialsAndCTA";

export default function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-full flex justify-center">
        <div className="w-full">
          <Navbar />
        </div>
      </div>

      <div className="flex justify-center items-start">
        <div className="max-w-[85rem] w-full">
          <Hero />
        </div>
      </div>

      <div className="sm:px-16 px-0 flex justify-center items-start">
        <div className="max-w-[85rem] w-full">
          <Stats />
          <Clients />
          <AccredianEdge />
          <DomainExpertise />
          <CourseSegmentation />
          <WhoShouldJoin />
          <CatFramework />
          <HowItWorks />
          <FAQs />
          <Testimonials />
          <SupportCTA />
        </div>
      </div>

      <Footer />
    </div>
  );
}
