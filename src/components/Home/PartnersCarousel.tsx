import PartnerImg from "@/assets/images/partner.png";
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
        prevArrow: <ArrowLeft  color="white"  />,
        nextArrow: <ArrowRight  color="white"  />,
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
    <div className="container max-w-[95%] !mt-10 md:max-w-[80%]">
      <Slider {...settings}>
      
        <div>
          <div className="flex items-center justify-center">
          <img
            src={PartnerImg}
            alt=""
            className="bg-white py-4 rounded-lg px-5 shadow-lg w-[190px] h-[80px] "
          />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
          <img
            src={PartnerImg}
            alt=""
            className="bg-white py-4 rounded-lg px-5 shadow-lg w-[190px] h-[80px] "
          />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
          <img
            src={PartnerImg}
            alt=""
            className="bg-white py-4 rounded-lg px-5 shadow-lg w-[190px] h-[80px] "
          />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
          <img
            src={PartnerImg}
            alt=""
            className="bg-white py-4 rounded-lg px-5 shadow-lg w-[190px] h-[80px] "
          />
          </div>
        </div>
       
        {/* Add more partner cards here */}
      </Slider>
    </div>
  );
};

export default PartnersCarousel;
