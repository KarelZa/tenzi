import React from 'react';
import './App.css';

import Die from './components/Die';
import StatsPage from './components/StatsPage';
import MainGame from './components/MainGame';
import useGameLogic from './hooks/useGameLogic';

function App() {
	const { tenziDice, gameFinished, numOfRolls, timer, recordMessage, holdDice, rollBtnHandler } = useGameLogic();

	// Maps over Array of numbers and create dice
	const diceElements = tenziDice.map((die) => {
		// 2ways how to get correct id down to child
		// 1st - sending anonymous fnc down to die with correct id -> basically emmbeding id as parameter that will be called with the function --> whenever the die is clicked
		return <Die holdDice={() => holdDice(die.id)} key={die.id} isHeld={die.isHeld} value={die.value} />;
		// 2nd - sending both fnc and id - seperately --> in die then call function with id argument
		// return <Die holdDice={holdDice} id={die.id} key={die.id} isHeld={die.isHeld} value={die.value} />;
	});

	return (
		<div className='App'>
			<main>
				{gameFinished ? (
					<StatsPage
						numOfRolls={numOfRolls}
						timer={timer}
						recordMessage={recordMessage.current}
						rollBtnHandler={rollBtnHandler}
					/>
				) : (
					<MainGame diceElements={diceElements} rollBtnHandler={rollBtnHandler} />
				)}
			</main>
		</div>
	);
}

export default App;
