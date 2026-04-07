import { AlertCircle, Check, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import apiClient from "../../services/api-client";

const ActivateAccount = () => {
  const { uid, token } = useParams();
  const [message, setMessage] = useState("");
  const [error, setError] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    apiClient
      .post("/auth/users/activation/", { uid, token })
      .then(() => {
        setMessage("Account Activate Successfully");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((error) => {
        setError("Something went Wrong!Please Check your Activation link");
        console.log(error);
      });
  }, []);
  return (
    <div className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-zinc-200 overflow-hidden">
            {message && (
              <div className="p-8">
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-2">
                    Account Activation
                  </h3>
                  <p className="text-zinc-600 mb-8">{message}.</p>
                </div>
              </div>
            )}
            {error && (
              <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] w-full max-w-md px-4">
                <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 shadow-xl shadow-rose-100 flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-rose-600" />
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="text-sm font-bold text-rose-900">
                      Action Required
                    </h4>
                    <p className="text-sm text-rose-700 leading-relaxed">
                      {error}
                    </p>
                  </div>
                  <button className="shrink-0 text-rose-400 hover:text-rose-600 transition-colors p-1">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivateAccount;
