import styled from 'styled-components';

export const StyledButton = styled.button`
	background-color: #038ce2;
	width: 10rem;
	height: 3.5rem;
	border-radius: 5px;
	border: none;
	cursor: pointer;
	margin-top: 0.6rem;
	font-size: ${({ theme }) => theme.typography.small};
	color: #fff;
	font-weight: 600;

	&:focus {
		outline: none;
	}

	&:active {
		box-shadow: inset 5px 5px 10px -5px rgba(0, 0, 0, 0.7);
	}

	@media (min-width: ${({ theme }) => theme.sizes.medium}) {
		width: 14rem;
		height: 4.5rem;
		font-size: ${({ theme }) => theme.typography.medium};
	}

	@media (min-width: ${({ theme }) => theme.sizes.large}) {
		width: 17rem;
		height: 4.8rem;
		margin-bottom: 1rem;
		letter-spacing: 0.1rem;
		font-size: ${({ theme }) => theme.typography.large};
	}
`;
