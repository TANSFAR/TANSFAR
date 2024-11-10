import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
// import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
// import Pricing from "@/components/Pricing";
// import Testimonials from "@/components/Testimonials";
// import Video from "@/components/Video";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TANSFAR",
  description: "Instant payment system for individual and businesses across the globe.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="./favicon.ico" />
      </Head>
      <ScrollUp />
      <Hero />
      <Features />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Contact />
    </>
  );
}