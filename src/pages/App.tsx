import ProjectCard from "../components/ProjectCard.tsx";
import Navbar from "../components/Navbar.tsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
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
