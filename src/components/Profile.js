import React from 'react';
import profilePic from '../assets/profile-pic.jpg'; 
import { useTheme } from '../App'; 

export default function Profile() {
  const { darkMode } = useTheme();

  return (
    <div className={`p-6 min-h-screen overflow-y-auto ${darkMode ? 'bg-[#051E2C] text-white' : 'bg-white text-black'}`}>
      <div className="flex flex-col items-center">
        {/* Profile Picture */}
        <img src={profilePic} alt="Profile" className="w-32 h-32 rounded-full mb-4 object-cover" />
        
        {/* Name Section */}
        <h2 className="text-2xl font-mono mb-4 bg-green-800 text-white p-2 rounded-lg font-bold">
          Redi Balla
        </h2>
        
        {/* Description Section with Border */}
        <div className={`p-2 rounded-lg border ${darkMode ? 'border-gray-600' : 'border-gray-300'} text-center font-mono`}>
          NestJS Backend Developer with experience in building scalable applications. Passionate about clean code and efficient architecture.
        </div>

        {/* Content Sections (Skills, Experience, Education, Contact) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mt-6">
          {/* Skills Section */}
          <div className={`p-4 rounded-lg border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
            <pre className={`text-sm font-mono ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              &#123; <br/>
              &nbsp;&nbsp;"Skills": [<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;"JavaScript",<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;"TypeScript",<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;"NestJS",<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;"Node.js",<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;"MongoDB",<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;"React"<br/>
              &nbsp;&nbsp;]<br/>
              &#125;
            </pre>
          </div>

          {/* Experience Section */}
          <div className={`p-4 rounded-lg border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
            <pre className={`text-sm font-mono ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              &#123; <br/>
              &nbsp;&nbsp;"Experience": [<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Title": "Junior Backend Developer",<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Company": "XYZ Company",<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Duration": "2023 - Present"<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Title": "Backend Developer",<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Company": "ABC Corp",<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Duration": "2018 - 2021"<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
              &nbsp;&nbsp;]<br/>
              &#125;
            </pre>
          </div>
          
          {/* Education Section */}
          <div className={`p-4 rounded-lg border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
            <pre className={`text-sm font-mono ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              &#123; <br/>
              &nbsp;&nbsp;"Education": [<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Degree": "Bachelor's in Computer Science",<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"University": "University Name",<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Year": "2014 - 2018"<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
              &nbsp;&nbsp;]<br/>
              &#125;
            </pre>
          </div>

          {/* Contact Section */}
          <div className={`p-4 rounded-lg border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
            <pre className={`text-sm font-mono ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              &#123; <br/>
              &nbsp;&nbsp;"Contact": &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;"Email": "your.email@example.com",<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;"Phone": "(123) 456-7890"<br/>
              &nbsp;&nbsp;&#125;<br/>
              &#125;
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
