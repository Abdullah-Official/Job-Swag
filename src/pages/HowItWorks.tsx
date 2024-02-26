import CommonHeader from "@/components/common/CommonHeader";
import Banner from "@/assets/images/how-banner.png";
import How1 from "@/assets/images/how1.png";
import How2 from "@/assets/images/how2.png";
import How3 from "@/assets/images/how3.png";

const HowItWorks = () => {
  return (
    <div className="mb-20 -mt-1">
      <CommonHeader title="How It Works" bannerImg={Banner} />
      <div className="md:container mt-16 space-y-12">
        <div className="text-center space-y-4">
          <h3 className="text-heading">How Do We Do It?</h3>
          <p className="text-[#888888] font-[400] text-[15px]">
            The services on JobsSwag.com are offered to three groups of possible
            users:
          </p>
        </div>
        <div className="container w-full space-y-5 sm:space-y-12">
          <div className="flex flex-col md:flex-row gap-5 ">
            <div className="w-full p-4 ">
              <img
                src={How1}
                alt="How1"
                className="object-contain w-full  !rounded-3xl"
              />
            </div>
            <div className="w-full p-4 flex flex-col justify-center gap-y-4">
              <div>
                <h3 className="text-heading">Employers</h3>
              </div>
              <div>
                <ul className="list-disc list-outside space-y-2 md:ml-3 !text-main_green">
                  <li className="ml-1 text-[14px]">
                    <span className="text-[#888888] font-[400]">
                      You pay only $49.99 per year.
                    </span>
                  </li>
                  <li className="ml-1 text-[14px]">
                    <span className="text-[#888888] font-[400]">
                      You enjoy unlimited job postings.
                    </span>
                  </li>
                  <li className="ml-1 text-[14px]">
                    <span className="text-[#888888] font-[400]">
                      You enjoy unlimited applicant resumes/CVs receives.
                    </span>
                  </li>
                  <li className="ml-1 text-[14px]">
                    <span className="text-[#888888] font-[400]">
                      You enjoy unlimited access to job seekers’ profiles.
                    </span>
                  </li>
                  <li className="ml-1 text-[14px]">
                    <span className="text-[#888888] font-[400]">
                      You create a profile to promote yourself that includes
                      your logo, links to your website pages, a description of
                      your business, & much more.
                    </span>
                  </li>
                  <li className="ml-1 text-[14px]">
                    <span className="text-[#888888] font-[400]">
                      Be matched with job seekers that meet your needs.
                    </span>
                  </li>
                  <li className="ml-1 text-[14px]">
                    <span className="text-[#888888] font-[400]">
                      Enjoy analytical data about your job posts.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-5 ">
            <div className="w-full p-4 ">
              <img
                src={How2}
                alt="How2"
                className="object-contain w-full  !rounded-3xl"
              />
            </div>
            <div className="w-full p-4 flex flex-col justify-center gap-y-4">
              <div>
                <h3 className="text-heading">Job Seekers</h3>
              </div>
              <div>
                <ul className="list-disc list-outside md:ml-3 space-y-2 !text-main_green">
                  <li className="ml-1 text-[14px]">
                    <span className="text-[#888888] font-[400]">
                      JobsSwag.com is completely FREE for job seekers.
                    </span>
                  </li>
                  <li className="ml-1 text-[14px]">
                    <span className="text-[#888888] font-[400]">
                      Search for job using our extremely advanced search engine.
                    </span>
                  </li>
                  <li className="ml-1 text-[14px]">
                    <span className="text-[#888888] font-[400]">
                      Apply to unlimited jobs.
                    </span>
                  </li>
                  <li className="ml-1 text-[14px]">
                    <span className="text-[#888888] font-[400]">
                      Create a profile that represents you the best.
                    </span>
                  </li>
                  <li className="ml-1 text-[14px]">
                    <span className="text-[#888888] font-[400]">
                      Upload your resume and/or CV (both are recommended).
                    </span>
                  </li>
                  <li className="ml-1 text-[14px]">
                    <span className="text-[#888888] font-[400]">
                      Use JobsSwag.com to create a resume or CV.
                    </span>
                  </li>
                  <li className="ml-1 text-[14px]">
                    <span className="text-[#888888] font-[400]">
                      Invite employers to notice you.
                    </span>
                  </li>
                  <li className="ml-1 text-[14px]">
                    <span className="text-[#888888] font-[400]">
                      Enjoy analytics about your profile viewers.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 ">
            <div className="w-full p-4 ">
              <img
                src={How3}
                alt="How3"
                className="object-contain w-full  !rounded-3xl"
              />
            </div>
            <div className="w-full p-4 flex flex-col justify-center gap-y-4">
              <div>
                <h3 className="text-heading">Influencers (Content Creators)</h3>
              </div>
              <div>
                <ul className="list-disc list-outside md:ml-3 space-y-2 !text-main_green">
                  <li className="ml-1 text-[14px]">
                    <span className="text-[#888888] font-[400]">
                      You can create professional content.
                    </span>
                  </li>
                  <li className="ml-1 text-[14px]">
                    <span className="text-[#888888] font-[400]">
                      You can promote yourself.
                    </span>
                  </li>
                  <li className="ml-1 text-[14px]">
                    <span className="text-[#888888] font-[400]">
                      You can sell your services.
                    </span>
                  </li>
                  <li className="ml-1 text-[14px]">
                    <span className="text-[#888888] font-[400]">
                      Bronze influencers (content creators) pay $49.99/month.
                    </span>
                  </li>
                  <li className="ml-1 text-[14px]">
                    <span className="text-[#888888] font-[400]">
                      Silver influencers (content creators) pay $150/month.
                    </span>
                  </li>
                  <li className="ml-1 text-[14px]">
                    <span className="text-[#888888] font-[400]">
                      Gold influencers (content creators) pay $300/month.
                    </span>
                  </li>
                  <li className="ml-1 text-[14px]">
                    <span className="text-[#888888] font-[400]">
                      Platinum (unlimited) influencers (content creators) pay
                      $450/month.
                    </span>
                  </li>
                  <li className="ml-1 text-[14px]">
                    <span className="text-[#888888] font-[400]">
                      Anyone can be an influencer.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
