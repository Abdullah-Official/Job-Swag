import CommonHeader from "@/components/common/CommonHeader";
import Banner from "@/assets/images/blog-banner.png";
import BlogCard from "@/components/common/BlogCard";
import BlogImg from "@/assets/images/blog-img.png";
import BlogImg2 from "@/assets/images/blog-img2.png";
import BlogImg3 from "@/assets/images/blog-img3.png";

const Blog = () => {
  return (
    <div className="mb-20 -mt-2">
      <CommonHeader title="Blog" bannerImg={Banner} />
      <div className="md:container mt-16 ">
        <div className="flex flex-wrap md:flex-row justify-center items-center flex-col   gap-x-7 gap-y-5">
          <BlogCard img={BlogImg} />
          <BlogCard img={BlogImg2} />
          <BlogCard img={BlogImg3} />
          <BlogCard img={BlogImg} />
          <BlogCard img={BlogImg2} />
          <BlogCard img={BlogImg3} />
          <BlogCard img={BlogImg} />
          <BlogCard img={BlogImg2} />
          <BlogCard img={BlogImg3} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
