import React from "react";

const FormInput = ({ label, value, setValue }) => {
  return (
    <div className="flex w-1/2 flex-col space-y-1">
      <label htmlFor="name">{label}</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Event name"
        value={value}
        className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default FormInput;
