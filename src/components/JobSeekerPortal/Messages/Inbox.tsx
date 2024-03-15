import PicAvatar from "@/assets/images/user_review.png";
import { Input } from "@/components/ui/input";
import { MoreVertical, SearchIcon, Send } from "lucide-react";

const Inbox = () => {
  return (
    <div className="bg-white w-full  mx-4 md:mx-0 form_box_shadow flex h-[700px] max-h-[950px]  gap-y-7 rounded-lg ">
      <div className="w-[30%] p-8 border-r-2 space-y-7  border-[#C6C6C6]">
        <h1 className="text-heading 2xl:!text-[30px]">Inbox</h1>
        <div className="space-y-5">
          {[1, 2, 3, 4].map((v, i) => (
            <div key={v + i}>
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <img
                    src={PicAvatar}
                    className="object-contain w-[50px] h-[50px]"
                  />
                  <p className="text-main font-[600] text-[15px] 2xl:text-[18px]">
                    Username
                  </p>
                </div>
                <div className="w-[25px] h-[25px] bg-[#55A7A6] text-white text-[13px] font-[500] flex items-center justify-center rounded-full p-1">
                  01
                </div>
              </div>
              <div className="bg-[#E9E9E9] h-[1px] mt-5" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-col h-full">
          <div className="flex px-4 py-6  justify-between items-center">
            <div className="flex gap-4 items-center">
              <img
                src={PicAvatar}
                className="object-contain w-[50px] h-[50px]"
              />
              <p className="text-main font-[600] text-[15px] 2xl:text-[18px]">
                Username
              </p>
            </div>
            <div className="flex gap-x-5 items-center">
              <div className="relative w-full">
                <SearchIcon
                  size={20}
                  className="text-main_green absolute top-2.5 z-10 left-3.5"
                />
                <Input
                  className="pl-11 border-[#C6C6C6] "
                  type="search"
                  placeholder="Search Text"
                />
              </div>
              <div>
                <MoreVertical />
              </div>
            </div>
          </div>
          <div className="flex-1 px-4 py-6  flex-grow justify-between border-t-2 p-8 border-b-2 border-[#C6C6C6]">
            <div className="flex items-center -mt-2 justify-center mb-10">
              <div className="bg-[#55A7A6] px-7 py-2 rounded-full flex items-center justify-center">
                <p className="text-center text-white font-[400] text-[10px]">
                  5 Feburary 2024
                </p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="flex gap-4">
                <img
                  src={PicAvatar}
                  className="object-contain w-[50px] h-[50px]"
                />
                <div className="space-y-2">
                  <div className="bg-[#F0F0F0] py-3 px-5 flex items-center rounded-full rounded-bl-xl">
                    <p className="text-sm  text-[#474747] font-[400]">
                      Hi, John How are you?
                    </p>
                  </div>
                  <div className="bg-[#F0F0F0] py-3 px-5 flex items-center rounded-full rounded-bl-xl">
                    <p className="text-sm  text-[#474747] font-[400]">
                      Did you train yesterday
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="flex gap-4">
                <div className="space-y-2">
                  <div className="bg-[#1B4C81] py-3 px-5  w-fit ml-auto flex items-center rounded-full rounded-bl-xl">
                    <p className="text-sm  text-[#fff] font-[400]">
                      Great, What about you?
                    </p>
                  </div>
                  <div className="bg-[#1B4C81] py-3 px-5 flex items-center w-fit ml-auto rounded-full rounded-bl-xl">
                    <p className="text-sm  text-[#ffff] font-[400]">
                      Of course i did, speaking of which check this out
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-6 flex gap-4 w-full justify-between items-center">
            <div className="w-full">
              <Input
                className="w-full border-none"
                type="text"
                placeholder="Type messaged here"
              />
            </div>
            <div className="bg-[#55A7A6] rounded-full p-2.5 flex items-center justify-center">
              <Send size={20} color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
