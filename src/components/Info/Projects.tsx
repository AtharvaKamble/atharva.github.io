import { ReactElement } from "react";
import ProjectCard from "./ProjectCard";

interface ProjectProps {
  className?: string;
}

interface Project {
  title: string;
  url: string;
}

const projects: Project[] = [
  {
    title: "cmto",
    url: "https://github.com/AtharvaKamble/cmto",
  },
  {
    title: "Relations Builder",
    url: "https://github.com/AtharvaKamble/relation-builder",
  },
  {
    title: "TLL - The Learner's Language",
    url: "https://github.com/AtharvaKamble/tll",
  },
  {
    title: "Sideproject title 1",
    url: "https://github.com",
  },
  {
    title: "Sideproject title 2",
    url: "https://github.com",
  },
];

export default function Projects({ className }: ProjectProps): ReactElement {
  return (
    <div className={`${className}`}>
      <p className="mb-2">Projects</p>
      <div className="grid grid-row-2 sm:grid-cols-4 gap-4 my-4">
        {projects?.map(({ title, url }) => {
          return (
            <ProjectCard key={title.toLowerCase()} title={title} url={url} />
          );
        })}
      </div>
    </div>
  );
}