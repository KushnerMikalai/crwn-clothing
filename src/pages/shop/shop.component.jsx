import React from 'react';
import SHOP_DATA from './shop.data';
import './shop.styles.scss';

import Title from '../../components/title/title.component';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const { collections } = this.state;

    return (
      <div className='shop-page'>
        <div className="container">
          <Title title={'Shop Page'} />
          <div className="shop-page__row">
            {
              collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default ShopPage;
