"use client";

import Icon from "@/ui/Icon";
import { Input } from "@/ui/Input";
import { Label } from "@/ui/Label";
import { cn } from "@/utils/cn";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ring } from "ldrs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CustomTooltip from "../../ui/Tippy";
import { showToast } from "../../ui/Toast";

export default function LoginForm() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [passwordDontMatch, setPasswordDontMatch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    let isMounted = true;
    async function getUser() {
      if (isMounted) {
        setLoading(true);
        setError(null);
        try {
          const { data, error } = await supabase.auth.getUser();
          if (error) throw error;
          if (isMounted && data.user) {
            setUser(data.user);
            router.push("/saloon"); // Redirect to saloon page if user is found
          }
        } catch (err) {
          if (isMounted) setError(err.message);
        } finally {
          if (isMounted) setLoading(false);
        }
      }
    }
    getUser();
    return () => {
      isMounted = false;
    };
  }, [router]);

  // handleSignUp function
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.confirmPassword) {
      setPasswordDontMatch(true);
      showToast("Passwords don't match", {
        type: "error",
        position: "bottom-center",
      });
      return;
    } else {
      setPasswordDontMatch(false);
    }

    setLoading(true);
    try {
      const { user, error } = await supabase.auth.signUp({
        email: credentials.email,
        password: credentials.password,
        options: {
          redirectTo: window.location.origin + "/login", // Redirect to the sign-in page
        },
      });

      if (error) {
        showToast(error.message, { type: "error", position: "bottom-center" });
        throw new Error(error.message);
      }

      // Send user data to your backend for storing in the database
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          username: credentials.email.split("@")[0],
          password: credentials.password, // Send the original password for hashing
        }),
      });

      if (!response.ok) {
        const responseData = await response.json();
        showToast(responseData.error, {
          type: "error",
          position: "bottom-center",
        });
        throw new Error("Failed to create user");
      }

      showToast("Please check your email to validate your account", {
        type: "success",
        position: "bottom-center",
      });

      setUser(user);
      setCredentials({ email: "", password: "" });
      setIsLogin(true);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // handleSignIn function
  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password,
      });

      if (error) {
        showToast(error.message, { type: "error", position: "bottom-center" });
        throw new Error(error.message);
      }

      const { user } = data;
      setUser(user);
      setCredentials({ email: "", password: "" });
      router.push("/saloon");
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  if (loading) {
    ring.register("my-precious");
    return (
      <div className="w-screen h-screen bg-slate-600 flex justify-center items-center">
        <my-precious color="white"></my-precious>
      </div>
    );
  }

  console.log("user", loading, user);
  return (
    <main className="flex items-center justify-center min-h-screen bg-[#2c3e50]">
      <div className="max-w-md w-full mx-auto shadow-sm rounded-sm md:rounded-lg p-4 md:p-8 bg-[#2c3e50] text-[--primary-text] px-8 md:px-4 border-[1px] border-white/50">
        <h2 className="font-bold text-xl pb-4 justify-center w-fit mx-auto flex items-center gap-2">
          <Icon />
          {isLogin ? "Login" : "Signup"}
        </h2>
        <form
          className="my-8"
          onSubmit={!isLogin ? handleSignUp : handleSignIn}
        >
          {!isLogin && (
            <LabelInputContainer className="mb-4">
              <Label htmlFor="username">Username</Label>
              <Input
                className="px-2"
                id="username"
                name="username"
                placeholder="Username ( optional )"
                type="text"
                value={credentials.username}
                onChange={handleChange}
              />
            </LabelInputContainer>
          )}
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              className="px-2"
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              value={credentials.email}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                className="px-2 w-full pr-10" // Adjust the paddingRight to make room for the icon
                id="password"
                name="password"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                value={credentials.password}
                onChange={handleChange}
              />
              <CustomTooltip
                content={showPassword ? "Hide password" : "Show password"}
                size="large" // Optionally adjust the size of the tooltip
              >
                {showPassword ? (
                  <EyeSlash
                    onClick={() => setShowPassword(!showPassword)}
                    size={24}
                    color="teal"
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                  />
                ) : (
                  <Eye
                    onClick={() => setShowPassword(!showPassword)}
                    size={24}
                    color="teal"
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                  />
                )}
              </CustomTooltip>
            </div>
          </LabelInputContainer>

          {!isLogin && (
            <LabelInputContainer className="mb-4">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  className="px-2 w-full pr-10" // Adjust the paddingRight to make room for the icon
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  type={showPassword ? "text" : "password"}
                  value={credentials.confirmPasswordpassword}
                  onChange={handleChange}
                />
                <CustomTooltip
                  content={showPassword ? "Hide password" : "Show password"}
                  size="large" // Optionally adjust the size of the tooltip
                >
                  {showPassword ? (
                    <EyeSlash
                      onClick={() => setShowPassword(!showPassword)}
                      size={24}
                      color="teal"
                      className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                    />
                  ) : (
                    <Eye
                      onClick={() => setShowPassword(!showPassword)}
                      size={24}
                      color="teal"
                      className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                    />
                  )}
                </CustomTooltip>
              </div>
            </LabelInputContainer>
          )}
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            {isLogin ? "Log in" : "Sign up"} &rarr;
            <BottomGradient />
          </button>
        </form>
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-white underline"
        >
          {isLogin
            ? "Need an account? Sign up"
            : "Already have an account? Log in"}
        </button>
      </div>
    </main>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
