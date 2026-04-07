import React, { useState } from "react";
import { useForm } from "react-hook-form";
import apiClient from "../services/api-client";
import { ArrowLeft, CheckCircle2, KeyRound, Loader2, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    setSuccess("");
    try {
      await apiClient.post("/auth/users/reset_password/", {
        email: data.email,
      });
      setSuccess("Password reset link sent to your email");
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  return (
    <div className="min-h-[600px] flex items-center justify-center p-6 bg-zinc-50/50">
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
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="mb-8 text-center">
                    <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <KeyRound className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-zinc-900 mb-2 tracking-tight">
                      Forgot password?
                    </h2>
                    <p className="text-zinc-500 text-sm">
                      No worries, we'll send you reset instructions.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-zinc-700 mb-2 ml-1">
                        Email address
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Mail
                            className={`w-5 h-5 transition-colors ${errors.email ? "text-rose-400" : "text-zinc-400 group-focus-within:text-indigo-500"}`}
                          />
                        </div>
                        <input
                          type="email"
                          placeholder="name@company.com"
                          className={`w-full pl-11 pr-4 py-3.5 bg-zinc-50 border rounded-2xl outline-none transition-all text-zinc-900 placeholder:text-zinc-400 ${
                            errors.email
                              ? "border-rose-200 focus:ring-4 focus:ring-rose-500/10 focus:border-rose-400"
                              : "border-zinc-100 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:bg-white"
                          }`}
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-2 text-xs font-medium text-rose-500 ml-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-zinc-900 text-white py-4 rounded-2xl font-bold hover:bg-zinc-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-zinc-200"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending link...
                        </>
                      ) : (
                        "Reset password"
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-4"
                >
                  <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h2 className="text-3xl font-bold text-zinc-900 mb-3 tracking-tight">
                    Check your email
                  </h2>
                  <p className="text-zinc-500 mb-10 leading-relaxed">
                    We've sent a password reset link to <br />
                    <span className="font-bold text-zinc-900">
                      your email address
                    </span>
                    .
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="w-full bg-zinc-50 text-zinc-600 py-4 rounded-2xl font-bold hover:bg-zinc-100 transition-all mb-4"
                  >
                    Didn't receive the email?
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-8 pt-8 border-t border-zinc-50 text-center">
              <button className="inline-flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-indigo-600 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to log in
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
