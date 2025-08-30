// // import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import './Blog.css';

// // const Blog = () => {
// //   const [reviewsData, setReviewsData] = useState([]);
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   useEffect(() => {
// //     // Fetch JSON data from the correct path
// //     fetch('./data/blog.json')
// //     .then((response) => {
// //       if (!response.ok) {
// //         throw new Error("Network response was not ok");
// //       }
// //       return response.json();
// //     })
// //     .then((data) => setReviewsData(data))
// //     .catch((error) => console.error("Error fetching data:", error));
// // }, []);

// //   const totalReviews = reviewsData.length;

// //   const handlePrev = () => {
// //     setCurrentIndex((prevIndex) => (prevIndex - 1 + totalReviews) % totalReviews);
// //   };

// //   const handleNext = () => {
// //     setCurrentIndex((prevIndex) => (prevIndex + 1) % totalReviews);
// //   };

// //   const getVisibleReviews = () => {
// //     return [
// //       reviewsData[currentIndex],
// //       reviewsData[(currentIndex + 1) % totalReviews],
// //       reviewsData[(currentIndex + 2) % totalReviews]
// //     ];
// //   };

// //   return (
// //     <div className="blog-section-card">
// //       <h1 className="blog-title-card">My Blogs</h1>

// //       <div className="blog-cards-slider">
// //         <div className="arrow left-arrow" onClick={handlePrev}>
// //           &#9664;
// //         </div>

// //         {totalReviews > 0 ? (
// //           <div className="blog-cards-container">
// //             {getVisibleReviews().map((review, index) => (
// //               <div key={index} className="blog-card">
// //                 <img src={review.profilePic} alt="Profile" className="blog-image" />
// //                 <p className="name">{review.date}</p>
// //                 <h3 className="blog-desc">{review.oneLiner}</h3>
// //                 <p className="blog-text">{review.fullReview}</p>
// //                 <Link to={`/blog/${review.link}`} className="birth-chart-button">Continue Reading</Link>
// //               </div>
// //             ))}
// //           </div>
// //         ) : (
// //           <p>Loading reviews...</p>
// //         )}

// //         <div className="arrow right-arrow" onClick={handleNext}>
// //           &#9654;
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Blog;


// // astro-frontend/src/blog/Blog.jsx
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import sanityClient from '../sanityClient'; // <-- Import the client
// import './Blog.css';

// const Blog = () => {
//   const [posts, setPosts] = useState(null);

//   useEffect(() => {
//     // GROQ query to fetch all posts, ordered by publish date
//     sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc) {
//       title,
//       slug,
//       excerpt,
//       mainImage{
//         asset->{
//           _id,
//           url
//         }
//       },
//       publishedAt
//     }`).then((data) => setPosts(data))
//       .catch(console.error);
//   }, []);

//   if (!posts) return <div>Loading blogs...</div>;

//   return (
//     <div className="blog-section-card">
//       <h1 className="blog-title-card">My Blogs</h1>
//       <div className="blog-cards-container">
//         {posts && posts.map((post) => (
//           // Use the slug for the key, it's guaranteed to be unique
//           <div key={post.slug.current} className="blog-card">
//             {/* Make sure mainImage and its asset exist before trying to render */}
//             {post.mainImage && post.mainImage.asset && (
//               <img src={post.mainImage.asset.url} alt={post.title} className="blog-image" />
//             )}
//             {/* The 'name' class can be used for the date */}
//             <p className="name">{new Date(post.publishedAt).toLocaleDateString()}</p>
//             <h3 className="blog-desc">{post.title}</h3>
//             <p className="blog-text">{post.excerpt}</p>
//             {/* The Link should now point to the correct URL structure */}
//             <Link to={`/blog/${post.slug.current}`} className="birth-chart-button">
//               Continue Reading
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Blog;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../sanityClient';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]); // Default to an empty array
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
      excerpt,
      mainImage{ asset->{ url } },
      publishedAt
    }`).then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  // --- NEW: Automatic Scrolling Logic ---
  useEffect(() => {
    // Only set up the interval if there are posts to scroll through
    if (posts.length > 0) {
      const slideInterval = setInterval(() => {
        handleNext();
      }, 10000); // 10000 milliseconds = 10 seconds

      // Clean up the interval when the component unmounts or posts change
      return () => clearInterval(slideInterval);
    }
  }, [posts, currentIndex]);

  const handlePrev = () => {
    if (posts.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length);
    }
  };

  const handleNext = () => {
    if (posts.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
    }
  };

  // --- NEW: Function to get the 3 visible blogs ---
  const getVisiblePosts = () => {
    if (posts.length === 0) return [];
    // Ensure we handle cases with 1, 2, or 3+ posts gracefully
    const visible = [];
    for (let i = 0; i < Math.min(posts.length, 3); i++) {
        visible.push(posts[(currentIndex + i) % posts.length]);
    }
    return visible;
  };

  if (posts.length === 0) return <div>Loading blogs...</div>;

  return (
    <div className="blog-section-card">
      <h1 className="blog-title-card">My Blogs</h1>
      <div className="blog-cards-slider">
        <div className="arrow left-arrow" onClick={handlePrev}>
          &#9664;
        </div>
        <div className="blog-cards-container">
          {getVisiblePosts().map((post) => (
            <div key={post.slug.current} className="blog-card">
              {post.mainImage && post.mainImage.asset && (
                <img src={post.mainImage.asset.url} alt={post.title} className="blog-image" />
              )}
              <p className="name">{new Date(post.publishedAt).toLocaleDateString()}</p>
              <h3 className="blog-desc">{post.title}</h3>
              <p className="blog-text">{post.excerpt}</p>
              <Link to={`/blog/${post.slug.current}`} className="birth-chart-button">
                Continue Reading
              </Link>
            </div>
          ))}
        </div>
        <div className="arrow right-arrow" onClick={handleNext}>
          &#9654;
        </div>
      </div>
    </div>
  );
};

export default Blog;