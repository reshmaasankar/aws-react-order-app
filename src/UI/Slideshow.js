import React, { useState, useEffect } from 'react';
import { Children, cloneElement } from "react";
import './Common.css'


const Slideshow = ({ children }) => {
    let [data, setData] = useState(0);
        console.log('data is ----------->', data)
    useEffect(() => {
            console.log('data 2 is', data)
        const interval = setInterval(() => {
                console.log('current log is', data)
                if (data === 4) {
                    setData(0)
                    console.log('data ososo', data)
                } else {
                    setData(data++)
                }
        }, 2000);
        return () => {
            clearInterval(interval);
        };
        }, [data]);
    const StyledChildren = () =>
    Children.map(children, (child, index) =>
      cloneElement(child, {
        className: `${'panel'} ${index === data ? 'active' : ''}`
      })
    );
    return (<StyledChildren/>)
}

export default Slideshow