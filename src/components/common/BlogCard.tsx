import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Eye, MessageCircle, ThumbsUp } from "lucide-react";
import editIcon from "@/assets/images/edit.png";
import deleteIcon from "@/assets/images/delete.png";
import hideIcon from "@/assets/images/hide.png";

interface BlogCardPropTypes {
  img: string;
  editMode?: boolean;
}

const BlogCard = ({ img, editMode }: BlogCardPropTypes) => {
  return (
    <Card className="w-auto 2xl:max-w-[500px]  px-6 py-8 space-y-7 lg:mx-2 card-boxshadow rounded-xl border-none">
      <div className="w-full items-center justify-center flex">
        <img src={img} alt="blog" className="w-[448px]" />
      </div>
      <div className="space-y-2">
        <CardTitle className="text-[#1B4C81] text-[22px] 2xl:text-[30px]  font-[600]">
          Blog Title Here
        </CardTitle>
        <div>
          <CardDescription className="text-[#888888] text-sm  leading-7 2xl:text-[18px] font-[400]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </CardDescription>
        </div>
        <div className="flex justify-between items-center pt-5">
          <p className="text-main text-sm font-[400] 2xl:text-[18px]">
            Author: Alex Thomas
          </p>
          <p className="text-main_green text-sm font-[400] 2xl:text-[18px] cursor-pointer ">
            Follow
          </p>
        </div>
        <div className="flex gap-3 flex-col lg:flex-row justify-between md:items-center pt-2">
          <p className="text-main text-sm text-center md:text-left font-[400] truncate 2xl:text-[18px] ">
            dd-mm-yyyy{" "}
          </p>
          <div className="flex justify-evenly font-medium  gap-x-4">
            <p className="text-main text-sm font-[500] 2xl:text-[16px] flex gap-x-1">
              <Eye size={17} strokeWidth={2} /> 109
            </p>
            <p className="text-main text-sm font-[500] 2xl:text-[16px] flex gap-x-1 items-center">
              <ThumbsUp size={15} strokeWidth={2} /> 08
            </p>
            <p className="text-main text-sm font-[500] 2xl:text-[16px] flex gap-x-0.5 items-center">
              <MessageCircle size={16} strokeWidth={2} /> Message Author
            </p>
          </div>
        </div>
        {editMode ? (
          <div className="pt-3 space-y-5">
            <hr />
            <div className="flex gap-x-6">
              <div className="flex gap-x-2 cursor-pointer">
                <img src={editIcon} className="object-contain w-4 h-4" />
                <p className="font-[500] text-main text-xs">Edit</p>
              </div>
              <div className="flex gap-x-2 cursor-pointer">
                <img src={hideIcon} className="object-contain w-4 h-4" />
                <p className="font-[500] text-main text-xs">Hide</p>
              </div>
              <div className="flex gap-x-2 cursor-pointer">
                <img src={deleteIcon} className="object-contain w-4 h-4" />
                <p className="font-[500] text-main text-xs">Delete</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </Card>
  );
};

export default BlogCard;
