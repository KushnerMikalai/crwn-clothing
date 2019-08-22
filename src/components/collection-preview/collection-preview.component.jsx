import React from 'react';
import Title from '../title/title.component'

import './collection-preview.styles.scss'

const CollectionPreview = ({ title, items }) => {
  return (
    <div className={'collection-preview'}>
      <Title className={'collection-preview__title'} title={title.toUpperCase()}/>
      <div className="collection-preview__content">
      </div>
    </div>
  )
};

export default CollectionPreview;
