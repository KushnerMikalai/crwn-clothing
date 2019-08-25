import React from 'react';
import './collection-item.styles.scss';

const CollectionItem = ({ name, imageUrl, price }) => {
  return (
    <div className={'collection-item'}>
      <div className="collection-item__image-wrap">
        <img className={'collection-item__image'} src={imageUrl} alt={name}/>
      </div>
      <div className={'collection-item__info'}>
        <div className={'collection-item__name'}>{name}</div>
        <div className={'collection-item__price'}>${price}</div>
      </div>
    </div>
  )
};

export default CollectionItem;
