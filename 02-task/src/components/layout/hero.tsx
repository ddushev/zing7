"use client";
import React, { FormEvent, useState } from 'react'
import PrimaryButton from '@/components/ui/primaryButton'
import Image from 'next/image'
import toast from 'react-hot-toast'
import isEmailValid from '@/utils/isEmailValid';
import PartnerLogos from '../ui/partnerLogos';

function Hero() {
  const [email, setEmail] = useState("");
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEmailValid(email)) {
      setEmail("");
      return toast.success("Check your email");
    }
    return toast.error("Enter valid email");
  }
  return (
    <section className="bg-zinc-100">
      <div className="outer-container relative">
        <div className="inner-container flex flex-col gap-10 items-center mb-16 2xl:mb-32 2xl:flex-row">
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
              <form onSubmit={submitHandler} className="flex flex-col gap-5">
                <div className="text-lg tracking-[-0.25px] bg-white inline-block p-2 rounded">
                  <input className="text-secondary p-2 focus:outline-none" type="email" name="email" id="email" placeholder="Enter your email"
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                  <div className="hidden xs:inline-block">
                    <PrimaryButton text="Try for Free" submit />
                  </div>
                </div>
                <div className="inline-block xs:hidden">
                  <PrimaryButton paddingY="4" text="Try for Free" submit />
                </div>
              </form>
              <p className="text-sm text-neutral-700 pl-3">Full access. No credit card required.</p>
            </div>
          </div>
          <div className="2xl:absolute right-0">
            <Image src="/Hero.png" width={600} height={675} alt="dashboard" priority />
          </div>
        </div>
        <div className="inner-container flex flex-wrap justify-center items-center gap-12 pb-10 lg:gap-16 lg:pb-20">
          <p className="tracking-[-0.2px] font-medium">Trusted by 1,000+ customers</p>
          <PartnerLogos />
        </div>
      </div>
    </section>
  )
}

export default Hero