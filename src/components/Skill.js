import { useState } from "react";
export default function Skills() {
  const [skill, setSkill] = useState("technical");
  const skills = {
    technical: [
      { name: "HTML", prof: 90 },
      { name: "CSS", prof: 75 },
      { name: "Tailwind CSS", prof: 60 },
      { name: "MongoDB", prof: 70 },
      { name: "Express JS", prof: 75 },
      { name: "React JS", prof: 90 },
      { name: "Node JS", prof: 75 },
      { name: "Postman", prof: 90 },
      { name: "Git", prof: 80 },
      { name: "GitHub", prof: 80 },
    ],
    soft: [
      { name: "Communication", prof: 90 },
      { name: "Leadership", prof: 75 },
      { name: "Team Player", prof: 60 },
      { name: "Punctual", prof: 95 },
      { name: "Adaptible", prof: 80 },
      { name: "Curious", prof: 85 },
      { name: "Creativity", prof: 70 },
    ],
  };

  const getProfLable = (prof) => {
    if (prof >= 90) return "Expert";
    if (prof > 75) return "Advanced";
    if (prof >= 60) return "Intermidate";
    return "Beginner";
  };

  return (
    <div
      id="skills"
      // className="min-h-screen w-full bg-gradient-to-r from-white to-gray-60 py-16"
      className="w-full bg-green-200 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            A comprenhensive overview of my technical expertise and professional
            capablilties.
          </p>
        </div>
        {/* {Toggle button} */}
        <div className="flex justify-center mb-12 space-x-4">
          <button
            onClick={() => setSkill("technical")}
            className={`px-6 py-3 rounded-lg text-semibold text-lg transition-all duration-200 ${
              skill == "technical"
                ? "bg-gradient-to-r from-indigo-500 to-purple-400  text-white shadow-lg"
                : "text-gray-600 hover:text-indigo-800"
            }`}
          >
            Technical
          </button>
          <button
            onClick={() => setSkill("soft")}
            className={`px-6 py-3 rounded-lg text-semibold text-lg transition-all duration-200 ${
              skill == "soft"
                ? "bg-gradient-to-r from-indigo-500 to-purple-400 text-white shadow-lg"
                : "text-gray-600 hover:text-indigo-800"
            }`}
          >
            Soft Skills
          </button>
        </div>

        {/* {map to show output} */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills[skill].map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <h3 className="text-xl font-semibold text-gray-600">
                  {skill.name}
                </h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">
                    {getProfLable(skill.prof)}
                  </span>
                  <span className="text-sm font-semibold text-indigo-600">
                    {skill.prof}%
                  </span>
                </div>

                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-400 via-purple-400 to-teal-400 rounded transtion-all duration-200"
                    style={{ width: `${skill.prof}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
