import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  full?: boolean;
  onClick?: void;
};

const Button2 = ({ type, title, icon, full, onClick }: ButtonProps) => {
  return (
    <button
      className={`flexCenter rounded-lg gap-4 mr-6 h-10 bg-green-400   ${
        full && "w-full"
      }`}
      type={type}
    >
      {icon && (
        <div className="flex items-center justify-center p-2">
          <label className="bold-16 mr-2 text-primary-0 whitespace-nowrap cursor-pointer">
            {title}
          </label>
          <Image
            src={icon}
            alt={title}
            width={10}
            height={10}
            className="mr-2"
          />
        </div>
      )}
    </button>
  );
};

export default Button2;
