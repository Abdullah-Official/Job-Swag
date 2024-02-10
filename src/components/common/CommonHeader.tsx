
interface CommonHeaderProps {
    title: string;
    bannerImg: string;
  }

const CommonHeader = ({title, bannerImg}: CommonHeaderProps) => {
  return (
   <>
    <section
    className={`hidden md:flex items-center justify-center bg-no-repeat bg-center bg-cover h-[65vh] common-header`}
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
        <h3 className="text-white font-[600] text-[40px]">{title}</h3>
    </section>
    <section
    className={` md:hidden flex items-center justify-center bg-no-repeat bg-center bg-cover h-[400px] `}
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
        <h3 className="text-white font-[600] text-[40px]">{title}</h3>
    </section>
   </>
  )
}

export default CommonHeader