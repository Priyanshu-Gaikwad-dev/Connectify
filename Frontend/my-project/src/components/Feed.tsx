import React from 'react';
import PostCard from './PostCard';
import '../Styles/Feed.css';

interface FeedProps {
  posts: string[];
}

const Feed: React.FC<FeedProps> = ({ posts }) => (
  <div className="feed">
    {posts.map((post, index) => (
      <PostCard key={index} username="User" timestamp="Just now" content={post} />
    ))}
  </div>
);

export default Feed;
