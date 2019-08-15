import React from 'react';
import Link from './Link';

const ListLinks = ({classNameContainer, classNameChild, children, links}) => (
  <div className={classNameContainer}>
    {children}
    {links.map(link => (
      <Link key={link.text || link.image} className={classNameChild}>
        {link.image && <img className={`${classNameChild}--img`} src={link.image} alt={link.text}/>}
        {link.text && <p className={`${classNameChild}--text`}>{link.text}</p>}
      </Link>)
    )}
  </div>
);

export default ListLinks;
