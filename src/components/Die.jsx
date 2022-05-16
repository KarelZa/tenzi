import React from 'react';
import { StyledDie } from './styles/Die.styled';

export default function Die(props) {
	// Based on value --> number of pips rendered
	let pips = props.value
		? Array(props.value)
				.fill(0)
				.map((arr, i) => <span key={i}></span>)
		: '';

	return (
		<StyledDie bg={props.isHeld} onClick={props.holdDice}>
			{pips}
		</StyledDie>
	);
}
