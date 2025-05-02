import { use } from 'react'
import ThemeContext from './context/ThemeContext'

function App() {
	const { theme, toggleTheme } = use(ThemeContext)
	return (
		<div className='app'>
			<h1>Theme Switcher Demo</h1>
			<button onClick={toggleTheme}>
				Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
			</button>
		</div>
	)
}

export default App
