import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-banner.styles.scss';

const MenuBanner = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${size ? size : ''} menu-banner`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div
      className="menu-banner__background"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="menu-banner__content">
      <div className="menu-banner__title">{title.toUpperCase()}</div>
      <div className="menu-banner__subtitle">shop now</div>
    </div>
  </div>
);

export default withRouter(MenuBanner);
