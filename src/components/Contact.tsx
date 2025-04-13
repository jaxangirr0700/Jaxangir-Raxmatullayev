function Contact() {
  return (
    <div className="py-24 bg-blue-600 text-white text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <p className="text-xl mb-6">
        Feel free to reach out for collaboration or inquiries!
      </p>
      <a
        href="mailto:youremail@example.com"
        className="bg-white text-blue-600 py-2 px-6 rounded-full"
      >
        Send an Email
      </a>
    </div>
  );
}

export default Contact;
