import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimalCat from "@/assets/images/animal_category.png";
import { MoveLeft, MoveRight } from "lucide-react";
import CategoriesMobCarousel from "./CateogriesMobCarousel";


const PopularCategories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableHeight: true,
    prevArrow: <MoveLeft color="white" size={0} />,
    nextArrow: <MoveRight color="white" size={0} />,
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
          slidesPerRow: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          slidesPerRow: 5,
        },
      },
    ],
    customPaging: () => (
      <div className={`bg-primary rounded-full w-2.5 h-2.5 mt-4 `}></div>
    ),
  };

  return (
    <div className=" bg-[#F5F5F5] w-full py-20  flex flex-col justify-center items-center  gap-y-3">
      <h1 className="text-heading text-[22px] sm:!text-[28px] 2xl:!text-[50px] text-center font-[600]">Popular Categories</h1>

      <div className=" w-[90%] hidden lg:block 2xl:w-[1500px] mt-8">
        <Slider {...settings}>
          {/* First Slide */}
          <div className="space-y-3 py-2 h-auto w-full">
            {Array.from({ length: 1 }).map((_, ind) => (
              <div key={ind} className="flex justify-center gap-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-white w-[180px] h-[120px] 2xl:w-[250px] 2xl:h-[190px] partner_card mb-2 rounded-md font-[400] py-3 flex items-center"
                  >
                    <div className="flex flex-col gap-y-3  px-6 ">
                      <img
                        src={AnimalCat}
                        alt="AnimalCat"
                        width={26}
                        height={26}
                        className="object-contain 2xl:w-[41px] h-[51px]"
                      />
                      <p className="text-main font-[500] text-[14px] pr-3 2xl:text-[22px] ">
                        Animals/Pets Fun
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

        </Slider>
      </div>
      <div className=" w-[90%] lg:hidden block 2xl:w-[1500px] mt-8">
          <CategoriesMobCarousel />
      </div>
    </div>
  );
};

export default PopularCategories;
