import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { MissionSection } from "@/components/MissionSection";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { AssociationLogos } from "@/components/AssociationLogos";
import { NetworkMap } from "@/components/NetworkMap";
import { LifeInRS } from "@/components/LifeInRS";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSlider />
      <MissionSection />
      <ServicesCarousel />
      <AssociationLogos />
      <NetworkMap />
      <LifeInRS />
      <Footer />
    </>
  );
}
