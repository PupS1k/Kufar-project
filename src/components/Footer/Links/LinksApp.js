import React from 'react';
import guid from '../../../utils';


const LinksApp = ({links, className}) => (
  <div className={className}>
    {links.map(link => (
      <a key={guid()} className="link-app">
        {link.image && <img className="link-app--img" src={link.image} alt={link.text}/>}
        {link.text && <p className="link-app--text">{link.text}</p>}
      </a>)
    )}
  </div>
);

export default LinksApp;
