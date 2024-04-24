import PrimaryButton from '@/components/ui/primaryButton'
import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <section className="bg-zinc-100">
      <div className=" container-grid px-4">
        <div className="flex flex-col gap-16 col-span-7 col-start-1">
          <div className="flex flex-col gap-10">
            <h1 className="text-primary w-[640px] text-[64px] -tracking-[0.9px] leading-[74px] font-bold">
              Bringing companies and customers together, anywhere
            </h1>
            <p className="text-lg w-[478px]">
              An awesome & powefull tools for your business, increase business revenue with enterprise-grade links built to acquire and engage cutomers.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <form>
              <div className="text-lg tracking-[-0.25px] bg-white inline-block p-2 rounded">
                <input className="text-secondary p-2 focus:outline-none" type="email" name="email" id="email" placeholder="Enter your email" />
                <PrimaryButton text="Try for Free" />
              </div>
            </form>
            <p className="text-sm text-neutral-700 pl-3">Full access. No credit card required.</p>
          </div>
        </div>
        <div className="absolute right-0 min-[1980px]:right-[10%]">
          <Image src="/Hero.png" width={452} height={675} style={{ width: "100%", height: "auto" }} alt="dashboard" priority />
        </div>
      </div>
    </section>
  )
}

export default Hero