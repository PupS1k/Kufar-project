import React from 'react';
import guid from '../../../utils';


const NavButtons = ({links, className}) => (
  <div className={className}>
    {links.map(link => (
      <button key={guid()} className="additional-link">
        {link.image && <img className="additional-link--img" src={link.image} alt={link.text}/>}
        {link.text && <p className="additional-link--text">{link.text}</p>}
      </button>)
    )}
  </div>
);

export default NavButtons;
