import React from 'react';

function About(props) {
  const { image, aboutText } = props;

  const defaultImage = "https://via.placeholder.com/215";
  const defaultAboutText = "Welcome to my blog.";

  return (
    <aside>
      <img src={image || defaultImage} alt="blog logo" />
      <p>{aboutText || defaultAboutText}</p>
    </aside>
  );
}

export default About;
