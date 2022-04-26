import { useState } from 'react';
import './App.css';
import Die from './components/Die';
import { nanoid } from 'nanoid';

function App() {
	const [diceNum, setDiceNum] = useState(allNewDice());

	// Returns 10 random numbers between 1-6 inclusive
	function allNewDice() {
		const diceArray = [];
		for (let i = 0; i < 10; i++) {
			diceArray.push({
				value: Math.ceil(Math.random() * 6),
				isHeld: false,
				id: nanoid(),
			});
		}
		return diceArray;
	}

	// Roll the dice
	function rollBtnHandler() {
		setDiceNum(allNewDice);
	}

	// To determine which dice want user hold
	function holdDice(id) {
		console.log(id);
		// 1. call Function that sets State
		setDiceNum((prevDiceNum) =>
			// 2. map over prevState of diceNum
			prevDiceNum.map((die) => {
				// 3. If die.id matches clicked id
				if (die.id === id) {
					// flip the isHeld property
					return {
						...die,
						isHeld: !die.isHeld,
					};
					// else keep it intact
				} else {
					return die;
				}
			})
		);
	}

	// Maps over Array of numbers and create dice
	const diceElements = diceNum.map((die) => {
		// 2ways how to get correct id down to child
		// 1st - sending anonymous fnc down to die with correct id -> basically emmbeding id as parameter that will be called with the function --> whenever the die is clicked
		return <Die holdDice={() => holdDice(die.id)} key={die.id} isHeld={die.isHeld} value={die.value} />;
		// 2nd - sending both fnc and id - seperately --> in die then call function with id argument
		// return <Die holdDice={holdDice} id={die.id} key={die.id} isHeld={die.isHeld} value={die.value} />;
	});

	return (
		<div className='App'>
			<main>
				<div className='dice-wrapper'>{diceElements}</div>
				<button className='roll-button roll--text' onClick={rollBtnHandler}>
					ROLL
				</button>
			</main>
		</div>
	);
}

export default App;
