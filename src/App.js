import React from 'react';
import { ThemeProvider } from 'styled-components'; // Providing global state for theme
import './App.css';

import Die from './components/Die';
import StatsPage from './components/Stats';
import MainGame from './components/MainGame';
import useGameLogic from './hooks/useGameLogic';
import GlobalStyles from './components/styles/GlobalStyle';
import { GameContainer } from './components/styles/GameContainer.styled';

// THEME OBJECT
const theme = {
	// Setting default colors for the parts of the webpage
	colors: {
		header: '#ebfbff',
		body: '#fff',
		footer: '#003333',
	},
	// Media Query Sizes
	sizes: {
		small: '600px',
		medium: '768px',
		large: '992px',
	},
	typography: {
		small: '1.5rem',
		medium: '2rem',
		large: '2.5rem',
	},
};

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
		// Providing theme object to theme prop
		<ThemeProvider theme={theme}>
			{/* Global styles */}
			<GlobalStyles />
			<GameContainer>
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
			</GameContainer>
		</ThemeProvider>
	);
}

export default App;
