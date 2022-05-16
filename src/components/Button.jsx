import React from 'react';
import { StyledButton } from './styles/Button.styled';

export default function Button(props) {
	return (
		<StyledButton className='roll--text' onClick={props.onClick}>
			{props.text}
		</StyledButton>
	);
}
