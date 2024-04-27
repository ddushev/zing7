import Image from "next/image"

function PartnerLogos() {
  const svgList = [
    { src: "/Google.svg", width: 98, height: 32, alt: "google logo" },
    { src: "/Atlassian.svg", width: 136, height: 18, alt: "atlassian logo" },
    { src: "/Canon.svg", width: 96, height: 20, alt: "canon logo" },
    { src: "/Walmart.svg", width: 130, height: 31, alt: "walmart logo" },
    { src: "/Amazon.svg", width: 96, height: 32, alt: "amazon logo" },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-10 lg:gap-16">
      {svgList.map((svg) => <Image key={svg.alt} src={svg.src} width={0} height={0} alt={svg.alt} style={{ width: svg.width, height: "auto" }} />)}
    </div>
  )
}

export default PartnerLogos