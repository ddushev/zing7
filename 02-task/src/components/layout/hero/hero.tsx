import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <section className="bg-zinc-100">
      <div className="grid grid-cols-12 mx-auto">
        <div className="flex flex-col col-span-7 col-start-3">
          <h1 className="text-primary text-[64px] -tracking-[0.9px] leading-[74px] font-bold">
            Bringing companies and customers together, anywhere
          </h1>
        </div>
        <div className="col-span-5 col-start-10">
          <Image className="" src="/Hero.png" width={482} height={675} alt="dashboard" />
        </div>
      </div>
    </section>
  )
}

export default Hero