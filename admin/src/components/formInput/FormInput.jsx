import React from "react";

const FormInput = ({
  label,
  value,
  setValue,
  placeholder,
  type = "text",
  obscureText = false,
}) => {
  return (
    <div className="flex w-full flex-col space-y-1">
      <label htmlFor="name">{label}</label>
      <input
        type={type}
        name={label}
        id={label}
        placeholder={placeholder}
        value={value}
        obscureText={obscureText}
        className="border text-black border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default FormInput;
