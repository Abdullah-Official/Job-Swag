import { PlusIcon } from "lucide-react";

interface AddComponentPropTypes {
  text: string;
}

const AddComponent = ({ text }: AddComponentPropTypes) => {
  return (
    <div className="flex gap-3 items-center cursor-pointer mt-8">
      <div className="bg-primary  p-1 flex items-center justify-center rounded-full">
        <PlusIcon size={18} className="text-white" />
      </div>
      <p className="text-sm font-[500] text-[#7C7C7C] 2xl:text-[16px]">{text}</p>
    </div>
  );
};

export default AddComponent;
