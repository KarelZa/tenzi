import React from 'react';

export default function Die(props) {
	let pips = props.value
		? Array(props.value)
				.fill(0)
				.map((arr, i) => <span className='pip' key={i}></span>)
		: '';

	const styling = {
		backgroundColor: props.isHeld ? '#008adf4c' : '#FFF',
	};

	return (
		<div className='face' style={styling} onClick={props.holdDice}>
			{/* <span className='die--text '>{props.value}</span> */}
			{pips}
		</div>
	);
}
