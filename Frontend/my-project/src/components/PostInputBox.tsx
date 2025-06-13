import React, { useState, useRef } from 'react';
import '../Styles/PostInputBox.css';

interface PostInputBoxProps {
  onSubmit: (content: string, image?: File) => void;
  maxImageSize?: number;
}

const PostInputBox: React.FC<PostInputBoxProps> = ({
  onSubmit,
  maxImageSize = 5 * 1024 * 1024,
}) => {
  const [content, setContent] = useState('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (!content.trim()) return;
    setIsLoading(true);
    try {
      onSubmit(content.trim(), selectedImage || undefined);
      setContent('');
      setSelectedImage(null);
      setImagePreview('');
    } catch {
      setError('Failed to submit post');
    } finally {
      setIsLoading(false);
    }
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file?.type.startsWith('image/')) {
      setError('Please select a valid image');
      return;
    }
    if (file.size > maxImageSize) {
      setError('Image is too large');
      return;
    }
    setSelectedImage(file);
    const reader = new FileReader();
    reader.onload = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <div className="post-input-box">
        <textarea
            aria-label="Post content"
            placeholder="What's on your mind?" 
            value={content}
            onChange={(e) => setContent(e.target.value)}
        />
        <input
            ref={fileInput}
            type="file"
            accept="image/*"
            hidden
            onChange={handleImage}
        />
        {error && <div className="error-message">{error}</div>}
        {imagePreview && (
            <div className="image-preview-container">
                <img src={imagePreview} alt="Preview" />
                <button 
                    onClick={() => { 
                        setSelectedImage(null); 
                        setImagePreview(''); 
                    }}
                    aria-label="Remove image"
                >
                    ×
                </button>
            </div>
        )}

        <div className="actions">
            <button 
                className="upload-button"
                onClick={() => fileInput.current?.click()}
                type="button"
            >
                Upload Image
            </button>
            <button 
                className="post-button"
                onClick={handleSubmit} 
                disabled={!content.trim() || isLoading}
                type="submit"
            >
                {isLoading ? 'Posting...' : 'Post'}
            </button>
        </div>
    </div>
  )
};

export default PostInputBox;
