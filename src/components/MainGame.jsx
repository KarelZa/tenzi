import React from 'react';
import Button from './Button';

export default function MainGame(props) {
	return (
		<div className='mainGame'>
			<div className='tenzi-description'>
				<h1 className='tenzi--title'>Tenzi</h1>
				<p className='tenzi--instructions'>
					Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
				</p>
			</div>
			<div className='dice-wrapper'>{props.diceElements}</div>
			<Button text='ROLL 🎲' onClick={props.rollBtnHandler} />
		</div>
	);
}
