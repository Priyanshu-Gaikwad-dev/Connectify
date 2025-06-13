import React from 'react';
import PostCard from './PostCard';
import '../Styles/Feed.css';

interface Post {
  id: string;
  content: string;
  timestamp: Date;
  username: string;
  imageUrl?: string;
  likesCount: number;
}

interface FeedProps {
  posts: Post[];
  isLoading?: boolean;
  error?: string;
  onLike?: (postId: string) => void;
  onComment?: (postId: string) => void;
  onShare?: (postId: string) => void;
}

const Feed: React.FC<FeedProps> = ({
  posts,
  isLoading = false,
  error,
  onLike,
  onComment,
  onShare,
}) => {
  if (isLoading) return (
    <div className="feed-loading" role="status">
      Loading posts...
    </div>
  );

  if (error) return (
    <div className="feed-error" role="alert">
      {error}
    </div>
  );

  if (posts.length === 0) return (
    <div className="feed-empty" role="status">
      No posts to show
    </div>
  );
  
  return (
    <div className="feed" role="feed" aria-label="Posts feed">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          username={post.username}
          timestamp={post.timestamp}
          content={post.content}
          imageUrl={post.imageUrl}
          likesCount={post.likesCount}
          onLike={onLike}
          onComment={onComment}
          onShare={onShare}
        />
      ))}
    </div>
  );
};

export default Feed;
