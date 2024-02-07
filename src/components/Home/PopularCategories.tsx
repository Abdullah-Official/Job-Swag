import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AnimalCat from "@/assets/images/animal_category.png";

const PopularCategories = () => {
  return (
    <div className="h-screen bg-[#F5F5F5] flex items-center  w-full">
      <div className="container w-full space-y-10">
        <h1 className="text-heading text-center">Popular Categories</h1>
        <div className="w-full">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full "
          >
            <CarouselContent className=" hidden md:flex" >
              {Array.from({ length: 3 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="flex items-center flex-row md:flex-col gap-y-5"
                >
                  <div className="flex  gap-x-5 gap-y-6 items-center justify-center">
                    <div className="bg-white w-[200px] h-[135px] shadow-lg rounded-md font-[400] py-3 flex items-center">
                      <div className="flex flex-col gap-y-3  px-5 ">
                        <img
                          src={AnimalCat}
                          alt="AnimalCat"
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                        <p className="text-main text-[15px] pr-3 ">
                          Animals/Pets Fun
                        </p>
                      </div>
                    </div>
                    <div className="bg-white w-[200px] h-[135px] shadow-lg rounded-md font-[400] py-3 flex items-center">
                      <div className="flex flex-col gap-y-3  px-5 ">
                        <img
                          src={AnimalCat}
                          alt="AnimalCat"
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                        <p className="text-main text-[15px] pr-3 ">
                          Animals/Pets Fun
                        </p>
                      </div>
                    </div>
                    <div className="bg-white w-[200px] h-[135px] shadow-lg rounded-md font-[400] py-3 flex items-center">
                      <div className="flex flex-col gap-y-3  px-5 ">
                        <img
                          src={AnimalCat}
                          alt="AnimalCat"
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                        <p className="text-main text-[15px] pr-3 ">
                          Animals/Pets Fun
                        </p>
                      </div>
                    </div>
                    <div className="bg-white w-[200px] h-[135px] shadow-lg rounded-md font-[400] py-3 flex items-center">
                      <div className="flex flex-col gap-y-3  px-5 ">
                        <img
                          src={AnimalCat}
                          alt="AnimalCat"
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                        <p className="text-main text-[15px] pr-3 ">
                          Animals/Pets Fun
                        </p>
                      </div>
                    </div>
                    <div className="bg-white w-[200px] h-[135px] shadow-lg rounded-md font-[400] py-3 flex items-center">
                      <div className="flex flex-col gap-y-3  px-5 ">
                        <img
                          src={AnimalCat}
                          alt="AnimalCat"
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                        <p className="text-main text-[15px] pr-3 ">
                          Animals/Pets Fun
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex  gap-x-5 gap-y-6 items-center justify-center">
                    <div className="bg-white w-[200px] h-[135px] shadow-lg rounded-md font-[400] py-3 flex items-center">
                      <div className="flex flex-col gap-y-3  px-5 ">
                        <img
                          src={AnimalCat}
                          alt="AnimalCat"
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                        <p className="text-main text-[15px] pr-3 ">
                          Animals/Pets Fun
                        </p>
                      </div>
                    </div>
                    <div className="bg-white w-[200px] h-[135px] shadow-lg rounded-md font-[400] py-3 flex items-center">
                      <div className="flex flex-col gap-y-3  px-5 ">
                        <img
                          src={AnimalCat}
                          alt="AnimalCat"
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                        <p className="text-main text-[15px] pr-3 ">
                          Animals/Pets Fun
                        </p>
                      </div>
                    </div>
                    <div className="bg-white w-[200px] h-[135px] shadow-lg rounded-md font-[400] py-3 flex items-center">
                      <div className="flex flex-col gap-y-3  px-5 ">
                        <img
                          src={AnimalCat}
                          alt="AnimalCat"
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                        <p className="text-main text-[15px] pr-3 ">
                          Animals/Pets Fun
                        </p>
                      </div>
                    </div>
                    <div className="bg-white w-[200px] h-[135px] shadow-lg rounded-md font-[400] py-3 flex items-center">
                      <div className="flex flex-col gap-y-3  px-5 ">
                        <img
                          src={AnimalCat}
                          alt="AnimalCat"
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                        <p className="text-main text-[15px] pr-3 ">
                          Animals/Pets Fun
                        </p>
                      </div>
                    </div>
                    <div className="bg-white w-[200px] h-[135px] shadow-lg rounded-md font-[400] py-3 flex items-center">
                      <div className="flex flex-col gap-y-3  px-5 ">
                        <img
                          src={AnimalCat}
                          alt="AnimalCat"
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                        <p className="text-main text-[15px] pr-3 ">
                          Animals/Pets Fun
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex  gap-x-5 gap-y-6 items-center justify-center">
                    <div className="bg-white w-[200px] h-[135px] shadow-lg rounded-md font-[400] py-3 flex items-center">
                      <div className="flex flex-col gap-y-3  px-5 ">
                        <img
                          src={AnimalCat}
                          alt="AnimalCat"
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                        <p className="text-main text-[15px] pr-3 ">
                          Animals/Pets Fun
                        </p>
                      </div>
                    </div>
                    <div className="bg-white w-[200px] h-[135px] shadow-lg rounded-md font-[400] py-3 flex items-center">
                      <div className="flex flex-col gap-y-3  px-5 ">
                        <img
                          src={AnimalCat}
                          alt="AnimalCat"
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                        <p className="text-main text-[15px] pr-3 ">
                          Animals/Pets Fun
                        </p>
                      </div>
                    </div>
                    <div className="bg-white w-[200px] h-[135px] shadow-lg rounded-md font-[400] py-3 flex items-center">
                      <div className="flex flex-col gap-y-3  px-5 ">
                        <img
                          src={AnimalCat}
                          alt="AnimalCat"
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                        <p className="text-main text-[15px] pr-3 ">
                          Animals/Pets Fun
                        </p>
                      </div>
                    </div>
                    <div className="bg-white w-[200px] h-[135px] shadow-lg rounded-md font-[400] py-3 flex items-center">
                      <div className="flex flex-col gap-y-3  px-5 ">
                        <img
                          src={AnimalCat}
                          alt="AnimalCat"
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                        <p className="text-main text-[15px] pr-3 ">
                          Animals/Pets Fun
                        </p>
                      </div>
                    </div>
                    <div className="bg-white w-[200px] h-[135px] shadow-lg rounded-md font-[400] py-3 flex items-center">
                      <div className="flex flex-col gap-y-3  px-5 ">
                        <img
                          src={AnimalCat}
                          alt="AnimalCat"
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                        <p className="text-main text-[15px] pr-3 ">
                          Animals/Pets Fun
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                
              ))}
            </CarouselContent>
            <CarouselContent className="flex md:hidden">
            <CarouselItem
                  className="flex items-center flex-row md:flex-col gap-5"
                >
                    <div className="bg-white w-[200px] h-[135px] shadow-lg rounded-md font-[400] py-3 flex items-center">
                      <div className="flex flex-col gap-y-3  px-5 ">
                        <img
                          src={AnimalCat}
                          alt="AnimalCat"
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                        <p className="text-main text-[15px] pr-3 ">
                          Animals/Pets Fun
                        </p>
                      </div>
                    </div>
                    <div className="bg-white w-[200px] h-[135px] shadow-lg rounded-md font-[400] py-3 flex items-center">
                      <div className="flex flex-col gap-y-3  px-5 ">
                        <img
                          src={AnimalCat}
                          alt="AnimalCat"
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                        <p className="text-main text-[15px] pr-3 ">
                          Animals/Pets Fun
                        </p>
                      </div>
                    </div>
                    <div className="bg-white w-[200px] h-[135px] shadow-lg rounded-md font-[400] py-3 flex items-center">
                      <div className="flex flex-col gap-y-3  px-5 ">
                        <img
                          src={AnimalCat}
                          alt="AnimalCat"
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                        <p className="text-main text-[15px] pr-3 ">
                          Animals/Pets Fun
                        </p>
                      </div>
                    </div>
                    <div className="bg-white w-[200px] h-[135px] shadow-lg rounded-md font-[400] py-3 flex items-center">
                      <div className="flex flex-col gap-y-3  px-5 ">
                        <img
                          src={AnimalCat}
                          alt="AnimalCat"
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                        <p className="text-main text-[15px] pr-3 ">
                          Animals/Pets Fun
                        </p>
                      </div>
                    </div>
                    <div className="bg-white w-[200px] h-[135px] shadow-lg rounded-md font-[400] py-3 flex items-center">
                      <div className="flex flex-col gap-y-3  px-5 ">
                        <img
                          src={AnimalCat}
                          alt="AnimalCat"
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                        <p className="text-main text-[15px] pr-3 ">
                          Animals/Pets Fun
                        </p>
                      </div>
                    </div>
                  
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
