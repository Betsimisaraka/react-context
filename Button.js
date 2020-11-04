import React from 'react';
import { ThemeContextConsumer } from './ThemeContext';

function Button() {
	return (
		<ThemeContextConsumer> 
			{context => (
				<button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch Theme</button>
			)}
		</ThemeContextConsumer>
	)
}

export default Button;
