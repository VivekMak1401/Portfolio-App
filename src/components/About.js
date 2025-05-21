export default function About() {
  const commits = [
    {
      year: "2025 --> Present",
      title: "Software Developer Intern",
      org: "The IncrediBee Pvt Ltd.",
      message:
        "🚀 Built React-based UI components with Tailwind CSS and added backend functionality with Node js, Express Js, MoongoDB.",
    },
    {
      year: "2024 --> 2025",
      title: "Master's Degree In Computer Application.",
      org: "Dharmsinh Desai University",
      message:
        "🔧 Worked on DSA and build lots of projects on varoius languages.",
    },
    {
      year: "2020 --> 2023",
      title: "Bachelor's Degree in Information Technology.",
      org: "Charusat University",
      message:
        "📚 Learned HTML, CSS, JavaScript and built varoius project throughout the year.",
    },
  ];

  return (
    <>
      <section
        id="about"
        // className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50"
        className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-yellow-200"
      >
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center space-y-8 mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-700 to-teal-500 bg-clip-text text-transparent">
              Hi, I am Vivek!
            </h1>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Hey, I am a Software Developer and Traveller. During my academic
              time I have worked on multiple projects and gain valuable
              knowledge on Web Design & Development.
            </p>
          </div>

          {/* {Profile Image} */}
          <div
            // className="relative flex items-center justify-center"
            className="relative flex items-center justify-center bg-yellow-200"
          >
            <div className="px-3 py-3 bg-gradient-to-r from-indigo-600 via-purple-500 to-teal-600 rounded-full opacity-100">
              <img
                src="/Profile_Image.jpg"
                alt="Profile Image Vivek Makwana"
                className="rounded-full transform hover:scale-110 transition duration-300 shadow-lg relative z-10 border-4 border-white w-48 h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* {Professional Journey} */}
      <section className="w-full bg-sky-200 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto shadow-md">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Professional Journey
          </h2>

          <div className="max-w-6xl mx-auto pb-4">
            <ul className="space-y-8 border-l-4 border-indigo-500 pl-10 relative">
              {commits.map((commit, index) => (
                <li key={index} className="relative pl-6">
                  {/* Dot */}
                  <div className="absolute left-0 top-1 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow" />

                  {/* Year */}
                  <p className="text-sm text-gray-500 font-mono">
                    {commit.year}
                  </p>

                  {/* Role and Org */}
                  <div className="font-mono text-indigo-700">
                    <p className="font-semibold">{commit.title}</p>{" "}
                    <p className="text-gray-500">&lt;{commit.org}&gt;</p>
                  </div>

                  {/* Description */}
                  <p className="mt-1 text-gray-700">{commit.message}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* {Passion} */}
      <section
        id="passion"
        className="w-full bg-pink-200 py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Being Coding
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left ">
            <div className="space-y-3">
              <h3 className="text-2xl text-indigo-700 font-semibold">
                Open Source Contribution
              </h3>
              <p className="text-lg text-gray-800">
                I actively participate in open source events and developer
                communities to deepen my technical knowledge, collaborate with
                global contributors, and give back to the tech ecosystem.
                Notably, I've contributed to Hacktoberfest, an annual
                celebration of open source organized by DigitalOcean, where I
                made meaningful pull requests to repositories across the GitHub
                ecosystem.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-teal-700 font-semibold">
                Tech Comunnity
              </h3>
              <p className="text-lg text-gray-800">
                Beyond Hacktoberfest, I stay involved with online tech
                communities on platforms like Dev.to, Hashnode, and GitHub
                Discussions, where I share learnings, solve real-world coding
                challenges, and engage in collaborative projects. I'm an
                advocate of continuous learning through exploration—whether it's
                contributing to codebases, discovering new frameworks, or
                following engineering blogs and newsletters from the wider
                internet.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-purple-700 font-semibold">
                Learning, Building, and Growing
              </h3>
              <p className="text-lg text-gray-800">
                Whether it's contributing code, reading insightful blogs, or
                engaging in meaningful conversations, my journey is fueled by
                curiosity and a passion for growth. Open source has taught me
                the value of collaboration, continuous improvement, and giving
                back to the community that helps shape us all.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-teal-700 font-semibold">
                Exploring & Developing The Internet
              </h3>
              <p className="text-lg text-gray-800">
                This journey has led me to experiment with web development, dive
                into open-source projects, and learn how internet protocols,
                APIs, and infrastructure shape our digital world. Every click,
                repo, and browser tab is an opportunity to discover something
                new whether it's a unique UI pattern, a clever piece of code, or
                an innovative idea.
              </p>
            </div>
          </div>
        </div>

        {/* {Call to action} */}
        <div className="bg-gradient-to-r from-indigo-400 via-purple-400 to-teal-400 p-12 text-white rounded-xl text-center mt-12">
          <h3 className="text-4xl text-white font-semibold mb-5">
            Always Learning, Always Coding!
          </h3>
          <p className="text-lg text-gray-800"></p>

          <a
            href="#contact"
            className="inline-block bg-white mt-4 text-indigo-500 px-8 rounded-xl font-semibold hover:opacity-90 transsition-color duration-300"
          >
            Get in Touch 👋
          </a>
        </div>
      </section>
    </>
  );
}
