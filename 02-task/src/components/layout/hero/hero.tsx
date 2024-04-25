import PrimaryButton from '@/components/ui/primaryButton'
import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <section className="bg-zinc-100">
      <div className="relative outer-container">
        <div className="flex flex-col gap-10 items-center px-4 mx-auto lg:max-w-[1140px] 2xl:flex-row">
          <div className="flex flex-col items-center gap-16 text-center 2xl:text-left 2xl:md:w-1/2 2xl:items-baseline">
            <div className="flex flex-col gap-10 sm:max-2xl:w-[80%]">
              <h1 className="text-primary text-[50px] -tracking-[0.9px] leading-[74px] sm:text-[64px] font-bold 2xl:w-[640px] ">
                Bringing companies and customers together, anywhere
              </h1>
              <p className="text-base sm:text-lg 2xl:w-[478px]">
                An awesome & powefull tools for your business, increase business revenue with enterprise-grade links built to acquire and engage cutomers.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <form className="flex flex-col gap-5">
                <div className="text-lg tracking-[-0.25px] bg-white inline-block p-2 rounded">
                  <input className="text-secondary p-2 focus:outline-none" type="email" name="email" id="email" placeholder="Enter your email" />
                  <div className="hidden xs:inline-block">
                    <PrimaryButton text="Try for Free" />
                  </div>
                </div>
                <div className="inline-block xs:hidden">
                  <PrimaryButton paddingY="4" text="Try for Free" />
                </div>
              </form>
              <p className="text-sm text-neutral-700 pl-3">Full access. No credit card required.</p>
            </div>
          </div>
          <div className="2xl:absolute right-0">
            <Image src="/Hero.png" width={600} height={675} alt="dashboard" priority />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero