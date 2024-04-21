import Image, { StaticImageData } from "next/image";

interface ICardProps {
  imgSrc: StaticImageData,
  alt: string,
  text: string
}

function Card({ imgSrc, alt, text }: ICardProps) {
  return (
    <div className="flex flex-col gap-8">
      <a className=" hover:bg-black rounded-2xl" href="#">
        <Image className="transition-all duration-200 hover:opacity-75 rounded-xl" src={imgSrc} width={416} height={364} alt={alt} />
      </a>
      <h4 className="font-grotesk font-semibold text-center text-xl tracking-tight lg:text-2xl lg:text-left">{text}</h4>
    </div>
  )
}

export default Card