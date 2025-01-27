import '../index.css';
import '../fonts.css';

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400 min-h-screen flex flex-col items-center">
      <h1 className="about-me text-center p-12 text-4xl text-white">
        A little about me
      </h1>
      <div className="flex flex-col items-center">
        {/* Circular Image */}
        <div className="w-40 h-40 mb-8">
          <img
            src="/pers-port-react/public/me-pic.jpg"
            alt="My Picture"
            className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
          />
        </div>
        {/* About Me Text */}
        <div className="px-8 text-center text-lg text-white max-w-2xl">
          <p>
            Hello! I&apos;m a dynamic and detail-oriented professional with over
            a decade of experience in team leadership and operations management,
            primarily with Costco Wholesale. Starting at 18, I quickly rose
            through the ranks to manage multiple tire shops, including helping
            to open new locations. My ability to lead teams and streamline
            processes has always been a cornerstone of my career.
          </p>
          <p className="py-4">
            Recently, I pivoted toward technology, completing a coding bootcamp
            through Columbia University. This immersive experience introduced me
            to a diverse range of programming languages and frameworks,
            including HTML, CSS, JavaScript, TypeScript, React, PostgreSQL,
            Tailwind, the MERN stack, Python, and NoSQL databases.
          </p>
          <p className="py-4">
            I&apos;m now combining my leadership experience with my technical
            skills to create innovative solutions and embark on exciting new
            challenges in software development.
          </p>
        </div>
      </div>
    </div>
  );
}
