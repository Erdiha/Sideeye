import { useState } from "react";

const ToggleInput = ({ label, initialState = false, onChange }) => {
  const [isEnabled, setIsEnabled] = useState(initialState);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    if (onChange) {
      onChange(!isEnabled);
    }
  };

  return (
    <label className="flex items-center cursor-pointer justify-between ">
      {label && (
        <span className={` ${isEnabled ? "text-gray-100" : "text-gray-400"}`}>
          {label}
        </span>
      )}
      <div className="relative justify-center items-center flex">
        <input
          type="checkbox"
          className="hidden"
          checked={isEnabled}
          onChange={toggleSwitch}
        />
        <div
          className={`w-12 h-6 bg-gray-300 rounded-full shadow-inner ${
            isEnabled ? "bg-green-400" : "bg-gray-300"
          }`}
        ></div>
        <div
          className={`absolute w-6 h-6  bg-white rounded-full shadow left-0 top-0 transition-transform transform ${
            isEnabled ? "translate-x-full" : "translate-x-0"
          }`}
        ></div>
      </div>
    </label>
  );
};

export default ToggleInput;
