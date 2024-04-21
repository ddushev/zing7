import Image from "next/image"
import truck from "/public/truck.png";

function Hero() {
  return (
    <section className="flex-col-container">
      <div className="flex justify-center">
        <h1 className="font-grotesk text-4xl tracking-tighter text-center mb-8 px-5 w-[930px] md:mb-16 md:text-6xl lg:text-7xl">Гъвкави решения за сухопътен транспорт за всеки клиент</h1>
      </div>
      <div className="flex justify-center">
        <Image className="max-w-[85%]" src={truck} width={969} height={690} priority alt="Камион" />
      </div>
    </section>
  )
}

export default Hero