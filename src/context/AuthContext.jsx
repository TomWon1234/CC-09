import React, { useContext, useEffect, useState } from "react";
import { WhoAmIRequest, LoginRequest, LogoutRequest } from "../api";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [authStatus, setAuthStatus] = useState("loading");
  
    useEffect(() => {
      WhoAmIRequest().then((data) => {
        setAuthStatus(data ? "signedIn" : "signedOut");
      });
    }, []);

    const signIn = async (username, password) => {
        const res = await LoginRequest(username, password);
        if (res && res.data.success) {
            setAuthStatus("signedIn");
            return res.data
        }
        else{
            return { success: false };
        }
      };
    
      const signOut = async () => {
        const res = await LogoutRequest();
        if (res && res.data.success){
            setAuthStatus("signedOut");
        }
      };
    
      if (authStatus === "loading") return <div>Loading...</div>;

      return (
        <AuthContext.Provider value={{ authStatus, signIn, signOut }}>
          {children}
        </AuthContext.Provider>
      );
    };

export const useAuth = () => useContext(AuthContext);