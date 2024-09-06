import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../App"; 

export default function MongoShell() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState(""); 
  const [output, setOutput] = useState(["Atlas atlas-"]); 
  const navigate = useNavigate(); 
  const { darkMode, toggleTheme } = useTheme(); 
  const terminalOutputRef = useRef(null); 

  const toggleShell = () => {
    setIsOpen(!isOpen);
  };

  // Scroll to the bottom of the terminal when new output is added
  useEffect(() => {
    if (terminalOutputRef.current) {
      terminalOutputRef.current.scrollTop =
        terminalOutputRef.current.scrollHeight;
    }
  }, [output]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const command = input.toLowerCase().trim();
      setOutput((prevOutput) => [...prevOutput, `> ${command}`]);

      // Handle specific commands
      switch (command) {
        case "skills":
          navigate("/skills");
          break;
        case "projects":
          navigate("/projects");
          break;
        case "cv":
          navigate("/admin/cv");
          break;
        case "certificates":
          navigate("/admin/certificates");
          break;
        case "social media":
          navigate("/admin/social-media");
          break;
        case "performance":
          navigate("/performance");
          break;
        case "databases":
          navigate("/databases");
          break;
        case "settings":
          navigate("/settings");
          break;
        case "dark mode":
          toggleTheme(); // Toggle dark mode
          setOutput((prevOutput) => [
            ...prevOutput,
            `Toggled dark mode: ${darkMode ? "disabled" : "enabled"}`,
          ]);
          break;
        case "clear":
          setOutput(["Atlas atlas-"]); 
          break;
        case "help":
          setOutput((prevOutput) => [
            ...prevOutput,
            `Available commands:`,
            `skills: Go to the skills page`,
            `projects: Go to the projects page`,
            `cv: Go to the CV page`,
            `certificates: Go to the certificates page`,
            `social media: Go to the social media page`,
            `performance: Go to the performance page`,
            `databases: Go to the databases page`,
            `settings: Go to the settings page`,
            `dark mode: Toggle between light and dark mode`,
            `clear: Clear the terminal output`,
            `help: Show this help message`,
          ]);
          break;
        default:
          setOutput((prevOutput) => [
            ...prevOutput,
            `Unknown command: ${command}`,
          ]);
          break;
      }

      setInput(""); 
    }
  };

  return (
    <div
      className={`fixed bottom-0  left-0 right-0 ${
        isOpen ? "h-1/3 mb-10"  : "h-10 "
      } bg-[#112734] transition-all duration-300 ease-in-out border-t-[0.1px] border-gray-600`}
      style={{ zIndex: 1000 }}
    >
      <div
        className="flex items-center justify-between h-10 bg-[#112734] text-white px-3 cursor-pointer text-1.5xs" 
        onClick={toggleShell}
      >
        <span>&gt;_MONGOSH</span>
        <span className="text-xs">{isOpen ? "Close" : "Open"} Atlas</span>
      </div>

      {isOpen && (
        <div
          className="h-full bg-[#1c2d39] p-2 text-white overflow-y-auto text-xs" 
          ref={terminalOutputRef} 
        >
          <div className="scrollable-content">
            {output.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
          <div className="flex items-center mt-4">
            <form className="flex-1">
              <input
                type="text"
                className="w-full bg-transparent text-white outline-none border-none"
                placeholder="Type a command... (help)"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleCommand}
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
