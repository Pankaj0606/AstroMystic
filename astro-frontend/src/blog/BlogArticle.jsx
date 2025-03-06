import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaFacebook, FaTwitter } from 'react-icons/fa';  // Import Font Awesome icons
import './BlogArticle.css';


const BlogArticle = () => {
  const { link } = useParams();
  const [articleData, setArticleData] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    fetch('/data/blog.json')
      .then((response) => response.json())
      .then((data) => {
        const currentArticle = data.find((item) => item.link === link);
        setArticleData(currentArticle);

        // Sort posts by date, descending, and exclude the current article
        const sortedPosts = data
          .filter((item) => item.link !== link)
          .sort((a, b) => new Date(b.date) - new Date(a.date));
        setRecentPosts(sortedPosts.slice(0, 5));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [link]);

  // If article data is still loading, show a loading message
  if (!articleData) return <div>Loading...</div>;

  return (
    <div className="article-container">
      <div className="article-content">
        <h2 className="article-oneLiner">{articleData.oneLiner}</h2>
        {articleData.image && (
          <img src={articleData.image} alt="Article" className="article-artimage" />
        )}
        
        <p className="article-para">{articleData.article}</p>

        {/* Share options */}
        <div className="article-share">
          <span>Share this post:</span>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`} target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className="recent-posts">
  <h3 className="article-recentpost">Recent Posts</h3>
  {recentPosts.map((post, index) => (
    <div key={index} className="recent-post-item">
      <img src={post.image} alt="Article Thumbnail" className="article-thumbnail" />
      <div className="recent-post-text">
        <p className="article-paradate">{post.date}</p>
        <Link to={`/blog/${post.link}`}>{post.oneLiner}</Link>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default BlogArticle;
