import React from 'react';

const TabNavigation = ({ activeTab, setActiveTab }) => (
  <div className="flex justify-around bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 p-4 border-b-2 border-blue-400 rounded-t-lg shadow-lg">
    <button
      className={`text-lg font-medium py-2 px-6 rounded-lg transition-colors duration-300 ease-in-out ${
        activeTab === 'Tab1'
          ? 'bg-blue-500 text-white shadow-md'
          : 'text-blue-600 hover:bg-blue-200'
      }`}
      onClick={() => setActiveTab('Tab1')}
    >
      Shopping List
    </button>
    <button
      className={`text-lg font-medium py-2 px-6 rounded-lg transition-colors duration-300 ease-in-out ${
        activeTab === 'Tab2'
          ? 'bg-blue-500 text-white shadow-md'
          : 'text-blue-600 hover:bg-blue-200'
      }`}
      onClick={() => setActiveTab('Tab2')}
    >
      Checked Items
    </button>
  </div>
);

export default TabNavigation;
