import React from 'react';
import PostCard from './PostCard';
import '../Styles/Feed.css';

interface Post {
  id: string;
  content: string;
  timestamp: Date;
}

interface FeedProps {
  posts: Post[];
}

const Feed: React.FC<FeedProps> = ({ posts }) => (
  <div className="feed">
    {posts.map((post) => (
      <PostCard
        key={post.id}
        username="User"
        timestamp={post.timestamp.toLocaleString()} // formatted date/time
        content={post.content}
      />
    ))}
  </div>
);

export default Feed;
