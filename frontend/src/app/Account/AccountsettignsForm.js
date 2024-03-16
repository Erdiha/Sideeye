"use cl{ient";
import ToggleInput from "@/ui/ToggleInput";

import {
  CaretDown,
  CaretUp,
  Faders,
  IdentificationCard,
} from "@phosphor-icons/react";

import { motion } from "framer-motion";
import { useState } from "react";

const AccordionSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 },
  };

  return (
    <div className="mb-4 relative overflow-hidden">
      <button
        className="w-full text-left text-sm font-bold mb-2 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? <CaretUp size={24} /> : <CaretDown size={24} />}
      </button>
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const AccountSettingsForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    notifications: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission (e.g., update user settings)
  };

  const handleDeleteAccount = () => {
    console.log("Deleting account...");
    // Handle account deletion
  };

  const handleToggleChange = (newValue) => {
    console.log("Toggle is now:", newValue ? "On" : "Off");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" shadow-md rounded p-2 h-full mb-1 flex flex-col w-[90vw] md:w-[50dvw] 2xl:w-[40dvw] relative justify-evenly"
    >
      <div className="gap-2 flex flex-col font-bold border p-2">
        <h1 className="text-gray-100 text-lg border-b-[--primary-dark-50] w-full h-fit border-b-2 flex py-2 gap-4 items-center justify-start">
          Credential Changes <IdentificationCard size={28} />
        </h1>
        <motion.div className="text-gray-300 flex flex-col  ">
          <AccordionSection title="Change Username">
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            />
          </AccordionSection>
          <AccordionSection title="Change Email">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            />
          </AccordionSection>
          <AccordionSection title="Change Password">
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </AccordionSection>
          <AccordionSection title="Enable Notifications"></AccordionSection>
        </motion.div>
      </div>
      <div className="gap-2 flex flex-col font-bold border p-2">
        <div className="gap-2 flex flex-col font-bold  p-2">
          <h1 className="text-gray-100 text-lg border-b-[--primary-dark-50] w-full h-fit border-b-2 flex py-2 gap-4 items-center">
            Prefrence Changes <Faders size={24} />
          </h1>
          <div className="flex flex-col">
            <ToggleInput
              label="Units"
              initialState={true}
              onChange={handleToggleChange}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between text-lg p-1 text-gray-100 items-center gap-4 border-2 border-red-500">
        <label htmlFor="">Enable Notifications</label>
        <input
          size="20px"
          type="checkbox"
          name="notifications"
          id="notifications"
          checked={formData.notifications}
          onChange={handleChange}
          className="mr-2"
        />
      </div>
      <div className="flex justify-between items-center">
        <button
          type="submit"
          className="bg-[--primary-dark] border-[1px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save Changes
        </button>
        <button
          type="button"
          onClick={handleDeleteAccount}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Delete Account
        </button>
      </div>
    </form>
  );
};

export default AccountSettingsForm;
