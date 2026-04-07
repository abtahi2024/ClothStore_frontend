import {
  BarChart,
  ChevronRight,
  Copy,
  CreditCard,
  FileText,
  LayoutDashboard,
  Plus,
  TableIcon,
} from "lucide-react";
import React, { useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState(false);
  const [isPagesMenuOpen, setIsPagesMenuOpen] = useState(false);

  const togglePagesMenu = () => setIsPagesMenuOpen(!isPagesMenuOpen);
  return (
    <div>
      {/* Sidebar */}
      <aside className="z-20 hidden w-64 h-screen overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0 border-r border-gray-100 dark:border-gray-700">
        <div className="py-4 text-gray-500 dark:text-gray-400">
          <a
            className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
            href="/"
          >
            MALE FASHION
          </a>
          <ul className="mt-6">
            <li className="relative px-6 py-3">
              <span
                className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
              <a
                className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${
                  active
                    ? "text-gray-800 dark:text-gray-100"
                    : "text-gray-500 dark:text-gray-400"
                }`}
                href="#"
              >
                <LayoutDashboard className="w-5 h-5" />
                <span className="ml-4">Deshboard</span>
              </a>
            </li>
          </ul>
          <ul>
            <li className="relative px-6 py-3">
              <span
                className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
              <a
                className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${
                  active
                    ? "text-gray-800 dark:text-gray-100"
                    : "text-gray-500 dark:text-gray-400"
                }`}
                href="#"
              >
                <FileText className="w-5 h-5" />
                <span className="ml-4">Forms</span>
              </a>
            </li>
            <li className="relative px-6 py-3">
              <span
                className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
              <a
                className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${
                  active
                    ? "text-gray-800 dark:text-gray-100"
                    : "text-gray-500 dark:text-gray-400"
                }`}
                href="#"
              >
                <CreditCard className="w-5 h-5" />
                <span className="ml-4">Cards</span>
              </a>
            </li>
            <li className="relative px-6 py-3">
              <span
                className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
              <a
                className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${
                  active
                    ? "text-gray-800 dark:text-gray-100"
                    : "text-gray-500 dark:text-gray-400"
                }`}
                href="#"
              >
                <BarChart className="w-5 h-5" />
                <span className="ml-4">Charts</span>
              </a>
            </li>
            <li className="relative px-6 py-3">
              <span
                className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
              <a
                className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${
                  active
                    ? "text-gray-800 dark:text-gray-100"
                    : "text-gray-500 dark:text-gray-400"
                }`}
                href="#"
              >
                <TableIcon className="w-5 h-5" />
                <span className="ml-4">Tables</span>
              </a>
            </li>
            <li className="relative px-6 py-3">
              <button
                className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                onClick={togglePagesMenu}
              >
                <span className="inline-flex items-center">
                  <Copy className="w-5 h-5" />
                  <span className="ml-4">Pages</span>
                </span>
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${isPagesMenuOpen ? "rotate-90" : ""}`}
                />
              </button>
              {isPagesMenuOpen && (
                <ul className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900">
                  <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                    <a className="w-full" href="#">
                      Login
                    </a>
                  </li>
                  <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                    <a className="w-full" href="#">
                      Create account
                    </a>
                  </li>
                  <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                    <a className="w-full" href="#">
                      Forgot password
                    </a>
                  </li>
                  <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                    <a className="w-full" href="#">
                      404
                    </a>
                  </li>
                  <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                    <a className="w-full" href="#">
                      Blank
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>

          <div className="px-6 my-6">
            <button className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
              Create account <span className="ml-2">+</span>
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
