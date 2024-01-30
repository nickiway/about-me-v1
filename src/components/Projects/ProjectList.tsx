import Project from "./Project";

interface ProjectListProps {
  projects: {
    name: string;
    description: string;
    technologies: string[];
    githubLink: string;
    image: string;
  }[];
}

const ProjectCardsList = ({ projects }: ProjectListProps) => {
  return (
    <>
      {projects.map((project, id) => (
        <Project
          key={id}
          project={project}
          index={id + 1}
          isLeft={id % 2 === 0 ? true : false}
        />
      ))}
    </>
  );
};

export default ProjectCardsList;