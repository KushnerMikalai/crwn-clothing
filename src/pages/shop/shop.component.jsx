import React from 'react';
import SHOP_DATA from './shop.data';
import './shop.styles.scss';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    console.log(this.state.collections);
    return (
      <div className='shop'>
        <h1>Shop Page</h1>
        <CollectionPreview title={'Opacha'}/>
      </div>
    )
  }
}

export default ShopPage;
