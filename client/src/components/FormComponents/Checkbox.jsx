import React from "react";

const Checkbox = ({ label, name, checked, updateValue }) => {
  return (
    <div className="flex ml-2 flex-row space-x-2">
      <input
        type="checkbox"
        id={name}
        name={name}
        value={name}
        onChange={(e) => updateValue(e)}
        checked={checked}
      />
      <label htmlFor="music">{label}</label>
    </div>
  );
};

export default Checkbox;
