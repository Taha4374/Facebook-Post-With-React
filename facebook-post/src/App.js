// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import './App.css';
import ProfilePicture from './components/ProfilePicture';
import PostContent from './components/PostContent';
import PostActions from './components/PostActions';

function App() {
  return (
    <div className="facebook-post">
      <ProfilePicture imageUrl="profile-picture.jpg" alt="User Profile" />
      <div className="post-container">
        <PostContent
          userName="John Doe"
          postTime="2 hours ago"
          content="This is an example Facebook post using React, CSS, and JavaScript!"
          imageUrl="post-image.jpg"
          alt="Post"
        />
        <PostActions />
      </div>
    </div>
  );
}

export default App;


import React from 'react';

function ProfilePicture({ imageUrl, alt }) {
  return (
    <div className="profile-picture">
      <img src={imageUrl} alt={alt} />
    </div>
  );
}

export default ProfilePicture;



import React from 'react';

function PostContent({ userName, postTime, content, imageUrl, alt }) {
  return (
    <div className="post-content">
      <div className="user-details">
        <span className="user-name">{userName}</span>
        <span className="post-time">{postTime}</span>
      </div>
      <p className="post-text">{content}</p>
      <img className="post-image" src={imageUrl} alt={alt} />
    </div>
  );
}

export default PostContent;



import React from 'react';

function PostActions() {
  return (
    <div className="post-actions">
      <button className="action-button like-button">Like</button>
      <button className="action-button comment-button">Comment</button>
      <button className="action-button share-button">Share</button>
    </div>
  );
}

export default PostActions;
