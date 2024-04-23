import React from 'react';

const AllCoinsButton = ({ onClick }) => {
  return (
    <button className="buttonTheme" onClick={onClick}>Открыть весь список</button>
  );
};

export default AllCoinsButton;