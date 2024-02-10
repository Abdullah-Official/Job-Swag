import CommonHeader from "@/components/common/CommonHeader";
import Banner from "@/assets/images/about-banner.png";
import About1 from "@/assets/images/about1.png";
import About2 from "@/assets/images/about2.png";
import About3 from "@/assets/images/about3.png";
import AboutCta from "@/assets/images/about-cta.png";

const About = () => {
  return (
    <div className="mb-20 -mt-2">
      <CommonHeader title="About Us" bannerImg={Banner} />
      <div className="md:container mt-16">
        <div className="container w-full space-y-5 sm:space-y-10">
          <div className="flex flex-col md:flex-row ">
            <div className="w-full p-4 ">
              <img
                src={About1}
                alt="About1"
                className="object-contain w-full  !rounded-3xl"
              />
            </div>
            <div className="w-full p-4 flex flex-col justify-center gap-y-4">
              <div className="space-y-2">
                <h3 className="text-heading">How It All Began</h3>
                <p className="text-main_green font-[400] text-[18px]">
                  We posted only one job..
                </p>
              </div>
              <div>
                <p className="text-[#888888] text-[16px]">
                  The costs mounted to hundreds of dollars extremely fast. That
                  was the moment we decided to make a difference and lower these
                  unnecessary high costs for everyone. Analyzing other websites’
                  costs, a single job post can cost anywhere between $10 and
                  $1,499.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse ">
            <div className="w-full p-4 ">
              <img
                src={About2}
                alt="About2"
                className="object-contain w-full  !rounded-3xl"
              />
            </div>
            <div className="w-full p-4 flex flex-col justify-center gap-y-4">
              <div className="space-y-2">
                <h3 className="text-heading">Why choose JobsSwag?</h3>
              </div>
              <div>
                <p className="text-[#888888] text-[16px]">
                  While JobsSwag.com’s price remains $49.99 no matter how many
                  jobs you post for an entire year, on other websites the cost
                  is for only one job posting and for only 30 days. Analyzing
                  other websites’ costs, a single job post can cost anywhere
                  between $10 and $1,499.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row bg-[#C2DBF9] !my-28 rounded-3xl md:h-[350px]">
            <div className="w-full p-4 flex justify-center items-center ">
              <img
                src={AboutCta}
                alt="About CTA"
                className="object-contain h-[300px] md:h-[445px] -mt-28 "
              />
            </div>
            <div className="w-full p-4 flex flex-col justify-center gap-y-4">
              <div className="space-y-2">
                <h3 className="text-heading">Who Are We?</h3>
              </div>
              <div>
                <p className="text-[#888888] text-[16px] md:mr-20">
                  JobsSwag.com is the solution to the unnecessary high cost of
                  posting jobs and hiring employees. We are up to 100 times more
                  affordable per single job post, per month. Imagine the savings
                  per year!
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row ">
            <div className="w-full p-4 ">
              <img
                src={About3}
                alt="About3"
                className="object-contain w-full h-full !rounded-3xl"
              />
            </div>
            <div className="w-full p-4 flex flex-col justify-center gap-y-4">
              <div className="space-y-2">
                <h3 className="text-heading">Who Do We Serve?</h3>
                <p className="text-main_green font-[400] text-[18px]">
                  We serve you!
                </p>
              </div>
              <div>
                <p className="text-[#888888] text-[16px]">
                  We are dedicated to promoting your career as a job seeker
                  and/or your company, business, or institution as an employer.
                  JobsSwag.com is about you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
