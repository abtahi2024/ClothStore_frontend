import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Camera } from "lucide-react";
import ProfileForm from "../components/Profile/ProfileForm";
import ProfileButtons from "../components/Profile/ProfileButtons";
import PasswordChangeForm from "../components/Profile/PasswordChangeForm";
import useAuthContext from "../hooks/useAuthContext";
import ProfileAlert from "../components/Profile/ProfileAlert";

const Profile = () => {
  const { user, updateUserProfil, changePassword, errorMsg } = useAuthContext();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  const [isEditing, setIsEditing] = useState(false);
  const [preview, setPreview] = useState(null);

  // ✅ SAFE user load
  useEffect(() => {
    if (user) {
      setValue("first_name", user.first_name || "");
      setValue("last_name", user.last_name || "");
      setValue("email", user.email || "");
      setValue("address", user.address || "");
      setValue("phone_number", user.phone_number || "");
    }
  }, [user, setValue]);

  // ✅ image preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setValue("image", file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // ✅ FINAL SUBMIT (FormData)
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      if (data.first_name) formData.append("first_name", data.first_name);

      if (data.last_name) formData.append("last_name", data.last_name);

      if (data.address) formData.append("address", data.address);

      if (data.phone_number) formData.append("phone_number", data.phone_number);

      if (data.image) formData.append("image", data.image);

      await updateUserProfil(formData);

      //Password change
      if (data.current_password && data.new_password) {
        await changePassword({
          current_password: data.current_password,
          new_password: data.new_password,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex font-sans text-zinc-900">
      <main className="flex-1 p-4 md:p-12 overflow-y-auto">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-zinc-200 p-8">
          {errorMsg && <ProfileAlert error={errorMsg} />}
          <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
            {/* PROFILE HEADER */}
            <div className="flex flex-col sm:flex-row items-center gap-8 mb-12">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img
                    src={preview || user?.image || "https://i.pravatar.cc/150"}
                    alt="Profile"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Hidden file input */}
                <label className="absolute bottom-0 right-0 bg-blue-700 text-white p-2 rounded-full border-4 border-white shadow-lg hover:bg-blue-800 transition-colors cursor-pointer">
                  <Camera size={16} />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
            </div>

            <ProfileForm
              register={register}
              errors={errors}
              isEditing={isEditing}
            />

            <PasswordChangeForm
              register={register}
              errors={errors}
              isEditing={isEditing}
              watch={watch}
            />

            <ProfileButtons
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              isSubmitting={isSubmitting}
            />
          </form>
        </div>
      </main>
    </div>
  );
};

export default Profile;
