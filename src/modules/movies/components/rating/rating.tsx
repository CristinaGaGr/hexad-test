import React, { useState } from 'react';
import styles from './rating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

type RatingProps = {
	onClick: Function;
	value: number;
	className: string;
}

export const Rating = ({onClick, value, className = ''}: RatingProps) => {
const [hover, setHover] = useState(value);

	return (
		<div className={`${styles.stars} ${className}`}>
			<button onClick={() => onClick(1)}
					onMouseEnter={() => setHover(1)}
					onMouseLeave={() => setHover(value)}
					data-selected={1 <= hover}
			>
				<FontAwesomeIcon icon={faStar}/>
			</button>
			<button onClick={() => onClick(2)}
					onMouseEnter={() => setHover(2)}
					onMouseLeave={() => setHover(value)}
					data-selected={2 <= hover}
			>
				<FontAwesomeIcon icon={faStar}/>
			</button>
			<button onClick={() => onClick(3)}
					onMouseEnter={() => setHover(3)}
					onMouseLeave={() => setHover(value)}
					data-selected={3 <= hover}
			>
				<FontAwesomeIcon icon={faStar}/>
			</button>
			<button onClick={() => onClick(4)}
					onMouseEnter={() => setHover(4)}
					onMouseLeave={() => setHover(value)}
					data-selected={4 <= hover}
			>
				<FontAwesomeIcon icon={faStar}/>
			</button>
			<button onClick={() => onClick(5)}
					onMouseEnter={() => setHover(5)}
					onMouseLeave={() => setHover(value)}
					data-selected={5 <= hover}
			>
				<FontAwesomeIcon icon={faStar}/>
			</button>
		</div>
	);
};