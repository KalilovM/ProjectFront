import ProjectCard from "./components/ProjectCard.tsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <div className="relative z-[100] w-full leading-10 bg-gray-700">
          <div className="flex items-center h-16 max-w-[1200px] m-auto relative text-left">
            <div className="flex-none order-1 ml-auto mr-3">
              <div>
                <button className="min-h-8 w-14 rounded-md bg-blue-500 text-white font-bold px-1.5 py-2.5 inline-flex items-center justify-center leading-none">Login</button>
              </div>
            {/*  drop down on click with register and login buttons  */}
            </div>
            <div className="flex self-stretch relative min-w-0">
              <div className="flex overflow-auto px-0.5">
                <a href="#" className="text-white flex items-center px-2.5 text-lg">Home</a>
                <a href="#" className="text-white flex items-center px-2.5 text-lg">Projects</a>
                <a href="#" className="text-white flex items-center px-2.5 text-lg">Companies</a>
                <a href="#" className="text-white flex items-center px-2.5 text-lg">About</a>
                <a href="#" className="text-white flex items-center px-2.5 text-lg">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="flex-1">
        <div className="px-3 mx-auto my-0 max-w-[1200px]">
          <div className="relative flex mx-auto mt-3.5 mb-0 items-start">
            <div className="pr-3.5 flex-1 min-w-0">
              <div className="text-base leading-none mx-0 mt-0 mb-3.5">
                <div className="gap-3 grid grid-flow-row grid-cols-[100%] min-w-0">
                  <div className="rounded-sm bg-gray-700"></div>
                  <div className="gap-3 grid grid-flow-row grid-cols-[100%] min-w-0">
                    <ProjectCard/>
                  </div>
                </div>
              </div>
            </div>
            <aside className="mb-4 flex-none order-1 w-[325px]"></aside>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
