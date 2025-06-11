import React from 'react';
import '../Styles/PostCard.css';

interface PostCardProps {
  username: string;
  timestamp: string;
  content: string;
}

const PostCard: React.FC<PostCardProps> = ({ username, timestamp, content }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <span className="username"><strong>{username}</strong></span>
        <span className="timestamp">{timestamp}</span>
      </div>
      
      <div className="post-content">
        {content}
      </div>

      <div className="post-actions">
        <button className="post-btn like-button" aria-label="Like post">❤️ Like</button>
        <button className="post-btn comment-button" aria-label="Comment on post">💬 Comment</button>
        <button className="post-btn share-button" aria-label="Share post">🔗 Share</button>
      </div>
    </div>
  );
};

export default PostCard;
