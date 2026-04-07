import React from "react";

const StatCard = ({ icon: Icon, label, value, color }) => {
  const colorStyles = {
    orange:
      "text-orange-500 bg-orange-100 dark:text-orange-100 dark:bg-orange-500",
    green: "text-green-500 bg-green-100 dark:text-green-100 dark:bg-green-500",
    blue: "text-blue-500 bg-blue-100 dark:text-blue-100 dark:bg-blue-500",
    teal: "text-teal-500 bg-teal-100 dark:text-teal-100 dark:bg-teal-500",
  };
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-linear-to-l dark:to-rose-200 dark:from-pink-300 border border-gray-100 dark:border-gray-700">
      <div className={`p-3 mr-4 rounded-full ${colorStyles[color]}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">
          {label}
        </p>
        <p className="text-lg font-semibold">
          {value}
        </p>
      </div>
    </div>
  );
};

export default StatCard;
