import { useState, useEffect } from 'react';
import './App.css';
import Die from './components/Die';
import { nanoid } from 'nanoid';
import Confetti from 'confetti-react';
import Button from './components/Button';

function App() {
	const [diceNum, setDiceNum] = useState(allNewDice());
	const [hasWon, setHasWon] = useState(false);
	const [numOfRolls, setNumOfRolls] = useState(0);

	useEffect(() => {
		const allHeld = diceNum.every((die) => die.isHeld);
		const firstValue = diceNum[0].value;
		const allTheSameValue = diceNum.every((die) => die.value === firstValue);
		if (allHeld && allTheSameValue) {
			setHasWon(true);
		}
	}, [diceNum]);

	console.log(numOfRolls);
	// Generate a new die
	function generateNewDie() {
		return {
			value: Math.ceil(Math.random() * 6),
			isHeld: false,
			id: nanoid(),
		};
	}

	// Returns 10 random numbers between 1-6 inclusive
	function allNewDice() {
		const diceArray = [];
		for (let i = 0; i < 10; i++) {
			diceArray.push(generateNewDie());
		}
		return diceArray;
	}

	// Roll the dice
	function rollBtnHandler() {
		if (hasWon) {
			setHasWon(false);
			setDiceNum(allNewDice());
			setNumOfRolls(0);
		} else {
			setNumOfRolls((prevNumOfRolls) => prevNumOfRolls + 1);
			setDiceNum((prevDice) =>
				prevDice.map((die) => {
					if (die.isHeld === false) {
						return generateNewDie();
					} else {
						return die;
					}
				})
			);
		}
	}

	// To determine which dice want user hold
	function holdDice(id) {
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
		return <Die holdDice={() => holdDice(die.id)} key={die.id} isFinished={hasWon} isHeld={die.isHeld} value={die.value} />;
		// 2nd - sending both fnc and id - seperately --> in die then call function with id argument
		// return <Die holdDice={holdDice} id={die.id} key={die.id} isHeld={die.isHeld} value={die.value} />;
	});

	return (
		<div className='App'>
			<main>
				{hasWon ? (
					<div className='gameFinished'>
						<Confetti />
						<span className='gameFinished--Congratz'>Congratulations</span>
						<p className='gameFinished--message'>
							It took you <b>{numOfRolls}</b> 🎲 rolls to finish Tenzi.{' '}
						</p>
						<Button text='NEW GAME' onClick={rollBtnHandler} />
					</div>
				) : (
					<div className='mainGame'>
						<div className='tenzi-description'>
							<h1 className='tenzi--title'>Tenzi</h1>
							<p className='tenzi--instructions'>
								Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
							</p>
						</div>
						<div className='dice-wrapper'>{diceElements}</div>
						{/* <button className='button roll--text' onClick={rollBtnHandler}>
							ROLL 🎲
						</button> */}
						<Button text='ROLL 🎲' onClick={rollBtnHandler} />
					</div>
				)}
			</main>
		</div>
	);
}

export default App;
