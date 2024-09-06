import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../App"; 

export default function Breadcrumbs() {
  const { darkMode } = useTheme();
  const location = useLocation();
  const paths = location.pathname.split("/").filter((x) => x);

  return (
    <ol className={`flex items-center whitespace-nowrap mt-4 pl-6 ${darkMode ? 'text-white' : 'text-black'}`}>
      <li className="inline-flex items-center">
        <Link
          to="/"
          className={`flex items-center text-sm ${darkMode ? 'text-neutral-500' : 'text-gray-500'} hover:text-green-600`}
        >
          ReddyDB
        </Link>
        {paths.length > 0 && (
          <svg
            className={`w-4 h-4 mx-1.5 ${darkMode ? 'text-neutral-600' : 'text-gray-400'}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18L15 12L9 6" />
          </svg>
        )}
      </li>

      {paths.map((path, index) => {
        const routeTo = `/${paths.slice(0, index + 1).join("/")}`;
        const isLast = index === paths.length - 1;

        return isLast ? (
          <li
            key={index}
            className={`inline-flex items-center text-sm font-semibold ${
              darkMode ? 'text-green-400' : 'text-green-600'
            }`}
            aria-current="page"
          >
            {path.charAt(0).toUpperCase() + path.slice(1)}
          </li>
        ) : (
          <li key={index} className="inline-flex items-center">
            <Link
              to={routeTo}
              className={`flex items-center text-sm ${darkMode ? 'text-neutral-500' : 'text-gray-500'} hover:text-green-600`}
            >
              {path.charAt(0).toUpperCase() + path.slice(1)}
            </Link>
            <svg
              className={`w-4 h-4 mx-1.5 ${darkMode ? 'text-neutral-600' : 'text-gray-400'}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18L15 12L9 6" />
            </svg>
          </li>
        );
      })}
    </ol>
  );
}
