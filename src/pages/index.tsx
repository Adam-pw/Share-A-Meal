import Image from "next/image";
import { Inter } from "next/font/google";
import Signup from "@/components/Signup";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Login from "@/components/Login";
import Hero from "@/components/Hero";
import Hehe from "@/components/hehe";
import Carousel from "@/components/Carousel";
import Faq from "@/components/Faq";
import Team from "@/components/Team";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Hehe />
      <Team />
      <Carousel />
      <Faq />
      <Footer />
    </>
  );
}
