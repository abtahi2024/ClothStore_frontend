import React from "react";

const ProfileForm = ({ register, errors, isEditing }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-zinc-700">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="First name"
            className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-zinc-50/50 focus:bg-white focus:ring-2 focus:ring-blue-700/20 focus:border-blue-700 outline-none transition-all placeholder:text-zinc-400"
            disabled={!isEditing}
            {...register("first_name", { required: "First name is Required" })}
          />
          {errors.first_name && (
            <p className="text-red-500">{errors.first_name.message}</p>
          )}
        </div>

        {/* Last Name */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-zinc-700">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Last name"
            className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-zinc-50/50 focus:bg-white focus:ring-2 focus:ring-blue-700/20 focus:border-blue-700 outline-none transition-all placeholder:text-zinc-400"
            disabled={!isEditing}
            {...register("last_name")}
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-zinc-700">Email</label>
          <input
            type="email"
            placeholder="examples@gmail.com"
            className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-zinc-50/50 focus:bg-white focus:ring-2 focus:ring-blue-700/20 focus:border-blue-700 outline-none transition-all placeholder:text-zinc-400"
            disabled
            {...register("email")}
          />
        </div>
        {/* address */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-zinc-700">Address</label>
          <input
            type="text"
            placeholder="address...."
            className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-zinc-50/50 focus:bg-white focus:ring-2 focus:ring-blue-700/20 focus:border-blue-700 outline-none transition-all placeholder:text-zinc-400"
            disabled={!isEditing}
            {...register("address")}
          />
        </div>

        {/* Gender */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-zinc-700">Gender</label>
          <div className="flex gap-4">
            <label className="flex-1 flex items-center gap-3 px-4 py-3 rounded-lg border border-zinc-200 cursor-pointer hover:bg-zinc-50 transition-colors">
              <input
                type="radio"
                value="male"
                name="gender"
                className="w-4 h-4 text-blue-700 focus:ring-blue-700"
                {...register("gender")}
              />
              <span className="text-sm font-medium text-zinc-600">Male</span>
            </label>
            <label className="flex-1 flex items-center gap-3 px-4 py-3 rounded-lg border border-zinc-200 cursor-pointer hover:bg-zinc-50 transition-colors">
              <input
                type="radio"
                name="gender"
                value="famale"
                className="w-4 h-4 text-blue-700 focus:ring-blue-700"
                {...register("gender")}
              />
              <span className="text-sm font-medium text-zinc-600">Female</span>
            </label>
          </div>
        </div>
        {/* Phone number */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-zinc-700">
            Phone Number
          </label>
          <input
            type="number"
            placeholder="01000000000"
            className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-zinc-50/50 focus:bg-white focus:ring-2 focus:ring-blue-700/20 focus:border-blue-700 outline-none transition-all placeholder:text-zinc-400"
            disabled={!isEditing}
            {...register("phone_number")}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
