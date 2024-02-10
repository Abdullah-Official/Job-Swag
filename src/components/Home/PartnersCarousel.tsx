import PartnerImg from "@/assets/images/partner.png";
import PartnerImg2 from "@/assets/images/partner2.png";
import PartnerImg3 from "@/assets/images/partner3.png";
import PartnerImg4 from "@/assets/images/partner4.png";
import PartnerImg5 from "@/assets/images/partner5.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

const PartnersCarousel = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplaySpeed: 3000,
    arrows: true,
    dots: false,
    pauseOnHover: true,
    prevArrow: <ArrowLeft color="white" />,
    nextArrow: <ArrowRight color="white" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
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
    <div className="container max-w-[95%] !my-20 md:max-w-[80%]">
      <Slider {...settings}>
        {/* partner_card */}
        <div>
          <div className="flex items-center justify-center">
            <img
              src={PartnerImg}
              alt=""
              className="bg-white py-4 rounded-lg px-5 shadow-xl  w-[190px] object-contain h-[80px] "
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <img
              src={PartnerImg2}
              alt=""
              className="bg-white py-4 rounded-lg px-5 shadow-xl  w-[190px] object-contain h-[80px] "
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <img
              src={PartnerImg3}
              alt=""
              className="bg-white py-4 rounded-lg px-5 shadow-xl  w-[190px] object-contain h-[80px] "
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <img
              src={PartnerImg4}
              alt=""
              className="bg-white py-4 rounded-lg px-5 shadow-xl  w-[190px] object-contain h-[80px] "
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <img
              src={PartnerImg5}
              alt=""
              className="bg-white py-4 rounded-lg px-5 object-contain shadow-xl  w-[190px] h-[80px] "
            />
          </div>
        </div>

        {/* Add more partner cards here */}
      </Slider>
    </div>
  );
};

export default PartnersCarousel;
