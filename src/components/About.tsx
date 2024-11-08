import React from "react";
import AboutImage from "../assets/Girrpoto.jpg";
import "react-circular-progressbar/dist/styles.css";

const About: React.FC = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        
        <div className="flex flex-col md:flex-row items-center md:space-x-14 animate-fadeInSlow mt-20">
          <img
            src={AboutImage}
            alt="About me"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0 transform transition duration-500 hover:scale-105"
          />
          
          <div className="flex-1">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fadeIn">About Me</h2>
            <p className="text-lg mb-8 animate-fadeIn">
              I am a passionate coder with expertise in both front-end and back-end development, skilled in Express.js, Node.js, JavaScript, TypeScript, and more. I am a hard worker, goal-oriented, and always ready for new challenges. With experience building web applications and strong technical skills, I also bring solid managerial abilities to collaborate effectively in large-scale team projects.
            </p>
        
            <div className="mt-8 flex justify-around text-center space-x-8">
              <div className="group transform transition duration-500 hover:scale-110 animate-fadeIn">
                <h3
                  className="text-3xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500 transition duration-500 group-hover:text-white"
                >
                  2+
                </h3>
                <p className="text-sm text-gray-400 transition duration-500 group-hover:text-gray-100">
                  Years Experience
                </p>
              </div>
              
              <div className="group transform transition duration-500 hover:scale-110 animate-fadeIn">
                <h3
                  className="text-3xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500 transition duration-500 group-hover:text-white"
                >
                  5+
                </h3>
                <p className="text-sm text-gray-400 transition duration-500 group-hover:text-gray-100">
                  Projects Completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
