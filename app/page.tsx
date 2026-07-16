import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import ProductCategories from "../components/ProductCategories";
import ProductGrid from "../components/ProductGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import GlobalNetwork from "../components/GlobalNetwork";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ProductCategories />
      <ProductGrid />
      <WhyChooseUs />
      <GlobalNetwork />
      <Footer />
      <WhatsAppButton />
    </>
  );
}