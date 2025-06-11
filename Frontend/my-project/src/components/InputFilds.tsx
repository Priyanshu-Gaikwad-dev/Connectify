import React from 'react';

interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputField: React.FC<InputProps> = ({ label, type, name, value, onChange, error }) => {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input
        className={`input ${error ? 'error' : ''}`}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="error-text">{error}</div>}
    </div>
  );
};

export default InputField;
