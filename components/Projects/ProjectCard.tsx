import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

const ProjectCard = ({ title, description, image }: ProjectCardProps) => {
  return (
    <div className="sm:w-[90%] sm:h-[380px] flex flex-col bg-gray-300 items-center justify-between rounded-xl sm:flex-row duration-500 hover:shadow-2xl hover:scale-105 hover:cursor-pointer">
      <div className="p-4">
        <h1 className="text-xl font-bold">{title}</h1>
        <p>{description}</p>
        <div className="flex justify-around items-center mt-10">
          <div className="px-4 py-2 rounded-xl text-sm font-medium dark:text-black border-2 duration-300 hover:bg-white hover:text-black hover:scale-125">
            <a href={``} target="blank">
              Try now →
            </a>
          </div>
          <div className="px-4 py-2 rounded-xl text-sm font-medium dark:text-black border-2 duration-300 hover:bg-white hover:text-black hover:scale-125">
            <a href={``} target="blank">
              Github →
            </a>
          </div>
        </div>
      </div>
      <Image src={`${image}`} className="triangle h-full w-full sm:w-[300px] md:w-[400px] lg:w-[500px]" alt="project img" width={300} height={500}/>
    </div>
  );
};

export default ProjectCard;
