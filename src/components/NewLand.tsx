import Navigation from "./Navigation"
import Hero from "./Hero"
import About from "./About"
import Journey from "./Journey"
import Services from "./Services"
import Members from "./Members"
import Contact from "./Contact"
import Footer from "./Footer"
import { useRef } from "react"

export default function NewLand() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Journey />
      <Members />
      <Contact ref={contactRef} />
      <Footer scrollToContact={scrollToContact} />
    </> 
)}