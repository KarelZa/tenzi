import React from 'react';
import Confetti from 'confetti-react';
import useWindowSize from '../hooks/useWindowSize';
import Button from './Button';
import { StyledStats } from './styles/Stats.styled';

export default function StatsPage(props) {
	const size = useWindowSize(); // WindowSize hook --> to responsively use confetti
	return (
		<StyledStats>
			<Confetti
				width={size.width}
				height={size.height}
				recycle={false}
				tweenDuration={80000}
				numberOfPieces={2300}
				className='conffeti'
			/>
			<div className='stats--congratz'>
				<span>Congratulations</span>
				<br />
				<span>🎉🎉🎉</span>
			</div>
			<div className='stats--overview'>
				<p className='statsPage--stats-recordMessage'>
					It took you <br />
					🎲 <b>{props.numOfRolls}</b> rolls | ⏱️ <b>{props.timer}</b> s <br />
					to finish Tenzi.{' '}
				</p>
				<hr className='divider'></hr>
				<h2>{props.recordMessage}</h2>
			</div>
			<Button text='NEW GAME' onClick={props.rollBtnHandler} />
		</StyledStats>
	);
}
