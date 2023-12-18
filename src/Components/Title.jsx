import React from 'react';

const Title = ({ content }) => {
  return (
    <>
      <div className="title-container">
      <h3>{content}</h3>
      <div><a href="/">Home</a> - {content} </div>
      </div>
    </>
  );
};

export default Title;
