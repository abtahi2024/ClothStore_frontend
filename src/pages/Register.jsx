import { Lock, Mail, User } from "lucide-react";
import { useForm } from "react-hook-form";
import useAuthContext from "../hooks/useAuthContext";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Register = () => {
  const { registerUser } = useAuthContext();
  const [successMsg, setSuccessMsg] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    delete data.confirm_password;
    try {
      const response = await registerUser(data);
      if (response.success) {
        setSuccessMsg(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* success message */}
      <AnimatePresence>
        {successMsg && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: "-50%" }}
            animate={{ opacity: 1, y: 20, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            className="fixed top-0 left-1/2 z-200 px-6 py-3 bg-black text-white rounded-full shadow-2xl flex items-center space-x-3 border border-white/10"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm font-bold tracking-tight">
              {successMsg}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Sign Up Form (Left Side) */}
      <form
        className="w-full flex flex-col gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* user name */}
        <div className="relative w-full">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#96959e]">
            <User size={18} />
          </div>
          <input
            type="text"
            placeholder="First Name"
            className="w-full bg-[#f2f3fe] rounded-xl py-3.5 pl-10 pr-4 text-[#4b5679] placeholder-[#96959e] outline-none focus:ring-2 focus:ring-[#6b50ff]/20 transition-all"
            {...register("first_name", {
              required: "First name is Required",
            })}
          />
          {errors.first_name && (
            <span className="text-rose-500">{errors.first_name.message}</span>
          )}
        </div>
        {/* Email */}
        <div className="relative w-full">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#96959e]">
            <Mail size={18} />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-[#f2f3fe] rounded-xl py-3.5 pl-10 pr-4 text-[#4b5679] placeholder-[#96959e] outline-none focus:ring-2 focus:ring-[#6b50ff]/20 transition-all"
            {...register("email", { required: "email is required" })}
          />
          {errors.email && (
            <span className="text-rose-500">{errors.email.message}</span>
          )}
        </div>
        {/* Password */}
        <div className="relative w-full">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#96959e]">
            <Lock size={18} />
          </div>
          <input
            type="password"
            placeholder="Password..."
            className="w-full bg-[#f2f3fe] rounded-xl py-3.5 pl-10 pr-4 text-[#4b5679] placeholder-[#96959e] outline-none focus:ring-2 focus:ring-[#6b50ff]/20 transition-all"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          {errors.password && (
            <span className="text-rose-500">{errors.password.message}</span>
          )}
        </div>
        {/* confirm password */}
        <div className="relative w-full">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#96959e]">
            <Lock size={18} />
          </div>
          <input
            type="password"
            placeholder="Confirm_password..."
            className="w-full bg-[#f2f3fe] rounded-xl py-3.5 pl-10 pr-4 text-[#4b5679] placeholder-[#96959e] outline-none focus:ring-2 focus:ring-[#6b50ff]/20 transition-all"
            {...register("confirm_password", {
              required: "confirm password is requied",
              validate: (value) =>
                value === watch("password") || "password do not match",
            })}
          />
          {errors.confirm_password && (
            <span className="text-rose-500">
              {errors.confirm_password.message}
            </span>
          )}
        </div>
        <button className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#5823c9] to-[#6b50ff] text-white font-bold shadow-lg shadow-[#6b50ff]/30 hover:scale-[1.02] active:scale-[0.98] transition-all mt-4">
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default Register;
