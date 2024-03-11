import CommonHeader from "@/components/common/CommonHeader";
import Banner from "@/assets/images/advertise-banner.png";
import CommonGrid from "@/components/common/CommonGrid";
import BlogImg from "@/assets/images/blog-adv.png";
import LogoImg from "@/assets/images/logo-adv.png";
import YtImg from "@/assets/images/yt-adv.png";
import TickerImg from "@/assets/images/ticker-adv.png";
import JobImg from "@/assets/images/job-adv.png";
import VideoImg from "@/assets/images/video-adv.png";
import HomepageImg from "@/assets/images/banner-adv.png";

const Advertise = () => {
  return (
    <div className="mb-20 -mt-1">
      <CommonHeader title="Advertise" bannerImg={Banner} />
      <div className="mx-auto my-28 2xl:w-[1600px] ">
        <div className="container  w-full space-y-5 sm:space-y-20">
          <CommonGrid
            img={BlogImg}
            heading="Blog Posts"
            btnTxt="Purchase"
            tagline="Become an influencer!"
            text={`Use our blog to get your deep and elaborated message out there about a specific service, multiple services, your company, business, or institution. You can also use your blog post to present to our users your vision, mission, values, and strategic plan. Cost: $25 one-time payment. Includes the posting of a single blog post on Job Swag for as long as the account is active or until removed. Content appears from newest to oldest.`}
          />
          <CommonGrid
            img={LogoImg}
            heading="Logo Strip"
            btnTxt="Purchase"
            tagline="Make Your Logo Out There!"
            text={`Use the logo strip at the button of the homepage to get your logo out there. Cost: $50/month. Includes the posting of a single logo in the logo strip on Job Swag for as long as the account is active, until services are ended by the customer, or until removed. Payment automatically renews every month until services are ended by the customer. Clicking on the logo itself transitions the user to a web-address of your choosing. It can be your Job Swag profile or your own website. The logo will cross the screen from one side to the other in a loop with other logos.`}
            reverseRow={true}
          />
        </div>
      </div>
      <div className="bg-[#f5f5f5] py-20 mt-20">
        <div className="container mx-auto my-28 2xl:w-[1600px] w-full space-y-5 sm:space-y-20">
          <CommonGrid
            img={TickerImg}
            heading="News Ticker"
            btnTxt="Purchase"
            tagline="A Message on the Move..."
            text={`Use the news ticker at the very top of Job Swag to send a short, quick, and focused message. Cost: $10/month. Includes the posting of a single news ticker item on Job Swag for as long as the account is active, until services are ended by the customer, or until removed. Payment automatically renews every month until services are ended by the customer. While hovering over the news ticker item will stop it, clicking on the news ticker item will send the user to a web-address of your choice.`}
          />
          <CommonGrid
            img={JobImg}
            heading="Appear on the Featured Jobs Listing"
            btnTxt="Purchase"
            tagline="Stand Out!"
            text={`Service providers on our featured providers list stand out to our users since they can be found quicker on this stand-alone page rather than needing to be found via the search engine. Cost: $25/month. Includes a single link to your profile on Job Swag that appears on the “featured” page for as long as the account is active, until services are ended by the customer, or until removed. Payment automatically renews every month until services are ended by the customer. Content appears from newest to oldest. Clicking on your provider name sends the user to your profile on Job Swag.`}
            reverseRow={true}
          />
          <CommonGrid
            img={YtImg}
            heading="Video - YouTube Channel"
            btnTxt="Purchase"
            tagline="Reach the Masses!"
            text={`Having your video on Job Swag YouTube channel will get your marketing message to the masses with the potential of millions of people being exposed to it. Cost: $50 one-time payment. Includes the posting of a single video (unlimited in length) on Job Swag YouTube channel for as long as the account is active, until services are ended by the customer, or until removed. Content appears from newest to oldest. Your video can include a link to a web-address of your choice.`}
          />
        </div>
      </div>
      <div className="mx-auto my-28 2xl:w-[1600px] mt-20">
        <div className="container w-full space-y-5 sm:space-y-20">
          <CommonGrid
            img={VideoImg}
            heading="Home Page Featured Video"
            btnTxt="Purchase"
            tagline="Be Seen, Be Heard!"
            text={`Our homepage video player is one of the first elements that our users see. Use our prime video player to grab our users' attention immediately. Cost: $50/month. Includes a single video (limited to 3 minutes in length) on Job Swag homepage video player for as long as the account is active, until services are ended by the customer, or until removed. Payment automatically renews every month until services are ended by the customer. Content appears from newest to oldest. your video can include a link to a web-address of your choice.`}
            reverseRow={true}
          />
          <CommonGrid
            img={HomepageImg}
            heading="Homepage Banner"
            btnTxt="Purchase"
            tagline="Let Us be Your Bannerman!"
            text={`Be present front and center with a sizable banner with content of your choosing. Cost: $100/month for at least 3 months at a time. Includes a single banner displayed on the homepage of Job Swag for as long as the account is active, until services are ended by the customer, or until removed. Payment automatically renews every three months until services are ended by the customer. Banners rotate through the six homepage banner locations in a loop. Clicking on the banner sends the user to a web-address of your choice.`}
          />
        </div>
      </div>
    </div>
  );
};

export default Advertise;
