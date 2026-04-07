import React from "react";

const StatusBadge = ({ status }) => {
  const styles = {
    Approved:
      "text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100",
    Pending: "text-orange-700 bg-orange-100 dark:text-white dark:bg-orange-600",
    Denied: "text-red-700 bg-red-100 dark:text-red-100 dark:bg-red-700",
  };
  return (
    <div>
      <span
        className={`px-2 py-1 font-semibold leading-tight rounded-full ${styles[status] || styles[""]}`}
      >
        {status}
      </span>
    </div>
  );
};

export default StatusBadge;
