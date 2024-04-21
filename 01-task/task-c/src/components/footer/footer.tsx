import tanker from "/public/tanker.png";
import warehouse from "/public/warehouse.png";
import containers from "/public/containers.png";
import Card from "./card";

function Footer() {
  const cardItems = [
    { imgSrc: tanker, alt: "Танкер с опасни товари", text: "Опасни товари(ADR)" },
    { imgSrc: warehouse, alt: "Човек в хладилен склад", text: "Хладилен транспорт" },
    { imgSrc: containers, alt: "Пристанище с контейнери", text: "Извънгабаритни товари" },
  ]
  return (
    <footer className="container mx-auto px-6 py-10 md:py-24">
      <h3 className="text-center max-w-[1290px] mx-auto h3-heading pb-16 lg:text-left">Други услуги</h3>
      <div className="flex flex-col justify-center items-center gap-6 lg:flex-row">
        {cardItems.map((c) => <Card key={c.text} imgSrc={c.imgSrc} alt={c.alt} text={c.text} />)}
      </div>
    </footer>
  )
}

export default Footer