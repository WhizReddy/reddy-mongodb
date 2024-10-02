import React from 'react';
import { useTheme } from '../App'; // Import the useTheme hook

export default function Projects() {
  const { darkMode } = useTheme(); 

  const projects = [
    {
      title: 'HR-software',
      description: 'Manage your employees with this HR software. This project is built with React and NestJS.',
      demoLink: 'https://hrrrr-77695.web.app/',
      repoLink: 'https://github.com/WhizReddy',
    },
    {
      title: 'Pacman Game',
      description: 'Pacman game with mainly JavaScript.',
      demoLink: 'http://project2.example.com',
      repoLink: 'https://github.com/WhizReddy',
    },
    {
      title: 'Work in progress',
      description: 'More projects coming soon!',
      demoLink: 'http://project3.example.com',
      repoLink: 'https://github.com/WhizReddy',
    },
  ];

  return (
    <div className={`p-6 ${darkMode ? 'bg-[#051E2C] text-white' : 'bg-white text-black'} h-full overflow-auto`}>
      <h2 className="text-2xl font-mono mb-4 font-bold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className={`${darkMode ? 'bg-[#112733] text-white' : 'bg-white text-black'} shadow-md rounded-lg p-4 border ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            <pre className="text-sm font-mono whitespace-pre-wrap break-words">
              &#123; <br/>
              &nbsp;&nbsp;"Title": "{project.title}",<br/>
              &nbsp;&nbsp;"Description": "{project.description}",<br/>
              &nbsp;&nbsp;"Links": &#123; <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;"Demo": "<a
                href={project.demoLink}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>",<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;"GitHub": "<a
                href={project.repoLink}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>"<br/>
              &nbsp;&nbsp;&#125;<br/>
              &#125;
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}
