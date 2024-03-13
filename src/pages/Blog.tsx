import CommonHeader from "@/components/common/CommonHeader";
import Banner from "@/assets/images/blog-banner.png";
import BlogCard from "@/components/common/BlogCard";
import BlogImg from "@/assets/images/blog-img.png";
import BlogImg2 from "@/assets/images/blog-img2.png";
import BlogImg3 from "@/assets/images/blog-img3.png";

const Blog = () => {
  return (
    <div className="mb-20 -mt-1 ">
      <CommonHeader title="Blog" bannerImg={Banner} />
      <div className="md:container mt-16 2xl:max-w-[1600px] lg:max-w-[1400px]">
      <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 justify-center items-center gap-x-4 lg:grid-cols-3 ">
            <BlogCard img={BlogImg3} />
            <BlogCard img={BlogImg} />
            <BlogCard img={BlogImg2} />
            <BlogCard img={BlogImg3} />
            <BlogCard img={BlogImg} />
            <BlogCard img={BlogImg2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
