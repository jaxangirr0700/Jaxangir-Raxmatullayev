function Hero() {
  return (
    <div className="h-screen bg-blue-600 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Hello, I'm Agustin Burgos</h1>
        <p className="text-xl mb-6">Frontend Developer</p>
        <a
          href="#projects"
          className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg"
        >
          View My Projects
        </a>
      </div>
    </div>
  );
}

export default Hero;
