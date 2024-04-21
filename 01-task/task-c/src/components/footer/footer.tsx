import Image from "next/image";
import tanker from "/public/tanker.png";
import warehouse from "/public/warehouse.png";
import containers from "/public/containers.png";

function Footer() {
  return (
    <footer className="container mx-auto px-6 py-10 md:py-24">
      <h3 className="text-center max-w-[1290px] mx-auto h3-heading pb-16 lg:text-left">Други услуги</h3>
      <div className="flex flex-col justify-center items-center gap-6 lg:flex-row">
        <div className="flex flex-col gap-8 ">
          <Image className="rounded-xl" src={tanker} width={416} height={364} alt="Танкер с опасни товари" />
          <h4 className="font-grotesk font-semibold text-center text-xl tracking-tight lg:text-2xl lg:text-left">Опасни товари(ADR)</h4>
        </div>
        <div className="flex flex-col gap-8">
          <Image className="rounded-xl" src={warehouse} width={416} height={364} alt="Човек в хладилен склад" />
          <h4 className="font-grotesk font-semibold text-center text-xl tracking-tight lg:text-2xl lg:text-left">Хладилен транспорт</h4>
        </div>
        <div className="flex flex-col gap-8">
          <Image className="rounded-xl" src={containers} width={416} height={364} alt="Пистанище с контейнери" />
          <h4 className="font-grotesk font-semibold text-center text-xl tracking-tight lg:text-2xl lg:text-left">Извънгабаритни товари</h4>
        </div>
      </div>
    </footer>
  )
}

export default Footer