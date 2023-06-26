import React from 'react';
import DropdownMenu from './components/DropdownMenu/DropdownMenu';

const App: React.FC = () => {
  const handleItemClick = (item: string) => {
    console.log(`Selected item: ${item}`);
  };

  return (
    <div>
      <DropdownMenu
        trigger={<button>˚…˚</button>}
        content={[
          <span key="1">Item 1</span>,
          <span key="2">Item 2</span>,
          <span key="3">Item 3</span>,
          <span key="4">Item 4</span>
        ]}
        onItemSelect={handleItemClick}
      />
    </div>
  );
};

export default App;