import styled from 'styled-components';

export const StyledStats = styled.div`
	height: inherit;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	text-align: center;

	.conffeti {
		position: fixed;
		margin-top: -2rem;
	}

	.divider {
		width: 40px;
		height: 2px;
		background-color: rgba(178, 178, 178, 0.029);
		margin: 2.5rem auto;
	}

	& .stats--congratz {
		font-size: 2.2rem;
		font-weight: 600;
	}

	& .stats--overview {
		font-weight: normal;
		font-size: 1.3rem;
	}

	.stats--overview > p {
		line-height: 2.8rem;
		font-size: 1.6rem;
	}

	.stats--overview > h2 {
		font-weight: bold;
		font-size: 1.5rem;
	}

	// MEDIUM SIZED
	@media (min-width: ${({ theme }) => theme.sizes.medium}) {
		& .stats--congratz {
			font-size: 4.2rem;
		}

		.stats--overview > p {
			line-height: 4rem;
			font-size: 2.6rem;
		}

		.stats--overview > h2 {
			font-weight: bold;
			font-size: 2.5rem;
		}
	}

	// LARGE SIZED
	@media (min-width: ${({ theme }) => theme.sizes.large}) {
	}
`;
