import React from "react";

const ProfileButtons = ({ isEditing, setIsEditing, isSubmitting }) => {
  return (
    <div className="flex justify-center">
      {isEditing ? (
        <div className="space-x-2">
          <button
            type="submit"
            className="bg-blue-700 text-white px-10 py-3 rounded-lg font-bold text-sm hover:bg-blue-800 transition-all shadow-md active:scale-95"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving" : "Save Change"}
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-red-700 text-white px-10 py-3 rounded-lg font-bold text-sm hover:bg-red-800 transition-all shadow-md active:scale-95"
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          className="bg-blue-700 text-white px-10 py-3 rounded-lg font-bold text-sm hover:bg-blue-800 transition-all shadow-md active:scale-95"
          onClick={() => setIsEditing(true)}
        >
          Edit Profile
        </button>
      )}
    </div>
  );
};

export default ProfileButtons;
