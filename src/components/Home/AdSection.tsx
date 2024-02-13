import Ad1 from "@/assets/images/ad1.png";
import Ad2 from "@/assets/images/ad2.png";
import Ad3 from "@/assets/images/ad3.png";

const AdSection = () => {
  return (
    <div className="container">
        <div className="flex flex-wrap md:flex-row sm:justify-evenly gap-y-5 justify-center flex-col gap-x-2 ">
            <div>
                <img src={Ad1} className="object-contain w-full h-[300px] " alt="ad1" />
            </div>
            <div>
                <img src={Ad2} className="object-contain w-full h-[300px] " alt="ad2" />
            </div>
            <div>
                <img src={Ad3} className="object-contain w-full h-[300px] " alt="ad3" />
            </div>
        </div>
    </div>
  )
}

export default AdSection