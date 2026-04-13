"use client"
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Abilities from "@/components/Abilities";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Githubrepo from "@/components/Githubrepo";


export default function Home() {
  return (
    <>
      <Navbar />
      <Header/>  
      <About/>    
      <Abilities/>    
      <Work/>    
      <Contact/>    
      <Githubrepo/>    
      <Footer/>    
    </>
  );
}
