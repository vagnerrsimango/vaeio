import Button2 from "@/components/Button2";
import Image from "next/image";
import Icon4 from "@/lib/img/DropdownIcon.svg";

interface Project {
  title: string;
  description: string;
  image: any;
  link: string;
}

const PortfolioCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="w-80 h-96 p-4 rounded-lg shadow-md m-10 overflow-hidden flex flex-col">
      <div className="h-48 relative">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="flex-grow flex flex-col justify-between">
        <div className="flex-grow">
          <h2 className="text-primary-0 text-xl font-semibold mb-2 overflow-hidden">
            {project.title}
          </h2>
          <p className="text-primary-0 mb-4 overflow-hidden">
            {project.description}
          </p>
        </div>
        <div>
          <Button2 type="button" title="Saber Mais" icon={Icon4} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
