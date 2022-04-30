import React from 'react';
import Confetti from 'confetti-react';
import WindowSize from '../hooks/WindowSize';
import Button from './Button';

export default function StatsPage(props) {
	const size = WindowSize(); // WindowSize hook --> to responsively use confetti
	return (
		<div className='statsPage'>
			<Confetti
				width={size.width}
				height={size.height}
				recycle={false}
				tweenDuration={80000}
				numberOfPieces={2300}
				className='conffeti'
			/>
			<div className='statsPage--congratz'>
				<span>Congratulations</span>
				<br />
				<span>🎉🎉🎉</span>
			</div>
			<div className='statsPage--stats'>
				<p className='statsPage--stats-recordMessage'>
					It took you <br />
					🎲 <b>{props.numOfRolls}</b> rolls | ⏱️ <b>{props.timer}</b> s <br />
					to finish Tenzi.{' '}
				</p>
				<hr className='divider'></hr>
				<h2 className='statsPage--stats-record'>{props.recordMessage}</h2>
				<Button text='NEW GAME' onClick={props.rollBtnHandler} />
			</div>
		</div>
	);
}
