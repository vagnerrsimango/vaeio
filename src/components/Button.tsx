import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  full?: boolean;
  className?: string;
  bg?: string;
  onClick?: () => void;
};

const Button = ({
  type,
  title,
  icon,
  full,
  onClick,
  bg = "bg-blue-400",
}: ButtonProps) => {
  return (
    <button
      className={`flex  items-center overflow-x-hidden justify-center gap-2 px-4 h-10 ${
        full ? "w-full" : "inline-flex"
      } ${bg} rounded-md`}
      type={type}
      onClick={onClick}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <span className="text-white">{title}</span>
    </button>
  );
};

export default Button;
