function Projects() {
  return (
    <div id="projects" className="py-24 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Project 1</h3>
          <p className="text-lg">Description of the project goes here.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
