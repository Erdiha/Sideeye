'use client'
import Icon from "@/ui/Icon";
import { Input } from "@/ui/Input";
import { Label } from "@/ui/Label";
import { cn } from "@/utils/cn";
import { useState } from "react";

export default function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Credentials:", credentials); // Log the credentials for debugging
    const endpoint = isLogin ? "login" : "signup";
    fetch(`http://localhost:8000/api/${endpoint}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`${isLogin ? "Login" : "Signup"} response:`, data);
        // Handle the response here
      })
      .catch((error) =>
        console.error(`Error in ${isLogin ? "login" : "signup"}:`, error)
      );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#2c3e50]">
      <div className="max-w-md w-full mx-auto shadow-sm rounded-sm md:rounded-lg p-4 md:p-8 bg-[#2c3e50] text-[--primary-text] px-8 md:px-4 border-[1px] border-white/50">
        <h2 className="font-bold text-xl pb-4 justify-center w-fit mx-auto flex items-center gap-2">
          <Icon />
          {isLogin ? "Login" : "Signup"}
        </h2>
        <form className="my-8" onSubmit={handleSubmit}>
          {!isLogin && (
            <LabelInputContainer className="mb-4">
              <Label htmlFor="username">Username</Label>
              <Input
                className="px-2"
                id="username"
                name="username"
                placeholder="Username"
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
            <Input
              className="px-2"
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              value={credentials.password}
              onChange={handleChange}
            />
          </LabelInputContainer>
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
    </div>
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
