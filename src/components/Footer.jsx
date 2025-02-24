import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 flex justify-center space-x-6">
      <a
        href="https://www.linkedin.com/in/tim-ehli-6a0752176//"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="h-8 w-8 hover:text-blue-500" />
      </a>
      <a
        href="https://github.com/Saosyn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub className="h-8 w-8 hover:text-gray-400" />
      </a>
    </footer>
  );
};

export default Footer;
