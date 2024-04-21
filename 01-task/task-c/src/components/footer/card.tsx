import Image, { StaticImageData } from "next/image";

interface ICardProps {
  imgSrc: StaticImageData,
  alt: string,
  text: string
}

function Card({ imgSrc, alt, text }: ICardProps) {
  return (
    <div className="flex flex-col gap-8 ">
      <Image className="rounded-xl" src={imgSrc} width={416} height={364} alt={alt} />
      <h4 className="font-grotesk font-semibold text-center text-xl tracking-tight lg:text-2xl lg:text-left">{text}</h4>
    </div>
  )
}

export default Card