import HeroSection from "@/components/HeroSection";
import PopularCategories from "@/components/Home/PopularCategories";
import { VideoCards } from "@/components/Home/VideoCards";


export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <div className="my-20 space-y-10">
        {/* Video Container  */}
        <VideoCards />
        <PopularCategories />
      </div>
    </div>
  );
}
