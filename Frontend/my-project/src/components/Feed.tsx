import React from 'react';
import PostCard from './PostCard';

const Feed: React.FC = () => {
  return (
    <div className="feed">
      {[1, 2, 3].map((postId) => (
        <PostCard key={postId} username="user" timestamp="Just now" content="This is a post." />
      ))}
    </div>
  );
};

export default Feed;
