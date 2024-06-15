import ProjectCard from "../../components/ProjectCard.tsx";

const ProjectCardList = () => {
  return (
    <div className="gap-3 grid grid-flow-row grid-cols-[100%] min-w-0">
      <ProjectCard/>
    </div>
  );
};

export default ProjectCardList;