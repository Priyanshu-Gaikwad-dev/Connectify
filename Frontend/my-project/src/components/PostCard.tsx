import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import '../Styles/PostCard.css';

interface PostCardProps {
  username: string;
  timestamp: Date; // Changed from string to Date
  content: string;
}

const PostCard: React.FC<PostCardProps> = ({ username, timestamp, content }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const timeAgo = formatDistanceToNow(timestamp, { addSuffix: true });

  return (
    <div className="post-card">
      <div className="post-header">
        <span className="username"><strong>{username}</strong></span>
        <span className="timestamp">{timeAgo}</span>
      </div>
      
      <div className="post-content">
        {content}
      </div>

      <div className="post-actions">
        <button 
          className={`post-btn like-button ${isLiked ? 'liked' : ''}`}
          onClick={handleLike}
          aria-label={isLiked ? 'Unlike post' : 'Like post'}
        >
          {isLiked ? '❤️' : '🤍'} Like
        </button>
        <button className="post-btn comment-button" aria-label="Comment on post">
          💬 Comment
        </button>
        <button className="post-btn share-button" aria-label="Share post">
          🔗 Share
        </button>
      </div>
    </div>
  );
};

export default PostCard;
