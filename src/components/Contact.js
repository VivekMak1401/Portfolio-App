import { useState } from "react";

export default function Contact() {
  const [formData, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:vivekmakwana848350@gmail.com?subject=Portfolio Contact: ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
    setForm({ name: "", email: "", message: "" });
  };
  return (
    <div
      id="contact"
      // className="min-h-screen w-full bg-gradient-to-r from-white to-gray-50"
      className="w-full bg-blue-200 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-600 to-teal-400 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <p className="mt-4 text-xl text-center text-gray-600 font-semibold">
            Let's Connect & Explore Tech Together
          </p>
        </div>

        {/* {Contact form} */}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-5"
              >
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded p-3 "
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-5"
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="JohnDoe@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded p-3 "
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-5"
              >
                Message:
              </label>
              <textarea
                type="text"
                name="message"
                rows="4"
                id="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded p-3 "
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-indigo-400 via-purple-700 to-teal-400 text-white font-semibold rounded-xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
