import React, { useState, useEffect, useRef, ReactElement } from 'react';
import './DropdownMenu.css';

type DropdownMenuProps = {
	trigger: ReactElement<{ onClick: () => void }>;
	content: {
		label: string;
		icon: ReactElement;
		onClick: () => void;
	}[];
};

type Position = 'bottom-right' | 'top-right' | 'bottom-left' | 'top-left';

const DropdownMenu: React.FC<DropdownMenuProps> = ({ trigger, content }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [position, setPosition] = useState<Position>('bottom-right');
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const calculatePosition = () => {
		if (!dropdownRef.current) return;

		const { top, bottom, left, right } = dropdownRef.current.getBoundingClientRect();
		const { innerWidth, innerHeight } = window;

		const hasEnoughSpaceBottom = bottom + 260 <= innerHeight;
		const hasEnoughSpaceTop = top - 260 >= 0;
		const hasEnoughSpaceRight = right + 260 <= innerWidth;
		const hasEnoughSpaceLeft = left - 260 >= 0;

		if (hasEnoughSpaceBottom) {
			setPosition('bottom-right');
		} else if (hasEnoughSpaceTop) {
			setPosition('top-right');
		} else if (hasEnoughSpaceLeft) {
			setPosition('bottom-left');
		} else if (hasEnoughSpaceRight) {
			setPosition('top-left');
		}
	};

	useEffect(() => {
		if (isOpen) {
			calculatePosition();
		}
	}, [isOpen]);

	const handleItemClick = (onClick: () => void) => {
		onClick();
		setIsOpen(false);
	};

	const toggleMenu = () => {
		setIsOpen((prevState) => !prevState);
	};

	return (
		<div className='dropdown-menu' ref={dropdownRef}>
			<div className='trigger' onClick={toggleMenu}>
				{trigger}
			</div>

			{isOpen && (
				<div className={`content ${position}`} onClick={(e) => e.stopPropagation()}>
					{content.map((item, index) => (
						<div key={index} className='item' onClick={() => handleItemClick(item.onClick)}>
							{item.icon}
							{item.label}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default DropdownMenu;
