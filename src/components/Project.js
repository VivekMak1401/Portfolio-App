import React from "react";
import { ExternalLink } from "lucide-react";

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Railway Reservation System",
      description: "A simple webstie tomanage ticket booking for passenger.",
      link: "https://example.com",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "Notepad++"],
    },
    {
      id: 2,
      title: "Break the Brick Game",
      description: "A simple webstie tomanage ticket booking for passenger.",
      link: "https://example.com",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "Notepad++"],
    },
    {
      id: 3,
      title: "Course Management System",
      description: "A simple webstie tomanage ticket booking for passenger.",
      link: "https://example.com",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "Notepad++"],
    },
  ];
  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-600 to-teal-400 bg-clip-text text-transparent">
              My Projects
            </h2>
            <p className="mt-4 text-xl text-center text-gray-600 font-semibold">
              A showcase of all projects that i have made
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:border-2 hover:border-indigo-500 transition-all duration-200 p-5"
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-5">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-4 mb-2">
                  {project.tech.map((tech, index) => (
                    <div
                      key={index}
                      className="px-3 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  className="px-2 inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition-all duration-200"
                >
                  View Projects
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
