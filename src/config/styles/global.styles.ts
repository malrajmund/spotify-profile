import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		text-decoration: none;
		font-weight: 400;
		outline: none;
		border: none;
		box-shadow: none;
		font-family: "Circular Std", system, -apple-system, BlinkMacSystemFont, sans-serif;
		font-weight: 400;
		font-style: normal;
		letter-spacing: 0.5px;
	}
	body, #__next {
		width: 100%;
		overflow-x: clip;
		-webkit-font-smoothing: antialiased;
	}
`;

export default GlobalStyles;
