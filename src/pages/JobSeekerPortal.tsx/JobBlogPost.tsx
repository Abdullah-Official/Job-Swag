import BlogCard from "@/components/common/BlogCard";
import SortSelect from "@/components/common/SortSelect";
import BlogImg from "@/assets/images/blog-img.png";
import BlogImg2 from "@/assets/images/blog-img2.png";
import BlogImg3 from "@/assets/images/blog-img3.png";

const JobBlogPost = () => {
  return (
    <div className="container my-14">
      <h1 className="text-heading">Blog Post</h1>
      <div className="mt-10 border-b-[1px] overflow-x-auto w-full border-[#C6C6C6] flex items-center gap-x-5 justify-center">
        <button className="border-b-4 border-[#55A7A6] pb-2 text-[#1B4C81] text-[14px] font-bold w-full md:w-[200px] overflow-hidden whitespace-nowrap">
          Viewed
        </button>
        <button className="pb-2 text-[#7C7C7C] text-[14px] font-[500] w-full md:w-[200px] overflow-hidden whitespace-nowrap">
          Favorites
        </button>
        <button className="pb-2 text-[#7C7C7C] text-[14px] font-[500] w-full md:w-[200px] overflow-hidden whitespace-nowrap">
          Shared
        </button>
      </div>
      <div className="mt-20 flex flex-wrap md:flex-row justify-center flex-col gap-x-7 gap-y-5">
        <div className="w-full space-y-4">
          <div className="flex gap-3 justify-between">
            <p className="text-sm text-[#7C7C7C]">
              Showing 05 based on your filter
            </p>
            <SortSelect />
          </div>
          <div className="flex flex-wrap md:flex-row  !mt-10 justify-center md:justify-around flex-col gap-y-6">
            <BlogCard img={BlogImg3} editMode={true} />
            <BlogCard img={BlogImg} editMode={true} />
            <BlogCard img={BlogImg2} editMode={true} />
            <BlogCard img={BlogImg3} editMode={true} />
            <BlogCard img={BlogImg} editMode={true} />
            <BlogCard img={BlogImg2} editMode={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobBlogPost;
