import React, { useState } from "react";

const PasswordChangeForm = ({ register, errors, isEditing, watch }) => {
  const [isPasswordSectionOpen, setIsPasswordSectionOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsPasswordSectionOpen(!isPasswordSectionOpen)}
        type="button"
        className="text-rose-500 hover:underline font-semibold h-auto transition-all active:scale-95"
      >
        Change Password
      </button>
      {isPasswordSectionOpen && (
        <div>
          {/* current_password */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-zinc-700">
              Current Password <span className="text-red-500">*</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="current_password"
              className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-zinc-50/50 focus:bg-white focus:ring-2 focus:ring-blue-700/20 focus:border-blue-700 outline-none transition-all placeholder:text-zinc-400"
              disabled={!isEditing}
              {...register("current_password", {
                required: "current_password is Required",
              })}
            />
            {errors.first_name && (
              <p className="text-red-500">{errors.first_name.message}</p>
            )}
          </div>
          {/* new_password */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-zinc-700">
              new_password <span className="text-red-500">*</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="new_password"
              className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-zinc-50/50 focus:bg-white focus:ring-2 focus:ring-blue-700/20 focus:border-blue-700 outline-none transition-all placeholder:text-zinc-400"
              disabled={!isEditing}
              {...register("new_password", {
                required: "new_password is Required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
          </div>

          {/* confirm new password */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-zinc-700">
              Confirm new Password <span className="text-red-500">*</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm new password"
              className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-zinc-50/50 focus:bg-white focus:ring-2 focus:ring-blue-700/20 focus:border-blue-700 outline-none transition-all placeholder:text-zinc-400"
              disabled={!isEditing}
              {...register("confirm_new_password", {
                validate: (value) =>
                  value === watch("new_password") || "password do not match",
              })}
            />
            {errors.confirm_new_password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirm_new_password.message}
              </p>
            )}
          </div>

          {isEditing && (
            <div className="">
              <label className="cursor-pointer p-1">
                <span className="font-medium">Show Password</span>
              </label>
              <input
                type="checkbox"
                className="toggle toggle-success"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default PasswordChangeForm;
