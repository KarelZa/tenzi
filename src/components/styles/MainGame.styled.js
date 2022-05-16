import styled from 'styled-components';

export const StyledMainGame = styled.div`
	height: inherit;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;

	& > div:first-of-type {
		margin: 0;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}

	div > h1 {
		font-size: 2.3rem;
		margin: 0;
	}

	div > p {
		margin: 0;
		padding: 0rem 1.5rem 0.3rem 1.5rem;
		font-family: 'Inter', sans-serif;
		font-size: 1.05rem;
	}

	@media (min-width: ${({ theme }) => theme.sizes.medium}) {
		justify-content: space-evenly;

		div > h1 {
			font-size: 4.5rem;
			margin-bottom: 1rem;
		}

		div > p {
			padding: 0rem 3.6rem 0.3rem 3.6rem;
			font-size: ${({ theme }) => theme.typography.medium};
		}
	}

	@media (min-width: ${({ theme }) => theme.sizes.large}) {
		div > h1 {
			font-size: 5.5rem;
		}

		div > p {
			width: 100%;
			padding: 0 7rem;
			font-size: 2rem;
		}
	}
`;

export const DiceContainer = styled.div`
	display: grid;
	grid-template: auto auto / repeat(2, 1fr);
	gap: 1.5rem;

	// MEDIUM SIZED
	@media (min-width: ${({ theme }) => theme.sizes.medium}) {
		grid-template: auto auto / repeat(5, 1fr);
		gap: 1.8rem;
	}
	// LARGE SIZED
	@media (min-width: ${({ theme }) => theme.sizes.large}) {
		gap: 2.2rem;
	}
`;
