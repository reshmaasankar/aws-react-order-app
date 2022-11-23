import React, { useState, useEffect } from 'react';
import { Children, cloneElement } from 'react';
import './Common.css';

const Slideshow = ({ children }) => {
  let [data, setData] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (data === 4) {
        setData(0);
      } else {
        setData(data++);
      }
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [data]);
  const StyledChildren = () =>
    Children.map(children, (child, index) =>
      cloneElement(child, {
        className: `${'panel'} ${index === data ? 'active' : ''}`,
      })
    );
  return <StyledChildren />;
};

export default Slideshow;
