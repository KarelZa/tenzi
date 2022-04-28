import React from 'react';

export default function Button(props) {
	return (
		<button className='button roll--text' onClick={props.onClick}>
			{props.text}
		</button>
	);
}
