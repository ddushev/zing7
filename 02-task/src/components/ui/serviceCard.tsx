"use client";
import cx from "classnames";
import Image from "next/image"
import { useEffect, useState } from "react";


interface IServiceCardProps {
  src: string,
  width: number,
  height: number,
  alt: string,
  heading: string,
  text: string,
}

function ServiceCard({ src, width, height, alt, heading, text }: IServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="rounded-lg w-[374px] bg-[#1E0A57] hover:bg-yellow-400 hover:text-black hover:translate-y-[-15px] hover transition-all">
      <div className="w-[90%] mx-auto mb-20">
        <div className="size-20 mt-16 mb-14">
          <Image className={isHovered ? "invert" : ""} src={src} width={width} height={height} alt={alt} style={{ width: "auto", height: "auto" }} />
        </div>
        <div className={cx("h-[1px] bg-[#54457F]", { "bg-black": isHovered })}></div>
        <h4 className="text-xl font-bold tracking-tighter-[0.38px] py-4 max-w-[284px]">
          {heading}
        </h4>
        <p className="text-base font-normal leading-[26px] max-w-[260px]">
          {text}
        </p>
      </div>

    </div >
  )
}

export default ServiceCard