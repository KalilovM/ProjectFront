import reactLogo from '../assets/react.svg'

const ProjectCard = () => {
  return (
    <div className="rounded-2xl bg-white flex flex-row">
      <div><img src={reactLogo} alt="#"/></div>
      <div className="flex flex-col items-start justify-center text-start">
        <div>
          <span>Company name</span>
          <span>10 June</span>
        </div>
        <h2>Project name</h2>
        <span className="">
          <span>
          <span>County</span>
            <span> • </span>
          </span>
          <span>
          <span>online</span>
            <span> • </span>
          </span>
        </span>
        <span className="">
          <span>
            <span>Rust</span>
            <span> • </span>
          </span>
          <span>
          <span>Senior</span>
            <span> • </span>
          </span>
          <span>
          <span>Product manager</span>
            <span> • </span>
          </span>
          <span>
          <span>Scrum master</span>
            <span> • </span>
          </span>
          <span>
          <span>React</span>
            <span> • </span>
          </span>
          <span>
          <span>Frontend</span>
            <span> • </span>
          </span>
          <span>
            <span>OOP</span>
            <span> • </span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;