import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimalCat from "@/assets/images/animal_category.png";

const CategoriesMobCarousel = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    speed: 2000,
    cssEase: "linear",
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
    <div className="container mx-auto max-w-[95%] space-x-10 2xl:max-w-[84%]">
      <Slider className="" {...settings}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="bg-white pl-5 h-[120px] !w-[90%] py-6 pr-4 justify-center  rounded-md font-[400] flex items-center"
          >
            <div className="flex flex-col gap-y-3 items-center">
              <img
                src={AnimalCat}
                alt="AnimalCat"
                width={26}
                height={26}
                className="object-contain"
              />
              <p className="text-main font-[500] text-[14px]">Animals/Pets Fun</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoriesMobCarousel;
