import Ad1 from "@/assets/images/ad1.png";
import Ad2 from "@/assets/images/ad2.png";
import Ad3 from "@/assets/images/ad3.png";

const AdSection = () => {
  return (
    <div className=" my-10 container mx-auto">
      <section className="py-8  flex justify-center items-center  ">
        {" "}
        {/* Added lg:justify-between */}
        <div className="flex items-center justify-center  ">
          <div className="grid grid-cols-1 gap-x-9 gap-y-5 md:grid-cols-2 justify-center  lg:grid-cols-3 w-full">
            <div>
              <img
                src={Ad1}
                className="2xl:max-w-[500px] w-full max-h-[400px] "
                alt="ad1"
              />
            </div>
            <div>
              <img
                src={Ad2}
                className="2xl:max-w-[500px] w-full max-h-[400px] "
                alt="ad2"
              />
            </div>
            <div>
              <img
                src={Ad3}
                className="2xl:max-w-[500px] w-full max-h-[400px] "
                alt="ad3"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdSection;
