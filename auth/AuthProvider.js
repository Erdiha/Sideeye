"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { createContext, useContext, useEffect, useState } from "react";
const { createClient } = require("@supabase/supabase-js");

// create a context for authentication
const AuthContext = createContext({
  session: null,
  user: null,
  signOut: () => {},
});

export const AuthProvider = ({ children }) => {
  const supabaseClient = createClientComponentClient();
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const setData = async () => {
      const users = await supabaseClient.from("users").select("*");

      const {
        data: { session },
        error,
      } = await supabaseClient.auth.getSession();
      if (error) throw error;
      setSession(session);
      setUser(session?.user);
      setLoading(false);
      setAllUsers(users);
    };

    const { data: listener } = supabaseClient.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setUser(session?.user);
        setLoading(false);
      }
    );

    setData();

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const value = {
    session,
    user,
    allUsers,
    signOut: () => supabaseClient.auth.signOut(),
  };

  // use a provider to pass down the value
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// export the useAuth hook
export const useAuth = () => {
  return useContext(AuthContext);
};
