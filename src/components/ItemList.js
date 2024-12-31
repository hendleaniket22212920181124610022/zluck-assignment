import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleItem, deleteItem, updateItem } from '../features/shoppingListSlice';

const ItemList = ({ checkedItems, searchQuery }) => {
  const items = useSelector((state) => state.shoppingList.items);

  const filteredItems = useMemo(() => {
    const regex = new RegExp(searchQuery, 'i'); 
    return items
      .filter((item) => item.checked === checkedItems)
      .filter((item) => regex.test(item.name || '')); 
  }, [items, checkedItems, searchQuery]);

  const dispatch = useDispatch();
  
  const [editItemId, setEditItemId] = useState(null);
  const [newName, setNewName] = useState('');

  const handleEdit = (itemId, currentName) => {
    setEditItemId(itemId);
    setNewName(currentName); 
  };

  const handleSaveEdit = (itemId) => {
    if (newName.trim()) {
      dispatch(updateItem({ id: itemId, name: newName }));
      setEditItemId(null); 
      setNewName('');
    }
  };

  const handleDelete = (itemId) => {
    dispatch(deleteItem(itemId));
  };

  return filteredItems.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredItems.map((item) => (
        <div
          key={item.id}
          className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 shadow-xl rounded-lg overflow-hidden p-6 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105"
        >
          <div className="flex justify-between items-center mb-4">
            {editItemId === item.id ? (
              <div className="flex space-x-2 w-full">
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Edit item name"
                />
                <button
                  onClick={() => handleSaveEdit(item.id)}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                >
                  Done
                </button>
              </div>
            ) : (
              <span className="text-2xl font-semibold text-black">{item.name}</span>
            )}
          </div>

          <div className="flex justify-between items-center mb-4">
            <span className="text-md text-black">{item.qty} items</span>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => dispatch(toggleItem(item.id))}
              className="form-checkbox h-6 w-6 text-blue-600 transition-all duration-300 transform hover:scale-110"
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={() => handleEdit(item.id, item.name)}
              className="bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600 transition"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(item.id)}
              className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-center text-black text-xl">No records found!</p>
  );
};

export default ItemList;
