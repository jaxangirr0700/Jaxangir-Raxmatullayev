import { Link } from "react-scroll";

function Hero() {
  return (
    <div className="h-screen bg-gradient-to-r from-slate-500 to-gray-500 text-white flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-opacity-30"
        style={{ backgroundImage: "url('/your-image.jpg')" }}
      ></div>

      <div className="text-center relative z-10">
        <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Hello, I'm Jaxangir Raxmatullayev
        </h1>
        <p className="text-xl mb-6 animate__animated animate__fadeIn animate__delay-2s">
          Frontend Developer
        </p>
        <Link
          to="projects"
          smooth={true}
          duration={1000}
          className="bg-white text-slate-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-slate-700 hover:text-white transition-all duration-300 transform hover:scale-105"
        >
          View My Projects
        </Link>
      </div>
    </div>
  );
}

export default Hero;
