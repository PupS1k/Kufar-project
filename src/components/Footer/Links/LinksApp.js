import React from 'react';
import guid from '../../../utils';

const LinksApp = ({links}) => (
  <div className="links-app-container">
    {links.map(link => (
      <a key={guid()} className="link-app">
        {link.image && <img className="link-app__img" src={link.image} alt={link.text} />}
        {link.text && <p className="link-app__text">{link.text}</p>}
      </a>
    ))}
  </div>
);

export default LinksApp;
