import Navbar from "../components/Navbar.tsx";
import PageLayout from "../components/Layouts/PageLayout.tsx";
import ProjectCardList from "../features/ProjectCardList/ProjectCardList.tsx";
import SidebarLayout from "../components/Layouts/SidebarLayout.tsx";
import SalaryFilter from "../widgets/Filters/SalaryFilter.tsx";
import SkillFilter from "../widgets/Filters/SkillFilter.tsx";
import ProjectFilter from "../widgets/Filters/ProjectFilter.tsx";

function App() {
  return (
    <PageLayout>
      <Navbar/>
      <div className="flex-1">
        <div className="px-3 mx-auto my-0 max-w-[1200px]">
          <div className="relative flex mx-auto mt-3.5 mb-0 items-start">
            <div className="pr-3.5 flex-1 min-w-0">
              <div className="text-base leading-none mx-0 mt-0 mb-3.5">
                <div className="gap-3 grid grid-flow-row grid-cols-[100%] min-w-0">
                  <ProjectFilter/>
                  <ProjectCardList/>
                </div>
              </div>
            </div>
            <SidebarLayout>
              <SalaryFilter/>
              <SkillFilter/>
            </SidebarLayout>
          </div>
        </div>
      </div>
  </PageLayout>
  )
}

export default App
