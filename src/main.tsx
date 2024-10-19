import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import GlobalStyles from './globalStyles.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<GlobalStyles>
			<App />
		</GlobalStyles>
	</StrictMode>
);
