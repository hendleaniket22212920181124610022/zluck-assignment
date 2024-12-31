
import React from 'react';
import ItemList from '../components/ItemList';

const CheckedItemsScreen = () => (
  <div className="p-4">
    <ItemList checkedItems={true} />
  </div>
);

export default CheckedItemsScreen;
