import React from 'react';
import Button from './Button';
import { DiceContainer, StyledMainGame } from './styles/MainGame.styled';

export default function MainGame(props) {
	return (
		<StyledMainGame>
			<div className='tenzi-description'>
				<h1>Tenzi</h1>
				<p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
			</div>
			<DiceContainer>{props.diceElements}</DiceContainer>
			<Button text='ROLL 🎲' onClick={props.rollBtnHandler} />
		</StyledMainGame>
	);
}
