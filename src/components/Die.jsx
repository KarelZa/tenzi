import React from 'react';

export default function Die(props) {
	const styling = {
		backgroundColor: props.isHeld ? '#59E391' : '#FFF',
		fontWeight: props.isHeld ? 500 : 300,
	};

	return (
		<div className='die' style={styling} onClick={props.holdDice}>
			<span className='die--text'>{props.value}</span>
		</div>
	);
}
