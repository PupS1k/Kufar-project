import React from 'react';
import IconButton from '../../IconButton';
import guid from '../../../utils';

const SocialLinks = ({images}) => (
  <div className="links-social-network">
    {images.map(image => (
      <IconButton
        key={guid()}
        image={{
          iconSize: 'default',
          icon: image.icon,
          alt: image.alt
        }}
      />
    ))}
  </div>
);

export default SocialLinks;
