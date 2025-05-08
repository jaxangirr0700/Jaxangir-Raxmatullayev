function About() {
  return (
    <section className="py-24 bg-gray-800 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 fade-in-up">About Me</h2>

        <p className="text-xl mb-8 fade-in-up">
          I'm a passionate Frontend Developer who enjoys building modern web
          applications. I have hands-on experience with JavaScript, React,
          Tailwind CSS, and other modern technologies. I work confidently in the
          following areas:
        </p>

        <ul className="space-y-4 text-left text-lg list-disc list-inside fade-in-up">
          <li>
            <strong>Frontend Development:</strong> HTML5, CSS3, SASS, SCSS,
            Bootstrap, Tailwind CSS, Material UI, Shadcn/UI, Framer Motion
          </li>
          <li>
            <strong>Frameworks & Libraries:</strong> React.js, Next.js, Redux,
            Redux Toolkit
          </li>
          <li>
            <strong>Version Control:</strong> Git, GitHub
          </li>
          <li>
            <strong>Tools:</strong> NPM, Postman
          </li>
          <li>
            <strong>Design:</strong> Responsive Design, UI Development
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
