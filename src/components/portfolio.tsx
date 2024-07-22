import projects from "@/lib/portfolio"
import PortfolioItem from "./portfolio-item"

const Portfolio = () => {
  return (
   <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
     {projects.map((Project, index) => 
        <PortfolioItem key={index} project={Project} />
    )}
   </div>
  )
}

export default Portfolio