import ReviewCard from "@/components/JobSeekerPortal/ReviewCard";
import SortSelect from "@/components/common/SortSelect";

const Reviews = () => {
  return (
    <div className="container mx-auto !my-14 2xl:!my-32 lg:max-w-[1400px] 2xl:max-w-[1600px]">
      <h1 className="text-heading 2xl:!text-[35px]">Reviews</h1>
      <div className="mt-10 border-b-[1px] overflow-x-auto w-full border-[#C6C6C6] flex items-center gap-x-10 justify-center">
        <button className="border-b-4 border-[#55A7A6] pb-2 2xl:pb-4 2xl:text-[24px] font-[700] text-[#1B4C81] text-[14px]  w-full 2xl:w-[260px] md:w-[200px] overflow-hidden whitespace-nowrap">
          Received
        </button>
        <button className="pb-2 2xl:pb-4 2xl:text-[24px] font-[400]  text-[#7C7C7C] text-[14px] w-full 2xl:w-[260px] md:w-[200px] overflow-hidden whitespace-nowrap">
          Left
        </button>
        <button className="pb-2 2xl:pb-4 2xl:text-[24px] font-[400] text-[#7C7C7C] text-[14px] w-full 2xl:w-[260px] md:w-[200px] overflow-hidden whitespace-nowrap">
          Pending Approval
        </button>
      </div>
      <div className="mt-12 flex flex-wrap md:flex-row justify-center flex-col gap-x-7 gap-y-5">
        <div className="w-full space-y-4">
          <div className="flex gap-3 justify-between items-center">
            <p className="text-sm text-[#7C7C7C] 2xl:text-[20px] font-[400]">
              Showing 05 based on your filter
            </p>
            <SortSelect />
          </div>
          <div className="flex items-center justify-center w-full !mt-20">
            <div className="grid grid-cols-1 items-center gap-9 md:grid-cols-2 justify-center  w-full">
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
