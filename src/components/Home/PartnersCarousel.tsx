import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PartnerImg from "@/assets/images/partner.png";
import PartnerImg2 from "@/assets/images/partner2.png";
import PartnerImg3 from "@/assets/images/partner3.png";
import PartnerImg4 from "@/assets/images/partner4.png";
import PartnerImg5 from "@/assets/images/partner5.png";

import { ArrowLeft, ArrowRight } from "lucide-react";

const PartnersCarousel = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    arrows: true,
    dots: false,
    pauseOnHover: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    cssEase: "linear",
    prevArrow: <ArrowLeft color="white" />,
    nextArrow: <ArrowRight color="white" />,
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto  max-w-[95%]  2xl:max-w-[84%] ">
      <Slider className="lg:container  " {...settings}>
        {/* partner_card */}
        <div className="pl-5 my-5">
          <div className="flex bg-white py-5 rounded-lg px-5 partner_card 2xl:max-w-[256px] h-[90px] 2xl:h-[113px] items-center justify-center">
            <img src={PartnerImg} alt="" className="   object-contain " />
          </div>
        </div>
        <div className="pl-5 my-5">
          <div className="flex bg-white py-5 rounded-lg px-5 partner_card 2xl:max-w-[256px] h-[90px] 2xl:h-[113px] items-center justify-center">
            <img src={PartnerImg2} alt="" className="   object-contain " />
          </div>
        </div>
        <div className="pl-5 my-5">
          <div className="flex bg-white py-5 rounded-lg px-5 partner_card 2xl:max-w-[256px] h-[90px] 2xl:h-[113px] items-center justify-center">
            <img src={PartnerImg3} alt="" className="   object-contain " />
          </div>
        </div>
        <div className="pl-5 my-5">
          <div className="flex bg-white py-5 rounded-lg px-5 partner_card 2xl:max-w-[256px] h-[90px] 2xl:h-[113px] items-center justify-center">
            <img src={PartnerImg4} alt="" className="   object-contain " />
          </div>
        </div>
        <div className="pl-5 my-5">
          <div className="flex bg-white py-5 rounded-lg px-5 partner_card 2xl:max-w-[256px] h-[90px] 2xl:h-[113px] items-center justify-center">
            <img src={PartnerImg5} alt="" className="   object-contain  " />
          </div>
        </div>

        {/* Add more partner cards here */}
      </Slider>
    </div>
  );
};

export default PartnersCarousel;
