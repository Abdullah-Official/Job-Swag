import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimalCat from "@/assets/images/animal_category.png";
import { ArrowLeft, ArrowRight } from "lucide-react";

const PopularCategories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableHeight: true,
    prevArrow: <ArrowLeft color="white" />,
    nextArrow: <ArrowRight color="white" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
          slidesPerRow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          slidesPerRow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          slidesPerRow: 1,
        },
      },
    ],
    customPaging: () => (
      <div className={`bg-primary rounded-full w-2 h-2`}></div>
    ),
  };

  return (
    <div className=" bg-[#F5F5F5] h-[100vh] hidden lg:flex flex-col justify-center items-center  gap-y-4">
      <h1 className="text-heading text-center">Popular Categories</h1>

      <div className="container">
        <Slider {...settings}>
          {/* First Slide */}
          <div className="space-y-3 h-auto py-5">
            {Array.from({ length: 3 }).map((_, ind) => (
              <div key={ind} className="flex justify-center gap-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-white w-[180px] h-[120px] shadow-lg rounded-md font-[400] py-3 flex items-center"
                  >
                    <div className="flex flex-col gap-y-3  px-5 ">
                      <img
                        src={AnimalCat}
                        alt="AnimalCat"
                        width={26}
                        height={26}
                        className="object-contain"
                      />
                      <p className="text-main text-[14px] pr-3 ">
                        Animals/Pets Fun
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Second Slide */}
          <div className="space-y-3 h-auto py-5">
            {Array.from({ length: 3 }).map((_, ind) => (
              <div key={ind} className="flex justify-center gap-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-white w-[180px] h-[120px] shadow-lg rounded-md font-[400] py-3 flex items-center"
                  >
                    <div className="flex flex-col gap-y-3  px-5 ">
                      <img
                        src={AnimalCat}
                        alt="AnimalCat"
                        width={26}
                        height={26}
                        className="object-contain"
                      />
                      <p className="text-main text-[14px] pr-3 ">
                        Animals/Pets Fun
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          {/* Add more slides as needed */}
        </Slider>
      </div>
    </div>
  );
};

export default PopularCategories;
