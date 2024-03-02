import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import FloatingButton from "@/components/FloatingButton";
import { Metadata } from "next";
import AboutSectionFive from "@/components/About/AboutSectionFive";
export const metadata: Metadata = {
  title: "CV Anicon",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <Features />
      <Brands />
      <Video />
      <AboutSectionTwo />
      <AboutSectionFive />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <Blog />
      {/* <Contact /> */}
      <FloatingButton />
    </>
  );
}
