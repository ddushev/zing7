import cx from "classnames";

function PrimaryButton({ text, paddingY = "2" }: { text: string, paddingY?: string }) {
  const buttonClass = cx(
    "px-6",
    "tracking-[-0.2px]",
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