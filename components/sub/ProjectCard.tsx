import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="rounded-lg shadow-lg border border-[#2A0E61] w-full sm:w-[45%] md:w-[32%] overflow-hidden">
      <Image
      src={src}
      alt={title}
      width={500}
      height={500}
      className="w-full h-fit object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
