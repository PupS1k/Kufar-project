import React from 'react';

const Link = ({className, link, children}) => (
  <a
    className={className}
    href={link}
  >
    {children}
  </a>
);

export default Link;
