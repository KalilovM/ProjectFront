import reactLogo from '../assets/react.svg'

const ProjectCard = () => {
  return (
    // TODO: Implement rating for the company
    <div className="rounded-sm bg-gray-700 px-6 py-6 text-base">
      <div className="min-h-[125px] flex flex-row gap-3">
        <a className="w-12 h-12 overflow-hidden">
          <img src={reactLogo} alt="#" className="w-full h-full"/>
        </a>
        <div className="flex flex-col flex-1 text-white">
          <div className="justify-between flex">
            <a href="#">Apphud</a>
            <time dateTime="2024-06-11T20:16:16+03:00">11 june</time>
          </div>
          <div className="overflow-hidden break-words font-bold text-xl leading-none">
            <a href="#">Project team collector</a>
          </div>
          <div className="mt-1">
            <span className="text-base after:content-[',_'] last:after:content-['']">Moscow</span>
            <span className="text-base after:content-[',_'] last:after:content-['']">Online</span>
          </div>
          <div className="mt-1">
            <span className="text-base after:content-[',_'] last:after:content-['']">Rust</span>
            <span className="text-base after:content-[',_'] last:after:content-['']">OOP</span>
            <span className="text-base after:content-[',_'] last:after:content-['']">Rust</span>
            <span className="text-base after:content-[',_'] last:after:content-['']">Django</span>
            <span className="text-base after:content-[',_'] last:after:content-['']">Python</span>
            <span className="text-base after:content-[',_'] last:after:content-['']">Product Management</span>
            <span className="text-base after:content-[',_'] last:after:content-['']">Risk analysis</span>
            <span className="text-base after:content-[',_'] last:after:content-['']">Data science</span>
            <span className="text-base after:content-[',_'] last:after:content-['']">Machine Learning</span>
            <span className="text-base after:content-[',_'] last:after:content-['']">Communication</span>
            <span className="text-base after:content-[',_'] last:after:content-['']">Team working</span>
            <span className="text-base after:content-[',_'] last:after:content-['']">Online management</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;