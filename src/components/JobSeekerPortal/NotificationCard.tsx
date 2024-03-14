import PicAvatar from "@/assets/images/notif_img.png";
import { MoreVertical } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";

export const NotificationCard = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div
      className={`bg-[#F7F7F7] cursor-pointer  hover:translate-y-2 hover:border-l-8 hover:border-[#55A7A6]   hover:bg-white transition-all side-card py-3 px-6 pb-5 rounded-lg`}
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-y-5 sm:flex-row gap-x-5 items-center">
          <img
            src={PicAvatar}
            className="object-contain !h-[65px] !w-[65px]"
            alt="pic_avatar"
          />
          <div className="space-y-3 pt-2.5">
            <div className="space-y-2 lg:space-y-1">
              <p className="2xl:text-[22px] text-[18px] text-center sm:text-left font-[600] text-[#5D6A7B]">
                John doe viewed your application
              </p>
              <p className="text-main text-sm font-[400] 2xl:text-[18px] text-center sm:text-left ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <p className="text-xs 2xl:text-[14px] text-center sm:text-left text-[#888888] font-[400] ">
              10 min ago
            </p>
          </div>
        </div>
        <div>
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger className="outline-none" asChild>
              <Button className="outline-none " variant="ghost" size="sm">
                <MoreVertical color="#5D6A7B" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem>Assign to...</DropdownMenuItem>
                <DropdownMenuItem>Set due date...</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Apply label</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent className="p-0"></DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  Delete
                  <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
