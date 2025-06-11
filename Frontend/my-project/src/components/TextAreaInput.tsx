import React from 'react';
import '../Styles/TextAreaInput.css';

interface TextAreaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

const TextAreaInput: React.FC<TextAreaProps> = ({ value, onChange, placeholder }) => (
  <textarea
    className="textarea-input"
    value={value}
    onChange={onChange}
    placeholder={placeholder || 'What’s on your mind?'}
  />
);

export default TextAreaInput;
