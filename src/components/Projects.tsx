function Projects() {
  return (
    <div id="projects" className="py-24 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:translate-y-[-10px]">
          <a
            href="https://appleshop-next-6ihjb6v8g-jaxangirr0700s-projects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/appleshop.png" 
              alt="AppleShop Next"
              className="rounded-lg mb-4 cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
          </a>
          <h3 className="text-2xl font-bold mb-4">AppleShop Next</h3>
          <p className="text-lg mb-4">
            A modern e-commerce website built with Next.js and Tailwind CSS.
          </p>
          <a
            href="https://github.com/jaxangirr0700/appleshop-next.ts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-600"
          >
            View on GitHub
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:translate-y-[-10px]">
          <a
            href="https://appleshop-admin-panel-3mw16a9cw-jaxangirr0700s-projects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/adminka.png"
              alt="AppleShop Admin Panel"
              className="rounded-lg mb-4 cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
          </a>
          <h3 className="text-2xl font-bold mb-4">AppleShop Admin Panel</h3>
          <p className="text-lg mb-4">
            An admin panel for managing the AppleShop Next e-commerce site.
          </p>
          <a
            href="https://github.com/jaxangirr0700/appleshop-admin-panel.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-600"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
