import React from 'react';
import guid from '../../../utils';


const SocialLinks = ({links, className}) => (
  <div className={className}>
    {links.map(link => (
      <a key={guid()} className="link-social-network">
        {link.image && <img className="link-social-network--img" src={link.image} alt={link.text}/>}
      </a>)
    )}
  </div>
);

export default SocialLinks;
