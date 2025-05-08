import {
  GithubOutlined,
  InstagramOutlined,
  MailOutlined,
  SendOutlined,
} from "@ant-design/icons";

function Contact() {
  return (
    <section className="py-24 bg-gray-600 text-white text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <p className="text-xl mb-6">
        Feel free to reach out for collaboration or inquiries!
      </p>

      <div className="space-y-4">
        <a
          href="mailto:jaxangirr0700@gmail.com?subject=Subject&body=Hello, I would like to ask about..."
          className="inline-flex items-center gap-2 bg-white text-gray-600 py-2 px-6 rounded-full font-medium hover:bg-gray-200 hover:text-blue-500 transition"
        >
          <MailOutlined />
          Send an Email
        </a>

        <div className="mt-8 flex flex-col items-center space-y-3 text-lg">
          <a
            href="https://github.com/jaxangirr0700"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-blue-300"
          >
            <GithubOutlined />
            GitHub
          </a>
          <a
            href="https://www.instagram.com/jaxangir_b?igsh=NjB5bTYwZWk5d2o4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-blue-300"
          >
            <InstagramOutlined />
            Instagram
          </a>
          <a
            href="https://t.me/RJB0700"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-blue-300"
          >
            <SendOutlined />
            Telegram
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
