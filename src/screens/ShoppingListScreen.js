import React, { useState } from 'react';
import AddItemForm from '../components/AddItemForm';
import ItemList from '../components/ItemList';

const ShoppingListScreen = () => {
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');  

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="p-4">
      {showForm && <AddItemForm closeForm={() => setShowForm(false)} />}
      
      <div className="mb-4">
        <input
          type="text"
          className="border p-2 w-full"
          placeholder="Search for an item..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded fixed bottom-4 right-4"
        onClick={() => setShowForm(true)}
      >
        +
      </button>

      <ItemList checkedItems={false} searchQuery={searchQuery} />
    </div>
  );
};

export default ShoppingListScreen;
