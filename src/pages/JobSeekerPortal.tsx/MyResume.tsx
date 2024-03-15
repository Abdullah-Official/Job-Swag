import UploadResume from "@/assets/images/upload-resume.png"
import CreateResume from "@/assets/images/create-resume.png"
import EditResume from "@/assets/images/edit-resume.png"
import { NavLink } from "react-router-dom"

const MyResume = () => {
  return (
    <div className="container !my-14 2xl:!my-32 lg:max-w-[1400px] 2xl:max-w-[1600px]">
      <div className="md:container w-full lg:!w-[80%]">
        <h1 className="text-heading ] 2xl:!text-[35px]">My Resume</h1>
        <div className="mt-10 flex  md:flex-row justify-center flex-col gap-x-7 gap-y-5">
            <div className="bg-white card-boxshadow rounded-xl py-10 px-8 space-y-4">
                <img src={UploadResume} className="object-contain w-[65px] h-[61px]" alt="UploadResume" />
                <h1 className="text-heading 2xl:!text-[30px] font-[600] pt-1">Upload Resume</h1>
                <p className="text-main text-xs font-[500] leading-6 2xl:text-[16px]">
                Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore.
                flex-wrap
                </p>
            </div>
           <NavLink to="/create-resume" className="bg-white card-boxshadow rounded-xl py-10 px-8 space-y-4">
                <img src={CreateResume} className="object-contain w-[65px] h-[61px]" alt="Create Resume" />
                <h1 className="text-heading 2xl:!text-[30px] font-[600] pt-1">Create Resume</h1>
                <p className="text-main text-xs font-[500] leading-6 2xl:text-[16px]">
                Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore.
                flex-wrap
                </p>
            </NavLink>
            <NavLink to="/edit-resume" className="bg-white card-boxshadow rounded-xl py-10 px-8 space-y-4">
                <img src={EditResume} className="object-contain w-[65px] h-[61px]" alt="UploadResume" />
                <h1 className="text-heading 2xl:!text-[30px] font-[600] pt-1">Edit Resume</h1>
                <p className="text-main text-xs font-[500] leading-6 2xl:text-[16px]">
                Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore.
                flex-wrap
                </p>
            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MyResume;
