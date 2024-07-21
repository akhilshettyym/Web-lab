import React, { useState } from 'react';

const Button = ({ id, label }) => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
    alert(`Button ${id} was clicked`);
  };

  return (
    <button onClick={handleClick}>
      {label} (Clicked {clickCount} times)
    </button>
  );
};

export default Button;