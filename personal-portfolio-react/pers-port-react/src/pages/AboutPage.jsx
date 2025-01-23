import '../index.css';
import '../fonts.css';

export default function AboutPage() {
  return (
    <body className="bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400 h-screen">
      <img href="../assets/me-pic.jpg" />
      <h1 className="about-me text-center p-12 text-4xl">A little about me</h1>
      <div className="px-40 text-center text-lg">
        <p>
          Hello! I&apos;m a dynamic and detail-oriented professional with over a
          decade of experience in team leadership and operations management,
          primarily with Costco Wholesale. Starting at 18, I quickly rose
          through the ranks to manage multiple tire shops, including helping to
          open new locations. My ability to lead teams and streamline processes
          has always been a cornerstone of my career.
        </p>
        <p className="py-4">
          Recently, I pivoted toward technology, completing a coding bootcamp
          through Columbia University. This immersive experience introduced me
          to a diverse range of programming languages and frameworks, including
          HTML, CSS, JavaScript, TypeScript, React, PostgreSQL, Tailwind, the
          MERN stack, Python, and NoSQL databases.
        </p>
        <p className="py-4">
          I&apos;m now combining my leadership experience with my technical
          skills to create innovative solutions and embark on exciting new
          challenges in software development.
        </p>
      </div>
    </body>
  );
}
