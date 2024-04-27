import ServiceCard from "../ui/serviceCard"

function Services() {
  const cardDetails = [
    { src: "/Boy.png", width: 70, height: 72, alt: "face-icon", heading: "Lead customers to happiness", text: "Roooby Support helps you provide personalized support when and where customers need it, so customers stay happy." },
    { src: "/Laptop.png", width: 72, height: 56, alt: "laptop-icon", heading: "Support your support", text: "Productive agents are happy agents. Give them all the support tools and information they need to best serve your customers." },
    { src: "/Light.png", width: 72, height: 72, alt: "light-icon", heading: "Grow without growing pains", text: "Our software is powerful enough to handle the most complex business, yet flexible enough to scale with you as you grow." },
  ]
  return (
    <section className="bg-primary">
      <div className="outer-container py-20 lg:py-32">
        <div className="inner-container text-white">
          <div className="flex flex-col items-center gap-5 text-center mb-20 lg:flex-row lg:text-left">
            <h2 className="text-5xl font-bold pb-14 sm:max-2xl:w-[80%]">Here&apos;s how Roooby can benefit your business</h2>
            <p className="text-lg font-normal max-w-[490px]">Build more meaningful and lasting relationships — better understand their needs, identify new opportunities to help, address any problems faster.</p>
          </div>
          <div className="flex gap-3">
            {cardDetails.map((c) => <ServiceCard key={c.alt} src={c.src} width={c.width}
              alt={c.alt} height={c.height} heading={c.heading} text={c.text} />)}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Services