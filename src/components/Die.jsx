import React from 'react';

export default function Die(props) {
	let pips = props.value
		? Array(props.value)
				.fill(0)
				.map((arr, i) => <span className='pip' key={i}></span>)
		: '';

	const styling = {
		backgroundColor: props.isFinished ? '#59E391' : props.isHeld ? '#008adf4c' : '#FFF',
		fontWeight: props.isFinished ? 500 : props.isHeld ? 500 : 300,
	};

	return (
		<div className='face' style={styling} onClick={props.holdDice}>
			{/* <span className='die--text '>{props.value}</span> */}
			{pips}
		</div>
	);
}
