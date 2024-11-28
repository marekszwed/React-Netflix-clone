import styled from "styled-components";

export const SelectBox = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 10em;
	left: 9em;
`;

export const Label = styled.label`
	font-size: ${(props) => props.theme.fontSize.bigger};
	color: ${(props) => props.theme.colors.pureWhite};
	font-weight: ${({theme}) => theme.fontWeight.bold};
	padding-left: 0.5em;
`;

export const Select = styled.select`
	font-size: ${(props) => props.theme.fontSize.bigger};
	color: ${(props) => props.theme.colors.pureWhite};
	background-color: transparent;
	border-radius: 10px;
	margin-left: 1em;
	padding: 0.2em 0em 0.2em 0.2em;
	cursor: pointer;
`;

export const Option = styled.option`
	font-size: ${(props) => props.theme.fontSize.normal};
	color: ${(props) => props.theme.colors.pureWhite};
	background-color: ${(props) => props.theme.colors.filmSelect};
`;