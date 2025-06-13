import React, { useState } from 'react';
import PostInputBox from '../components/PostInputBox';
import Feed from '../components/Feed';
import SidebarLeft from '../components/SidebarLeft';
import SidebarRight from '../components/SidebarRight';
import '../Styles/DashboardLayout.css';

interface Post {
  id: string;
  content: string;
  timestamp: Date;
  username: string;
  likesCount: number;
  imageUrl?: string;
}

const DashboardLayout: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleNewPost = (content: string, image?: File) => {
    setIsLoading(true);
    setError(null);
    try {
      let imageUrl;
      if (image) {
        imageUrl = URL.createObjectURL(image);
      }
      const newPost: Post = {
        id: Date.now().toString(), // temporary ID
        content,
        timestamp: new Date(), 
        username: "Anonymous",
        likesCount: 0,
        imageUrl,
      };
      setPosts([newPost, ...posts]);
    } catch {
      setError('Failed to create post');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLike = (postId: string) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? { ...post, likesCount: post.likesCount + 1 }
          : post
      )
    );
  };

  const handleComment = (postId: string) => {
    console.log('Comment on post', postId);
  };

  const handleShare = (postId: string) => {
    const post = posts.find((p) => p.id === postId);
    if (post) {
      navigator.clipboard
        .writeText(post.content)
        .then(() => alert('Post content copied!'))
        .catch(() => alert('Failed to copy.'));
    }
  };

  return (
    <div className="dashboard-layout">
      <aside className="side">
        <SidebarLeft />
      </aside>

      <main className="feed">
        <PostInputBox onSubmit={handleNewPost} />
        <Feed
          posts={posts}
          isLoading={isLoading}
          error={error || undefined}
          onLike={handleLike}
          onComment={handleComment}
          onShare={handleShare}
        />
      </main>

      <aside className="side">
        <SidebarRight />
      </aside>
    </div>
  )
};

export default DashboardLayout;
