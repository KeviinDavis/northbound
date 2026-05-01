import HeroEditorial from "@/components/HeroEditorial";
import FeaturedProjectFull from "@/components/FeaturedProjectFull";
import { hero, featuredFull } from "@/docs/content/home";

export default function Home() {
  return (
    <>
      <HeroEditorial content={hero} />
      <FeaturedProjectFull content={featuredFull} />
    </>
  );
}