import React, { useEffect, useState } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const CountUpAnimation = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  const [setNode, entry] = useIntersectionObserver({
    threshold: 0.1
  });

  useEffect(() => {
    if (entry && entry.isIntersecting) {
      let start = 0;
      const endVal = end;
      const increment = endVal / (duration / 1000 * 60);
      const stepTime = Math.abs(Math.floor(1000 / 60)); // 60fps
      const timer = setInterval(() => {
        start += increment;
        if (start > endVal) {
          start = endVal;
          clearInterval(timer);
        }
        setCount(Math.floor(start));
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [entry, end, duration]);

  return (
    <div ref={setNode}>
      <h1>{count}+</h1>
    </div>
  );
};

export default CountUpAnimation;