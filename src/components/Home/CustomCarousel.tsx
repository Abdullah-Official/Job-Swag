import { categoriesData } from "@/utils/categoriesData";


interface CarouselProps {
    currentIndex: number
}

const CustomCarousel = ({currentIndex}: CarouselProps) => {
 

  return (
    <div className="custom-slider w-full relative">
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <div className="grid grid-cols-5 gap-x-6 gap-y-4">
          {categoriesData
            .slice(currentIndex * 15, (currentIndex + 1) * 15)
            .map((item, index) => (
              <div className="slider-item" key={index}>
                <div className="bg-white  h-[126px] w-[200px] 2xl:w-full 2xl:h-[190px] partner_card mb-2 rounded-md font-[400] py-3 flex items-center">
                  <div className="flex flex-col px-4 !max-w-[90%] ">
                    <img
                      src={item.img}
                      alt={item.img}
                      width={26}
                      height={26}
                      className="object-contain 2xl:w-[41px] h-[51px]"
                    />
                    <p className="text-main font-[500]  text-[13px] 2xl:text-[22px] ">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
     
    </div>
  );
};

export default CustomCarousel;
