import React from 'react';
import '../Styles/InputFilds.css';

interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  disabled?: boolean;
}

const InputField: React.FC<InputProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  placeholder,
  disabled = false,
}) => {
  const inputId = `input-${name}`;

  return (
    <div className="input-group">
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        className={`input ${error ? 'error' : ''}`}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${inputId}-error` : undefined}
      />
      {error && (
        <span
          className="error-text"
          id={`${inputId}-error`}
          role="alert"
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default InputField;
