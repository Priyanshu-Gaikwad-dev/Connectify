import React from 'react';
import '../Style/InputFilds.css';

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, name, value, onChange, error }) => {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`input ${error ? 'error' : ''}`}
      />
      {error && <div className="error-text">{error}</div>}
    </div>
  );
};

export default InputField;
