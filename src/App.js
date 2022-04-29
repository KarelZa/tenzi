import { useState, useEffect } from 'react';
import './App.css';
import Die from './components/Die';
import { nanoid } from 'nanoid';
import Confetti from 'confetti-react';
import Button from './components/Button';

function App() {
	const myObjectTimer = {
		currentTimer: 0,
		bestTime: 0,
	};

	const [diceNum, setDiceNum] = useState(allNewDice());
	const [hasWon, setHasWon] = useState(false);
	const [numOfRolls, setNumOfRolls] = useState(() => 0);
	const [timer, setTimer] = useState(() => {
		return JSON.parse(localStorage.getItem('myTimer')) || myObjectTimer;
	});

	const [start, setStart] = useState(false);

	//
	useEffect(() => {
		const allHeld = diceNum.every((die) => die.isHeld);
		const firstValue = diceNum[0].value;
		const allTheSameValue = diceNum.every((die) => die.value === firstValue);
		if (allHeld && allTheSameValue) {
			setHasWon(true);
			setStart(false);
		}
	}, [diceNum]);

	// Takes care of timer
	useEffect(() => {
		let interval = null;
		if (start) {
			interval = setInterval(() => {
				setTimer((prevTimer) => {
					return {
						...prevTimer,
						currentTimer: prevTimer.currentTimer + 1,
					};
				});
			}, 1000);
		} else {
			clearInterval(interval);
		}
		// Saves current timerr value into LocalStorage
		localStorage.setItem('mytimer', JSON.stringify(timer));
		// Clean-up
		return () => clearInterval(interval);
	}, [start, timer]);

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

			setTimer((prevTimer) => {
				return {
					...prevTimer,
					bestTime: prevTimer.currentTimer,
					currentTimer: 0,
				};
			});
		} else {
			setNumOfRolls((prevNumOfRolls) => prevNumOfRolls + 1);
			setStart(true);
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
		return <Die holdDice={() => holdDice(die.id)} key={die.id} isHeld={die.isHeld} value={die.value} />;
		// 2nd - sending both fnc and id - seperately --> in die then call function with id argument
		// return <Die holdDice={holdDice} id={die.id} key={die.id} isHeld={die.isHeld} value={die.value} />;
	});

	return (
		<div className='App'>
			<main>
				{hasWon ? (
					<div className='gameFinished'>
						<Confetti />
						<div className='gameFinished--Congratz'>
							<span>Congratulations</span>
							<br />
							<span>🎉🎉🎉</span>
						</div>
						<p className='gameFinished--message'>
							It took you <b>{numOfRolls}</b> 🎲 rolls to finish Tenzi.{' '}
						</p>
						<h2 className='gameFinished--timer'>
							You've completed the game in <b>{timer.currentTimer}</b> s
						</h2>
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
						<Button text='ROLL 🎲' onClick={rollBtnHandler} />
					</div>
				)}
			</main>
		</div>
	);
}

export default App;
