import Banner from "@/assets/images/Banner.png";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section
      className={`bg-no-repeat bg-center bg-cover object-cover w-full max-h-[80vh] 2xl:h-[700px] 2xl:w-[1920px]  -mt-1.5`}
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <div className="relative mx-auto max-w-screen-xl 2xl:max-w-screen-2xl  px-4 py-32 sm:px-6 lg:flex lg:h-screen  lg:px-8">
        <div className="max-w-xl 2xl:max-w-2xl   mt-12 ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-[600] sm:text-5xl 2xl:text-[60px] leading-7">
            <span className=" text-[#1B4C81]">Unlimited</span>{" "}
            {`Job Posts & Resumes Received`}.
          </h1>

          <p className="mt-4 font-[400] max-w-lg 2xl:text-[24px] sm:text-xl/relaxed">
            Find your dream job!
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Button className="px-5">Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
