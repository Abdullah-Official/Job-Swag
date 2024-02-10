import Banner from "@/assets/images/Banner.png";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section
      className={`bg-no-repeat bg-center bg-cover h-auto md:h-[80vh] -mt-2`}
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen  lg:px-8">
        <div className="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-bold sm:text-5xl">
            <span className="font-bold text-[#1B4C81]">Unlimited</span>{" "}
            {`Job Posts & Resumes Received`}.
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Find your dream job!
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Button className="px-8">Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
