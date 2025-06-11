import React from 'react';

interface PostCardProps {
  username: string;
  timestamp: string;
  content: string;
}

const PostCard: React.FC<PostCardProps> = ({ username, timestamp, content }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <strong>{username}</strong> <span>{timestamp}</span>
      </div>
      <div className="post-content">{content}</div>
      <button className="like-button">❤️ Like</button>
    </div>
  );
};

export default PostCard;