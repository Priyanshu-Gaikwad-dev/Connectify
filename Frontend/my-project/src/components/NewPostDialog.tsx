import React, { useState } from 'react';
import Modal from './Modal';
import TextAreaInput from './TextAreaInput';
import '../Styles/NewPostDialog.css';

interface NewPostDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (content: string) => void;
}

const NewPostDialog: React.FC<NewPostDialogProps> = ({ isOpen, onClose, onSubmit }) => {
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (content.trim() === '') return;
    onSubmit(content);
    setContent('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h3>Create Post</h3>
      <TextAreaInput value={content} onChange={(e) => setContent(e.target.value)} />
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
        <button onClick={onClose}>Cancel</button>
        <button onClick={handleSubmit} disabled={!content.trim()}>Post</button>
      </div>
    </Modal>
  );
};

export default NewPostDialog;