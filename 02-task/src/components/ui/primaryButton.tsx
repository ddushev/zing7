import cx from "classnames";

function PrimaryButton({ text, py = "2" }: { text: string, py?: string }) {
  const buttonClass = cx(
    "px-5",
    `py-${py}`,
    "rounded",
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