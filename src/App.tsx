import './App.css'
import ProjectCard from "./components/ProjectCard.tsx";

function App() {

  return (
    <div className="flex flex-row">
      <div className="flex-grow-1">
        <ProjectCard />
      </div>
    </div>
  )
}

export default App
