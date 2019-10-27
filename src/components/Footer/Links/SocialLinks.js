import React from 'react';
import IconButton from '../../IconButton';
import {guid} from '../../../utils';

const SocialLinks = ({links}) => (
  <div className="links-social-network">
    {links.map(link => (
      <a key={guid()} href={link.href} >
        <IconButton
          key={guid()}
          image={{
            iconSize: 'medium',
            icon: link.icon,
            alt: link.alt
          }}
        />
      </a>
    ))}
  </div>
);

export default SocialLinks;
