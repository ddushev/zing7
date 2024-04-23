import cx from "classnames";

function PrimaryButton({ text, paddingY = "2" }: { text: string, paddingY?: string }) {
  const buttonClass = cx(
    "px-5",
    "tracking-tight",
    "rounded",
    `py-${paddingY}`,
    "bg-white",
    "hover:bg-primary",
    "hover:text-white"
  );
  return (
    <button className={buttonClass} type="button">
      {text}
    </button>
  )
}

export default PrimaryButton