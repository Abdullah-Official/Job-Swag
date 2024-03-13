import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MoveLeft, MoveRight } from "lucide-react";
import CategoriesMobCarousel from "./CateogriesMobCarousel";
import CategoriesImg from "../../assets/images/cat.png"

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
          <div className="flex items-center justify-center">
            <img src={CategoriesImg} alt="CategoriesImg" className="object-contain w-full px-20" />
          </div>
          
          <div>
          <img src={CategoriesImg} alt="CategoriesImg" className="object-contain w-full px-20" />
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
