import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import sanityClient from '../sanityClient';
import { PortableText } from '@portabletext/react';
import './BlogArticle.css';

// --- NEW: Import the share buttons and icons ---
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon
} from "react-share";

const BlogArticle = () => {
  const { slug } = useParams();
  const [articleData, setArticleData] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    // --- NEW: Set the current URL when the component mounts ---
    // We do this in useEffect to ensure the window object is available.
    setCurrentUrl(window.location.href);

    // Query for the specific article
    sanityClient.fetch(`*[slug.current == "${slug}"]{
       title,
       mainImage{asset->{url}},
       body,
       excerpt, // <-- Fetch the excerpt for sharing
       publishedAt
    }`).then((data) => setArticleData(data[0]))
      .catch(console.error);
    
    // Query for recent posts
    sanityClient.fetch(`*[_type == "post" && slug.current != "${slug}"] | order(publishedAt desc) [0...5] {
        title,
        slug,
        mainImage{asset->{url}},
        publishedAt
    }`).then((data) => setRecentPosts(data))
      .catch(console.error);

  }, [slug]);

  if (!articleData) return <div>Loading article...</div>;

  return (
    <div className="article-container">
      <div className="article-content">
        <h2 className="article-oneLiner">{articleData.title}</h2>
        {articleData.mainImage && (
          <img src={articleData.mainImage.asset.url} alt={articleData.title} className="article-artimage" />
        )}
        
        <div className='article-para'>
          {articleData.body && <PortableText value={articleData.body} />}
        </div>

        {/* --- NEW: Share Buttons Section --- */}
        <div className="article-share">
          <span>Share this post:</span>
          <FacebookShareButton
            url={currentUrl}
            quote={articleData.excerpt} // Use the excerpt for the quote
            hashtag={"#astrology"}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <TwitterShareButton
            url={currentUrl}
            title={articleData.title}
            hashtags={["astrology", "vedicastrology"]}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <WhatsappShareButton
            url={currentUrl}
            title={articleData.title}
            separator=":: "
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
      </div>

      <div className="recent-posts">
        {/* Your recent posts logic remains the same and is correct */}
        <h3 className="article-recentpost">Recent Posts</h3>
        {recentPosts && recentPosts.map((post) => (
          <div key={post.slug.current} className="recent-post-item">
            {post.mainImage && post.mainImage.asset && (
              <img src={post.mainImage.asset.url} alt="Article Thumbnail" className="article-thumbnail" />
            )}
            <div className="recent-post-text">
              <p className="article-paradate">{new Date(post.publishedAt).toLocaleDateString()}</p>
              <Link to={`/blog/${post.slug.current}`}>{post.title}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogArticle;