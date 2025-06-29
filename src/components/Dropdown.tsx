import React from "react";

type DropdownProps = {
  label?: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  ariaLabel?: string;
};

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  value,
  onChange,
  className = "",
  ariaLabel,
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label className="mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <select
        className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={ariaLabel || label}
      >
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
