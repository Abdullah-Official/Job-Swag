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
    <Card className="w-auto max-w-[400px] px-5 py-6 space-y-7 mx-2 card-boxshadow rounded-xl border-none">
      <img
        src={img}
        alt="JobFeature"
        className="object-contain w-full h-auto"
      />
      <div className="space-y-2">
        <CardTitle className="text-[#1B4C81] text-[20px] font-[600]">
          Blog Title Here
        </CardTitle>
        <div>
          <CardDescription className="text-[#888888] text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </CardDescription>
        </div>
        <div className="flex justify-between items-center pt-1">
          <p className="text-main font-400 text-xs ">Author: Alex Thomas</p>
          <p className="text-main_green text-xs  font-[600] cursor-pointer ">
            Follow
          </p>
        </div>
        <div className="flex justify-between items-center pt-2">
          <p className="text-main font-400 text-xs ">dd-mm-yyyy </p>
          <div className="flex justify-evenly font-medium  gap-x-2">
            <p className="text-main text-xs flex gap-x-1">
              <Eye size={14} strokeWidth={2} /> 109
            </p>
            <p className="text-main text-xs flex gap-x-1 items-center">
              <ThumbsUp size={14} strokeWidth={2} /> 08
            </p>
            <p className="text-main text-xs flex gap-x-1 items-center">
              <MessageCircle size={14} strokeWidth={2} /> Message Author
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
