import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Products } from "@/components/landing/Products";
import { Impact } from "@/components/landing/Impact";
import { Technology } from "@/components/landing/Technology";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <Impact />
      <Technology />
      <Footer />
    </main>
  );
}
