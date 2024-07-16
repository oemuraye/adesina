import { useState, useEffect } from 'react';

const useIntersectionObserver = (options) => {
  const [entry, setEntry] = useState(null);
  const [node, setNode] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setEntry(entry), options);

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [node, options]);

  return [setNode, entry];
};

export default useIntersectionObserver;