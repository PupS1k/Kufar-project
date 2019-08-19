import React from 'react';
import Link from './Link';

const LinksList = ({classNameContainer, classNameChild, links}) => (
  <div className={classNameContainer}>
    {links.map((link, index) => (
      <Link key={index} className={classNameChild}>
        {link.image && <img className={`${classNameChild}--img`} src={link.image} alt={link.text}/>}
        {link.text && <p className={`${classNameChild}--text`}>{link.text}</p>}
      </Link>)
    )}
  </div>
);

export default LinksList;
