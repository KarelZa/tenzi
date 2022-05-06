import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';

export default function useGameLogic() {
	const [tenziDice, setTenziDice] = useState(allNewDice());
	const [gameFinished, setGameFinished] = useState(false); // game state
	const [numOfRolls, setNumOfRolls] = useState(0); // counter of rolls
	const [timer, setTimer] = useState(0); // timer state
	const [toggleTimer, setToggleTimer] = useState(false); // toggleTimer
	const [bestTime, setBestTime] = useState(() => {
		return JSON.parse(localStorage.getItem('myBestTime')) || '1000';
	});
	const recordMessage = useRef('');

	/****************** DICE ******************/
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

	/****************** STORAGE ******************/
	// Innitialize localstorage
	useEffect(() => {
		localStorage.setItem('myBestTime', bestTime);
	}, [bestTime]);

	/****************** TIMER ******************/
	// Takes care of timer
	useEffect(() => {
		let interval = null;
		if (toggleTimer) {
			interval = setInterval(() => {
				setTimer((prevtimer) => prevtimer + 1);
			}, 1000);
		} else {
			// Clears intervatel whenever timer stops
			clearInterval(interval);
		}
		// Clean-up - to prevent memory-leak
		return () => clearInterval(interval);
	}, [toggleTimer]);

	/****************** GAME LOGIC ******************/
	// Takes care about game-winning logic
	useEffect(() => {
		const allHeld = tenziDice.every((die) => die.isHeld); // All dice are held
		const firstValue = tenziDice[0].value; // takes first die's value
		const allTheSameValue = tenziDice.every((die) => die.value === firstValue); // compare other value of dice with first one
		if (allHeld && allTheSameValue) {
			if (timer < bestTime) {
				setBestTime(timer);
				recordMessage.current = `🏆 New Record Time 🏆`;
			} else {
				recordMessage.current = `Current best time ${bestTime} s`;
			}
			setGameFinished(true);
			setToggleTimer(false);
		}
	}, [tenziDice, timer, bestTime]);

	// Roll the dice
	function rollBtnHandler() {
		if (gameFinished) {
			setGameFinished(false);
			setTenziDice(allNewDice());
			setNumOfRolls(0);
			setTimer(0);
		} else {
			setNumOfRolls((prevNumOfRolls) => prevNumOfRolls + 1);
			setToggleTimer(true);
			setTenziDice((prevDice) =>
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
		setTenziDice((prevDiceNum) =>
			// 2. map over prevState of tenziDice
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

	return { tenziDice, gameFinished, numOfRolls, timer, recordMessage, holdDice, rollBtnHandler };
}
