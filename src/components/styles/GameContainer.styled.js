import styled from 'styled-components';

export const GameContainer = styled.div`
	background-color: #f5f5f5;
	height: 95vh;
	margin: 1rem 0.8rem 0 0.8rem;
	border-radius: 0.5rem;

	@media (min-width: ${({ theme }) => theme.sizes.medium}) {
		height: 97vh;
	}
`;
