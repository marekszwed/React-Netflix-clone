import { css } from "styled-components";

export const PageBackground = css`
	position: relative;
	display: flex;
	background-position: center;
	background-size: cover;
	width: 100vw;
`;

export const LabelMixin = css`
	display: flex;
	font-size: ${({ theme }) => theme.fontSize.small};
	color: ${({ theme }) => theme.colors.white100};
	overflow: hidden;
`;

export const InputMixin = css`
	display: flex;
	width: 100%;
	font-size: ${({ theme }) => theme.fontSize.normal};
	background-color: ${({ theme }) => theme.colors.grey};
	color: ${({ theme }) => theme.colors.white100};
	border-radius: 10px;
	border: 2px solid transparent;
	overflow: hidden;

	&:focus {
		border: 2px solid ${({ theme }) => theme.colors.white100};
	}
`;

export const Container = css`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-bottom: 0em;
	width: 100%;
`;

export const Pointer = css`
	cursor: pointer;
`;

export const CardTextAnimation = css`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 2.5em 2em;
	background-color: ${({ theme }) => theme.colors.dark200};
	color: ${({ theme }) => theme.colors.white100};
	transition: clip-path 0.6s;
`;

export const CardButton = css`
	position: absolute;
	top: 10px;
	right: 20px;
	padding: 0.3em 0.3em;
	font-size: ${({ theme }) => theme.fontSize.big};
	background-color: transparent;
	color: ${({ theme }) => theme.colors.white100};
	border: none;
	z-index: ${({ theme }) => theme.zindex.positive};
`;

export const CardTitle = css`
	font-size: ${({ theme }) => theme.fontSize.bigger};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.colors.yellow};
`;

export const CardDescription = css`
	display: -webkit-box;
	font-size: ${({ theme }) => theme.fontSize.normal};
	color: ${({ theme }) => theme.colors.white100};
	line-height: 1.7;
	-webkit-line-clamp: 2;
	overflow: hidden;
`;

export const BlankButton = css`
	background-color: transparent;
	border: none;
`;
