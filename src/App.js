import React, { useState } from 'react';
import TabNavigation from './components/TabNavigation';
import ShoppingListScreen from './screens/ShoppingListScreen';
import CheckedItemsScreen from './screens/CheckedItemsScreen';

const App = () => {
  const [activeTab, setActiveTab] = useState('Tab1');

  return (
    <div className="min-h-screen bg-gray-50">
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'Tab1' && <ShoppingListScreen />}
      {activeTab === 'Tab2' && <CheckedItemsScreen />}
    </div>
  );
};

export default App;
