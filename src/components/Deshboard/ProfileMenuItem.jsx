import React from "react";

const ProfileMenuItem = ({ icon: Icon, label, }) => {
  return (
    <div>
      <li className="flex">
        <span
          className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          
        >
          <Icon className="w-4 h-4 mr-3" />
          <span>{label}</span>
        </span>
      </li>
    </div>
  );
};

export default ProfileMenuItem;
