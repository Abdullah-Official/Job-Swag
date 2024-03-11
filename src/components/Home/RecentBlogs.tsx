import BlogCard from "../common/BlogCard";
import { Button } from "../ui/button";
import BlogImg from "@/assets/images/blog-img.png";
import BlogImg2 from "@/assets/images/blog-img2.png";
import BlogImg3 from "@/assets/images/blog-img3.png";
import { Link } from "react-router-dom";

const RecentBlogs = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-heading text-[22px] sm:!text-[28px] 2xl:!text-[50px] text-center font-[600]">
        Recent Blog Posts
      </h1>
      <div className="mt-10 flex flex-col items-center justify-center gap-y-6">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 gap-x-4 lg:grid-cols-3 w-full">
            <BlogCard img={BlogImg3} />
            <BlogCard img={BlogImg} />
            <BlogCard img={BlogImg2} />
          </div>
        </div>
        <Link to={"/blog"}>
          <Button className="w-28 mt-2">See All</Button>
        </Link>
      </div>
    </div>
  );
};

export default RecentBlogs;
