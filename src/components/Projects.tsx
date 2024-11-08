import { useEffect, useState } from "react";
import axios from "axios";

// Define the Project interface
interface Project {
  name: string;
  description: string | null;
  stars: number;
  link: string;
  language: string;
  languageColor: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get<Project[]>("https://backendporto.vercel.app/api/pinned-repos");
        setProjects(response.data);
      } catch (error) {
        setError("Failed to load projects.");
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="rounded-lg mb-4 w-full h-48 bg-gray-900 flex items-center justify-center text-2xl text-white font-semibold">
                {project.name}
              </div>
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.description || "No description available"}</p>
              <div className="flex items-center mb-4">
                <span
                  className="inline-block w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: project.languageColor }}
                ></span>
                <span className="text-gray-300">{project.language}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-yellow-400">★ {project.stars}</span>
                <a
                  href={project.link}
                  className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
