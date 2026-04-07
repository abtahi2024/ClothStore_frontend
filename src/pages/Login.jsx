import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FaGoogle } from "react-icons/fa6";
import { Lock, Mail, User } from "lucide-react";
import { useForm } from "react-hook-form";
import useAuthContext from "../hooks/useAuthContext";
import { useNavigate } from "react-router";
import Register from "./Register";
import { useGoogleLogin } from "@react-oauth/google";
import apiClient from "../services/api-client";
const Login = () => {
  const { errorMsg, loginUser, setAuthTokens, setUser } = useAuthContext();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await loginUser(data);
      if (response.success) {
        if (response.user.is_staff) {
          navigate("/deshboard");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const toggleView = () => setIsLogin(!isLogin);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await apiClient.post("/auth/google/", {
          access_token: tokenResponse.access_token,
        });

        localStorage.setItem("authTokens", JSON.stringify(response.data));

        setAuthTokens(response.data);
        const userRes = await apiClient.get("/auth/users/me/", {
          headers: {
            Authorization: `Bearer ${response.data.access}`,
          },
        });
        setUser(userRes.data);
        if (userRes.data.is_staff) {
          navigate("/deshboard");
        } else {
          navigate("/");
        }
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    },
    onError: () => console.log("Google login failed"),
  });

  return (
    <main className="min-h-screen flex items-center justify-center p-4 font-sans">
      <div className="relative w-full max-w-190 h-140 bg-white rounded-4xl border-8 border-white shadow-[0_20px_80px_rgba(41,30,113,0.15)] overflow-hidden flex">
        {/* Sliding Overlay Container */}
        <motion.div
          initial={false}
          animate={{ x: isLogin ? "100%" : "0%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute top-0 left-0 w-1/2 h-full z-20 pointer-events-none"
        >
          <div className="w-full h-full bg-linear-to-br from-[#5823c9] to-[#6b50ff] rounded-3xl overflow-hidden relative pointer-events-auto">
            <AnimatePresence mode="wait">
              {isLogin ? (
                <motion.div
                  key="register-hero"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-10 text-white"
                >
                  <h2 className="text-3xl font-bold mb-4">Welcome Back</h2>
                  <p className="text-white/80 mb-8 leading-relaxed">
                    Login to review your latest profit from investments.
                  </p>
                  <button
                    onClick={toggleView}
                    className="px-10 py-3 rounded-full border border-white/50 hover:bg-white hover:text-[#5823c9] transition-all font-medium tracking-wide hover:scale-[1.05] active:scale-[0.98]"
                  >
                    LOGIN
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="login-hero"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-10 text-white"
                >
                  <h2 className="text-3xl font-bold mb-4">Hello There!</h2>
                  <p className="text-white/80 mb-8 leading-relaxed">
                    Begin your journey using this software, and start earning
                    now.
                  </p>
                  <button
                    onClick={toggleView}
                    className="px-10 py-3 rounded-full border border-white/50 hover:bg-white hover:text-[#5823c9] transition-all font-medium tracking-wide hover:scale-[1.05] active:scale-[0.98]"
                  >
                    SIGN UP
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Forms Container */}
        <div className="flex w-full h-full">
          {/* Login Form (Right Side) */}
          <div className="w-1/2 h-full flex flex-col items-center justify-center p-10 gap-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-[#4b5679] mb-2">Login</h2>
              {/* Social Media */}
              <div className="flex justify-center gap-3 w-full">
                <button className="grid place-items-center w-10 h-10 rounded-full bg-[#f2f3fe] text-[#4b5679] hover:bg-[#e0e2f8] transition-colors">
                  <FaFacebookF />
                </button>
                <button
                  onClick={() => googleLogin()}
                  className="grid place-items-center w-10 h-10 rounded-full bg-[#f2f3fe] text-[#4b5679] hover:bg-[#e0e2f8] transition-colors"
                >
                  <FaGoogle />
                </button>
                <button className="grid place-items-center w-10 h-10 rounded-full bg-[#f2f3fe] text-[#4b5679] hover:bg-[#e0e2f8] transition-colors">
                  <FaLinkedinIn />
                </button>
              </div>
            </div>
            <p className="text-xs text-[#4b5679]/50 uppercase tracking-widest">
              or use your email
            </p>
            {/* Error massage*/}
            {errorMsg && (
              <div role="alert" className="alert alert-error">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{errorMsg}.</span>
              </div>
            )}

            <form
              className="w-full flex flex-col gap-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* Email */}
              <div className="relative w-full">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#96959e]">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-[#f2f3fe] rounded-xl py-3.5 pl-10 pr-4 text-[#4b5679] placeholder-[#96959e] outline-none focus:ring-2 focus:ring-[#6b50ff]/20 transition-all"
                  {...register("email", { required: "Email is required" })}
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
                  {...register("password", {
                    required: "password is required",
                  })}
                  className="w-full bg-[#f2f3fe] rounded-xl py-3.5 pl-10 pr-4 text-[#4b5679] placeholder-[#96959e] outline-none focus:ring-2 focus:ring-[#6b50ff]/20 transition-all"
                />
                {errors.password && (
                  <span className="text-rose-500">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <div className="w-full text-right">
                <a
                  href="/forgot-password"
                  className="text-sm text-[#4b5679]/60 hover:text-[#5823c9] transition-colors"
                >
                  Forgot password?
                </a>
              </div>

              <button
                className="w-full py-3.5 rounded-full bg-linear-to-r from-[#5823c9] to-[#6b50ff] text-white font-bold shadow-lg shadow-[#6b50ff]/30 hover:scale-[1.02] active:scale-[0.98] transition-all mt-4"
                disabled={loading}
              >
                {loading ? "LOGIN IN..." : "LOGIN"}
              </button>
            </form>
          </div>

          {/* Sign Up Form (Left Side) */}
          <div className="w-1/2 h-full flex flex-col items-center justify-center p-10 gap-6">
            {/* Error massage*/}
            {errorMsg && (
              <div role="alert" className="alert alert-error">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{errorMsg}.</span>
              </div>
            )}

            <div className="text-center">
              <h2 className="text-2xl font-bold text-[#4b5679] mb-2">
                Create Account
              </h2>
              {/* Social Media */}
              <div className="flex justify-center gap-3 w-full">
                <button className="grid place-items-center w-10 h-10 rounded-full bg-[#f2f3fe] text-[#4b5679] hover:bg-[#e0e2f8] transition-colors">
                  <FaFacebookF />
                </button>
                <button className="grid place-items-center w-10 h-10 rounded-full bg-[#f2f3fe] text-[#4b5679] hover:bg-[#e0e2f8] transition-colors">
                  <FaGoogle />
                </button>
                <button className="grid place-items-center w-10 h-10 rounded-full bg-[#f2f3fe] text-[#4b5679] hover:bg-[#e0e2f8] transition-colors">
                  <FaLinkedinIn />
                </button>
              </div>
            </div>
            <p className="text-xs text-[#4b5679]/50 uppercase tracking-widest">
              or use your email
            </p>

            <Register />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
