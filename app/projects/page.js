import ProjectsServices from "@/components/ProjectsServices";


export const metadata = {
  title: "PROJECTS",

};


const Projects = () => {
  return (
    <div className='py-20 px-4 max-w-7xl mx-auto min-h-screen'>
      <h1 className='font-semibold text-3xl text-center '>CURATED PROJECTS</h1>
     
     <ProjectsServices />
    </div>
  );
};

export default Projects;
