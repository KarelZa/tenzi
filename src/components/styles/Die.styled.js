import styled from 'styled-components';

export const StyledDie = styled.div`
	display: grid;
	grid-template-areas:
		'a . c'
		'e g f'
		'd . b';
	height: 4.2rem;
	width: 4.2rem;
	padding: 0.6rem 0.3rem 0.6rem 0.3rem;
	cursor: pointer;

	background-color: ${({ bg }) => (bg ? '#008adf4c' : '#FFF')};
	box-shadow: inset 0 3px white, inset 0 -4px #bbb, inset 3px 0 #d7d7d7, inset -3px 0 #d7d7d7;
	border-radius: 10%;

	span {
		display: block;
		align-self: center;
		justify-self: center;
		width: 11px;
		height: 11px;
		border-radius: 50%;
		background-color: rgb(32, 0, 0);
		box-shadow: inset 0 3px rgb(0, 0, 0), inset 0 -3px rgb(86, 86, 86);
	}

	span:nth-child(2) {
		grid-area: b;
	}
	span:nth-child(3) {
		grid-area: c;
	}
	span:nth-child(4) {
		grid-area: d;
	}
	span:nth-child(5) {
		grid-area: e;
	}
	span:nth-child(6) {
		grid-area: f;
	}
	/* This selects the last pip of odd-valued dice (1, 3, 5) and positions the pip in the center */
	span:nth-child(odd):last-child {
		grid-area: g;
	}

	@media (min-width: ${({ theme }) => theme.sizes.medium}) {
		height: 6.3rem;
		width: 6.3rem;

		span {
			width: 16px;
			height: 16px;
		}
	}

	@media (min-width: ${({ theme }) => theme.sizes.large}) {
		height: 6.7rem;
		width: 6.7rem;
	}
`;
