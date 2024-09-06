import React from 'react';
import { FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { useTheme } from '../App';  

export default function Skills() {
  const { darkMode } = useTheme(); 

  const skills = [
    {
      category: 'Programming Languages',
      list: [
        { name: 'JavaScript', level: 'Intermediate', icon: <FaJs /> },
        { name: 'TypeScript', level: 'Proficient', icon: <FaJs /> },
      ],
    },
    {
      category: 'Frameworks & Libraries',
      list: [
        { name: 'React', level: 'Junoir', icon: <FaReact /> },
        { name: 'NestJS', level: 'Proficient',icon: <FaNodeJs /> },
        { name: 'Node.js', level: 'Intermediate', icon: <FaNodeJs /> },
      ],
    },
    {
      category: 'Databases',
      list: [
        { name: 'MongoDB', level: 'Junoir', icon: <FaDatabase /> },
        { name: 'PostgreSQL', level: 'Beginner', icon: <FaDatabase /> },
      ],
    },
  ];

  return (
    <div className={`p-6 ${darkMode ? 'bg-[#051E2C] text-white' : 'bg-white text-black'}`}>
      <h2 className="text-2xl font-mono mb-4 font-bold">Skills</h2>
      {skills.map((skillCategory, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-mono mb-2">{skillCategory.category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategory.list.map((skill, idx) => (
              <div
                key={idx}
                className={`flex items-center p-4 border ${
                  darkMode ? 'border-gray-700 bg-[#112734]' : 'border-gray-300 bg-white'
                } rounded-lg shadow-md`}
              >
                <div className="mr-4 text-5xl">{skill.icon}</div>
                <div>
                  <pre className={`text-sm font-mono ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    &#123;<br />
                    &nbsp;&nbsp;"Name": "{skill.name}",<br />
                    &nbsp;&nbsp;"Level": "{skill.level}"<br />
                    &#125;
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
