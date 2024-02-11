import { Button } from "../ui/button";

interface CommonGridPropsType {
  img: string;
  text: string;
  tagline: string;
  heading: string;
  btnTxt: string;
  reverseRow?: boolean;
}

const CommonGrid = ({
  img,
  text,
  tagline,
  heading,
  btnTxt,
  reverseRow,
}: CommonGridPropsType) => {
  return (
    <div
      className={`flex flex-col gap-x-2 ${
        reverseRow ? "md:flex-row-reverse" : "md:flex-row"
      } `}
    >
      <div className="w-full p-4 ">
        <img
          src={img}
          alt={img}
          className="object-contain w-full  !rounded-3xl"
        />
      </div>
      <div className="w-full p-4 flex flex-col justify-center gap-y-4">
        <div className="space-y-2">
          <h3 className="text-heading">{heading}</h3>
          <p className="text-main_green font-[600] text-[16px] md:text-[18px]">
            {tagline}
          </p>
        </div>
        <div>
          <p className="text-[#888888] text-[14px] md:text-[16px]">{text}</p>
        </div>
        {btnTxt ? (
          <Button className="bg-primary w-[120px] mt-2 font-[400]">
            {btnTxt}
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default CommonGrid;
