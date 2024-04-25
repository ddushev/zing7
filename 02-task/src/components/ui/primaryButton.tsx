import cx from "classnames";

interface IPrimaryButton {
  text: string,
  paddingY?: "2" | "4",
  bgColor?: "white" | "primary",
  submit?: boolean,
}

function PrimaryButton({ text, paddingY = "2", bgColor = "primary", submit = false }: IPrimaryButton) {
  const buttonClass = cx(
    "px-6",
    "tracking-[-0.2px]",
    "rounded",
    `${paddingY === "2" ? "py-2" : "py-4"}`,
    `${bgColor === "white" ? "text-black" : "text-white"}`,
    `${bgColor === "white" ? "bg-white" : "bg-primary"}`,
    "hover:bg-black",
    "hover:text-white"
  );
  return (
    <button className={buttonClass} type={submit ? "submit" : "button"}>
      {text}
    </button>
  )
}

export default PrimaryButton