import React from 'react';
import './menu-banner.styles.scss';

const MenuBanner = ({ title, imageUrl, size }) => (
  <div
    style={{
      backgroundImage: `url(${imageUrl})`
    }}
   className={`${size ? size : ''} menu-banner`}
  >
    <div className="menu-banner__content">
      <div className="menu-banner__title">{ title }</div>
      <div className="menu-banner__subtitle">shop now</div>
    </div>
  </div>
);

export default MenuBanner;
