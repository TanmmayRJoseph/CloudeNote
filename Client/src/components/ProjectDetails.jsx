import React from "react";

const ProjectDetails = () => {
  return (
    <div className="p-8 bg-gray-900 text-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-green-400 mb-4">About Me</h1>
      <p className="text-base leading-relaxed mb-4">
        Hello, my name is{" "}
        <span className="text-green-400 font-semibold">Tanmmay R Joseph</span>.
        I am a BCA final-year student with a passion for{" "}
        <span className="text-green-400 font-semibold">
          MERN stack web development
        </span>
        and modern tools like{" "}
        <span className="text-green-400 font-semibold">Next.js</span>. I thrive
        on solving problems in{" "}
        <span className="text-green-400 font-semibold">Python</span>
        and exploring the world through{" "}
        <span className="text-green-400 font-semibold">traveling</span>.
      </p>
      <p className="text-base leading-relaxed mb-6">
        I enjoy continuous learning, experimenting with technologies, and
        building innovative projects that combine creativity with functionality.
        With a knack for tackling challenges, I aspire to make a meaningful
        impact in the tech industry.
      </p>
      <div className="flex space-x-4">
        <button className="bg-green-400 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition">
          View My Projects
        </button>
        <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
