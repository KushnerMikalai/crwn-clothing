import React from 'react';
import Title from '../title/title.component';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className={'collection-preview'}>
      <Title type={'h2'} className={'collection-preview__title'} title={title.toUpperCase()}/>
      <div className="row collection-preview__content">
        {
          items
            .filter((item, idx) => idx < 4)
            .map(({id, ...otherItemProps }) => (
            <div className={'collection-preview__content-item col'} key={id}>
              <CollectionItem {...otherItemProps} />
            </div>
          ))
        }
      </div>
    </div>
  )
};

export default CollectionPreview;
