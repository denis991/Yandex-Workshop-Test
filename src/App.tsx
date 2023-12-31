import React from 'react';
import DropdownMenu from './components/DropdownMenu/DropdownMenu';
import { Share2, Edit, Trash } from 'react-feather'; // Подключение иконок из feather-icons
import './App.scss';

interface DropdownDirection {
	direction: string[];
}

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

	const dropdownDirection: DropdownDirection = {
		direction: ['up-left', 'up-right', 'down-left', 'down-right'],
	};
	const dropdownContent = [
		{
			label: 'Поделиться в социальных сетях',
			icon: <Share2 />,
			onClick: handleShareClick,
		},
		{
			label: 'Редактировать страницу',
			icon: <Edit />,
			onClick: handleEditClick,
		},
		{
			label: 'Удалить страницу',
			icon: <Trash />,
			onClick: handleDeleteClick,
		},
	];

	return (
		<div className='dropdown-container'>
			{dropdownDirection.direction.map((item, index) => (
				<div
					key={`${index} Direction ${Date.now() + Math.random()}`}
					className={`dropdown-wrapper ${item}`}
				>
					<DropdownMenu
						trigger={<button className='dropdown-menu__trigger-button'>…</button>}
						content={dropdownContent}
					/>
				</div>
			))}
		</div>
	);
};

export default App;
