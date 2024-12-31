import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/shoppingListSlice';

const AddItemForm = ({ closeForm }) => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSave = () => {
    if (name.trim()) {
      dispatch(addItem({ name }));
      closeForm();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg">
        <input
          type="text"
          className="border p-2 w-full mb-4"
          placeholder="Enter item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddItemForm;
