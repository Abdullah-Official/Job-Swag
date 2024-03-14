import { Card } from "../ui/card";
import PicAvatar from "@/assets/images/user_review.png";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";

const ReviewCard = () => {
  const [rating, setRating] = useState(4);

  const handleRating = (rate: number) => {
    setRating(rate);
  };
  return (
    <Card className="w-auto 2xl:max-w-[780px]  px-8 py-6 card-boxshadow rounded-xl border-none">
      <div className="flex flex-col gap-y-2 sm:flex-row gap-x-4 items-center">
        <img
          src={PicAvatar}
          className="object-contain 2xl:!h-[80px] 2xl:!w-[80px]"
          alt="pic_avatar"
        />
        <div className="space-y-1 2xl:space-y-2">
          <p className="2xl:text-[24px] text-[18px] text-center lg:text-left font-[600] text-[#1B4C81]">
            Username
          </p>
          <p className="text-main text-sm font-[400] 2xl:text-[18px] text-center lg:text-left ">
            February 2, 2024
          </p>
        </div>
      </div>
      <div
        style={{
          direction: "ltr",
          fontFamily: "sans-serif",
          touchAction: "none",
        }}
        className="flex gap-2 items-center mt-7"
      >
        <Rating
          initialValue={rating}
          onClick={handleRating}
          fillColor="#55A7A6"
          size={24}
        />
        <p className="2xl:text-[20px] text-[#5D6A7B] font-[600]">
          ({rating}.0)
        </p>
      </div>
      <div>
        <p className=" text-[14px] mt-3 2xl:text-[18px] text-[#888888] font-[500] leading-6 2xl:leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
    </Card>
  );
};

export default ReviewCard;
