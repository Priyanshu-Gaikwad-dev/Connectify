import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import '../Styles/PostCard.css';

interface PostCardProps {
  id: string;
  username: string;
  timestamp: Date;
  content: string;
  imageUrl?: string;
  likesCount?: number;
  onLike?: (postId: string) => void;
  onComment?: (postId: string) => void;
  onShare?: (postId: string) => void;
}

const PostCard: React.FC<PostCardProps> = ({
  id,
  username,
  timestamp,
  content,
  imageUrl,
  likesCount = 0,
  onLike,
  onComment,
  onShare,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked((prev) => !prev);
    onLike?.(id);
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <div className="user-info">
          <strong>{username}</strong> <span>{formatDistanceToNow(timestamp, { addSuffix: true })}</span>
        </div>
        <button aria-label="More options">
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </button>
      </div>

      <div className="post-content">
        <p>{content}</p>
        {imageUrl && <img src={imageUrl} alt="Post" />}
      </div>

      <div className="post-stats">
        <span>{likesCount} likes</span>
      </div>

      <div className="post-actions">
        <button onClick={handleLike}>
          <FontAwesomeIcon icon={isLiked ? fasHeart : farHeart} />
          {isLiked ? 'Liked' : 'Like'}
        </button>

        <button onClick={() => onComment?.(id)}>💬 Comment</button>

        <button onClick={() => onShare?.(id)}>🔗 Share</button>
      </div>
    </div>
  );
};

export default PostCard;
