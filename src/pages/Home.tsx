import HeroSection from "@/components/HeroSection";
import FeaturedInfluencers from "@/components/Home/FeaturedInfluencers";
import FeaturedJobs from "@/components/Home/FeaturedJobs";
import PartnersCarousel from "@/components/Home/PartnersCarousel";
import PopularCategories from "@/components/Home/PopularCategories";
import RecentBlogs from "@/components/Home/RecentBlogs";
import { VideoCards } from "@/components/Home/VideoCards";


export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <div className="my-20 space-y-20">
        {/* Video Container  */}
        <VideoCards />
        <PopularCategories />
        <FeaturedJobs />
        <FeaturedInfluencers />
        <RecentBlogs />
        <PartnersCarousel />
      </div>
    </div>
  );
}
