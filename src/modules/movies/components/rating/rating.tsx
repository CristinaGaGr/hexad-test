import React, { useEffect, useState } from 'react';
import styles from './rating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


type StarProps = {
	onClick: Function;
	setHover: Function;
	value: number;
	hover: number;
	starValue: number;
}

const Star = ({onClick, setHover, value, hover, starValue}: StarProps) => {
	return (
		<button onClick={() => onClick(starValue)}
				onMouseEnter={() => setHover(starValue)}
				onMouseLeave={() => setHover(value)}
				data-selected={starValue <= hover}
		>
			<FontAwesomeIcon icon={faStar}/>
		</button>
	);
};


type RatingProps = {
	onClick: Function;
	value: number;
	className: string;
}
export const Rating = ({onClick, value, className = ''}: RatingProps) => {
	const [hover, setHover] = useState(value);

	useEffect(() => {
		setHover(value);
	}, [value]);

	return (
		<div className={`${styles.stars} ${className}`}>
			<Star onClick={onClick} hover={hover} setHover={setHover} starValue={1} value={value}/>
			<Star onClick={onClick} hover={hover} setHover={setHover} starValue={2} value={value}/>
			<Star onClick={onClick} hover={hover} setHover={setHover} starValue={3} value={value}/>
			<Star onClick={onClick} hover={hover} setHover={setHover} starValue={4} value={value}/>
			<Star onClick={onClick} hover={hover} setHover={setHover} starValue={5} value={value}/>
		</div>
	);
};