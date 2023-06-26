import React from 'react';
import DropdownMenu from './components/DropdownMenu/DropdownMenu';
import { Share2, Edit, Trash } from 'react-feather'; // Подключение иконок из feather-icons

const App: React.FC = () => {
  const handleShareClick = () => {
    console.log('Share item clicked');
  };

  const handleEditClick = () => {
    console.log('Edit item clicked');
  };

  const handleDeleteClick = () => {
    console.log('Delete item clicked');
  };

  return (
    <div>
      <DropdownMenu
        trigger={<button>Open Dropdown</button>}
        content={[
          {
            label: 'Поделиться в социальных сетях',
            icon: <Share2 />,
            onClick: handleShareClick
          },
          {
            label: 'Редактировать страницу',
            icon: <Edit />,
            onClick: handleEditClick
          },
          {
            label: 'Удалить страницу',
            icon: <Trash />,
            onClick: handleDeleteClick
          }
        ]}
      />
    </div>
  );
};

export default App;
