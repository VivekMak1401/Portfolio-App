import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-400 to-teal-400 text-white"
    >
      <div className="max-w-7xl mx-auto text-center space-y-6">
        {/* Name */}
        <h2 className="text-4xl font-bold ">Vivek Makwana</h2>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 text-xl">
          <a
            href="https://github.com/VivekMak1401"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="hover:text-gray-200 hover:scale-125 transition transform"
          >
            <Github />
          </a>
          <a
            href="https://twitter.com/Mr_makwana_1401"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            title="X (Twiiter)"
            className="hover:text-gray-200 hover:scale-125 transition transform"
          >
            <Twitter />
          </a>
          <a
            href="https://linkedin.com/in/vivek-makwana14"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="Linkedin"
            className="hover:text-gray-200 hover:scale-125 transition transform"
          >
            <Linkedin />
          </a>
        </div>

        {/* Contact Info */}
        <p className="text-xl text-black">📧 vivekmakwana848350@gmail.com</p>

        {/* Copyright */}
        <p className="text-lg">
          &copy; {new Date().getFullYear()} Vivek Makwana. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
