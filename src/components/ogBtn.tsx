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
      className={`flex flex-col gap-4 mr-6 h-10 ${bg} ${full && "w-full"}
      } rounded-md`}
      type={type}
      onClick={onClick}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 text-white  cursor-pointer">{title}</label>
    </button>
  );
};

export default Button;
