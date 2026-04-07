import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import AppRouters from "./routers/AppRouters.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CartProvider } from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="840846759837-0ouv08ra3s9sah5h7som59kni2boi6ue.apps.googleusercontent.com">
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <AppRouters />
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
);
