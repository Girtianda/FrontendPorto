import React from "react";

const skills = [
  { name: "HTML & CSS", level: "85%", description: "Expert in creating responsive and semantic layouts using HTML5 and CSS3." },
  { name: "React JS", level: "70%", description: "Experienced in building dynamic user interfaces using React and component-based architecture." },
  { name: "Node JS", level: "75%", description: "Skilled in backend development using Node.js, Express, and RESTful APIs." },
  { name: "TypeScript", level: "65%", description: "Familiar with writing type-safe code using TypeScript to improve maintainability and error reduction." },
  { name: "JavaScript", level: "80%", description: "Proficient in JavaScript for building dynamic, interactive web applications." },
  { name: "MongoDB", level: "70%", description: "Experienced with MongoDB for managing NoSQL databases in full-stack applications." }
];

const Skill: React.FC = () => {
  return (
    <div className="bg-black text-white py-20" id="skills">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fadeIn">My Skills</h2>
        
        <p className="text-lg text-center mb-12 animate-fadeIn">
          I have honed a wide range of skills in web development, from front-end to back-end technologies. Below is a summary of my proficiency.
        </p>

        {/* Skill Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="animate-fadeInSlow bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
                <div
                  className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full`}
                  style={{ width: skill.level }}
                ></div>
              </div>
              <p className="text-lg text-gray-300">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
