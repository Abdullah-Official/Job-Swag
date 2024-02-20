import UploadResume from "@/assets/images/upload-resume.png"
import CreateResume from "@/assets/images/create-resume.png"
import EditResume from "@/assets/images/edit-resume.png"

const MyResume = () => {
  return (
    <div className="container my-14">
      <div className="md:container w-full lg:!w-[80%]">
        <h1 className="text-heading">My Resume</h1>
        <div className="mt-10 flex  md:flex-row justify-center flex-col gap-x-7 gap-y-5">
            <div className="bg-white card-boxshadow rounded-xl p-7 space-y-4">
                <img src={UploadResume} className="object-contain w-[50px]" alt="UploadResume" />
                <h1 className="text-heading">Upload Resume</h1>
                <p className="text-main text-xs">
                Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore.
                flex-wrap
                </p>
            </div>
            <div className="bg-white card-boxshadow rounded-xl p-7 space-y-4">
                <img src={CreateResume} className="object-contain w-[50px]" alt="UploadResume" />
                <h1 className="text-heading">Create Resume</h1>
                <p className="text-main text-xs">
                Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore.
                flex-wrap
                </p>
            </div>
            <div className="bg-white card-boxshadow rounded-xl p-7 space-y-4">
                <img src={EditResume} className="object-contain w-[50px]" alt="UploadResume" />
                <h1 className="text-heading">Edit Resume</h1>
                <p className="text-main text-xs">
                Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore.
                flex-wrap
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MyResume;
