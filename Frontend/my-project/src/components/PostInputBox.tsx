import React, { useState } from 'react';
import '../Styles/PostInputBox.css';

interface PostInputBoxProps {
  onSubmit: (content: string) => void;
}

const PostInputBox: React.FC<PostInputBoxProps> = ({ onSubmit }) => {
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (!content.trim()) return;
    onSubmit(content.trim());
    setContent('');
  };

  return (
    <div className="post-input-box">
      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="post-input"
      />
      <button onClick={handleSubmit} className="post-submit-btn" disabled={!content.trim()}>
        Post
      </button>
    </div>
  );
};

export default PostInputBox;
