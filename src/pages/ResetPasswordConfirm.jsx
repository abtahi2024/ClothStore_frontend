import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Lock,
  ShieldCheck,
  Loader2,
  CheckCircle2,
  Eye,
  EyeOff,
} from "lucide-react";
import apiClient from "../services/api-client";

const ResetPasswordConfirm = () => {
  const { uid, token } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await apiClient.post("/auth/users/reset_password_confirm/", {
        uid,
        token,
        new_password: data.password,
      });

      setSuccess("Password reset successful");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-150 flex items-center justify-center p-6 bg-zinc-50/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-[2rem] shadow-2xl shadow-zinc-200/50 border border-zinc-100 overflow-hidden">
          <div className="p-8 sm:p-10">
            <AnimatePresence mode="wait">
              {!success ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <div className="mb-8 text-center">
                    <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <ShieldCheck className="w-8 h-8 text-purple-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-zinc-900 mb-2 tracking-tight">
                      Set new password
                    </h2>
                    <p className="text-zinc-500 text-sm">
                      Your new password must be different from previously used
                      passwords.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* New Password */}
                    <div>
                      <label className="block text-sm font-semibold text-zinc-700 mb-2 ml-1">
                        New Password
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Lock
                            className={`w-5 h-5 transition-colors ${errors.password ? "text-rose-400" : "text-zinc-400 group-focus-within:text-purple-500"}`}
                          />
                        </div>
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className={`w-full pl-11 pr-12 py-3.5 bg-zinc-50 border rounded-2xl outline-none transition-all text-zinc-900 placeholder:text-zinc-400 ${
                            errors.password
                              ? "border-rose-200 focus:ring-4 focus:ring-rose-500/10 focus:border-rose-400"
                              : "border-zinc-100 focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 focus:bg-white"
                          }`}
                          {...register("password", {
                            required: "Password is required",
                            minLength: {
                              value: 8,
                              message: "Minimum 8 characters",
                            },
                          })}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-400 hover:text-zinc-600 transition-colors"
                        >
                          {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                      {errors.password && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 text-xs font-medium text-rose-500 ml-1"
                        >
                          {errors.password.message}
                        </motion.p>
                      )}
                    </div>

                    {/* Confirm Password */}
                    <div>
                      <label className="block text-sm font-semibold text-zinc-700 mb-2 ml-1">
                        Confirm Password
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Lock
                            className={`w-5 h-5 transition-colors ${errors.confirm_password ? "text-rose-400" : "text-zinc-400 group-focus-within:text-purple-500"}`}
                          />
                        </div>
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className={`w-full pl-11 pr-4 py-3.5 bg-zinc-50 border rounded-2xl outline-none transition-all text-zinc-900 placeholder:text-zinc-400 ${
                            errors.confirm_password
                              ? "border-rose-200 focus:ring-4 focus:ring-rose-500/10 focus:border-rose-400"
                              : "border-zinc-100 focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 focus:bg-white"
                          }`}
                          {...register("confirm_password", {
                            required: "Please confirm your password",
                            validate: (value) =>
                              value === watch("password") ||
                              "Passwords do not match",
                          })}
                        />
                      </div>
                      {errors.confirm_password && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 text-xs font-medium text-rose-500 ml-1"
                        >
                          {errors.confirm_password.message}
                        </motion.p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-purple-600 text-white py-4 rounded-2xl font-bold hover:bg-purple-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-purple-200"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Updating password...
                        </>
                      ) : (
                        "Reset Password"
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h2 className="text-3xl font-bold text-zinc-900 mb-3 tracking-tight">
                    Password reset!
                  </h2>
                  <p className="text-zinc-500 mb-8 leading-relaxed">
                    Your password has been successfully updated. <br />
                    Redirecting you to the login page...
                  </p>
                  <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-emerald-500"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 3 }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ResetPasswordConfirm;
