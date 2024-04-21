'use client';
import { MdOutlineEmail } from "react-icons/md";

import { useState } from "react";

function Cta() {
  const [phone, setPhone] = useState('');
  return (
    <section className="px-6 bg-grayCtaBg">
      <div className="text-white flex flex-col items-center text-center gap-12 max-w-[700px] mx-auto py-28">
        <h2 className="font-grotesk tracking-tighter font-semibold text-4xl md:text-6xl lg:text-7xl">Готови ли сте да работим заедно?</h2>
        <p className="text-[18px] lg:text-[20px]">Оставете вашият телефон и ние ще се свържем с вас, за да отговорим на всички въпроси</p>
        <form onSubmit={() => alert(`Oчаквайте нашето обаждане на номер ${phone}`)}>
          <div className="relative mb-8 inline-block min-[449px]:mb-0">
            <MdOutlineEmail className="absolute text-grayInputText top-6 left-4" />
            <input className=" text-grayInputText p-5 pl-10 rounded-lg min-[449px]:rounded-r-none tracking-tight" value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Мобилен телефон" />
          </div>
          <button className="w-[280px] text-greenish font-semibold bg-yellowSubmitBtn tracking-tight rounded-lg p-5 min-[449px]:rounded-l-none min-[449px]:w-auto" type="submit">Изпрати</button>
        </form>
      </div>
    </section>
  )
}

export default Cta