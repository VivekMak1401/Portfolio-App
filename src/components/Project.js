import React from "react";
import { ExternalLink } from "lucide-react";

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Railway Reservation System",
      description:
        "Developed a Simple User Friendly Website for Book/Reserve Train Ticket, Can View the Train Schedules, Can list out Trains.",
      link: "https://github.com/VivekMak1401/BookMyRail",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "Notepad++"],
    },
    {
      id: 2,
      title: "Break the Brick Game",
      description:
        "Break the Brick is a simple 2D arcade game implemented using Java Swing. The game involves controlling a paddle to bounce a ball and break a series of bricks arranged in a grid.",
      link: "https://github.com/VivekMak1401/Break-the-Brick",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "Notepad++"],
    },
    {
      id: 3,
      title: "Course Management System",
      description:
        "A system to enroll in various courses. the data should stores in database. Admin can mange the database and backend and can registered courses of each user.",
      link: "https://github.com/VivekMak1401/Course-Management-System",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "Notepad++"],
    },
    {
      id: 4,
      title: "Chat Widget - A Mental Health Assessment",
      description:
        "A simple extension to easily integrate with any websites. used to assess employee for their mental health assessment throught predtermined set of question.",
      link: "https://github.com/VivekMak1401/Course-Management-System",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "Notepad++"],
    },
  ];
  return (
    <>
      <div
        id="projects"
        // className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50 bg-red-200"
        className="w-full bg-red-200 py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-600 to-teal-400 bg-clip-text text-transparent">
              My Projects
            </h2>
            <p className="mt-4 text-xl text-center text-gray-600 font-semibold">
              A showcase of all projects that i have build.
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
