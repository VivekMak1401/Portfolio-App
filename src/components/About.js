export default function About() {
  return (
    <>
      <div></div>

      <div className="bg-white p-8 shadow-lg mb-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Being Coding
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left ">
          <div className="space-y-3">
            <h3 className="text-2xl text-indigo-700 font-semibold">
              Open Source Contribution
            </h3>
            <p className="text-lg text-gray-800">
              I am Activiely contributing to open source sofwares and projects
              on GitHub.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl text-teal-700 font-semibold">
              Tech Comunnity
            </h3>
            <p className="text-lg text-gray-800">
              I am Activiely contributing to open source sofwares and projects
              on GitHub.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl text-purple-700 font-semibold">
              Always Learning Always Coding!
            </h3>
            <p className="text-lg text-gray-800">
              I am Activiely contributing to open source sofwares and projects
              on GitHub.
            </p>
          </div>

          {/* {Call to action} */}
          <div className="bg-gradient-to-r from-indigo-400 via-purple-400 to-teal-400 p-12 text-white rounded-xl text-center">
            <h3 className="text-4xl text-white font-semibold mb-5">
              Always Learning Always Coding!
            </h3>
            <p className="text-lg text-gray-800">
              I am Activiely contributing to open source sofwares and projects
              on GitHub.
            </p>

            <a
              href="#"
              className="inline-blick bg-white text-indigo-500 px-8 rounded-xl font-semibold hover:opacity-90 transsition-color duration-300"
            >
              Get in Touch 👋
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
