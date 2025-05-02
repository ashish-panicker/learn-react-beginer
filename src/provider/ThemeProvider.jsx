import { useEffect, useState } from 'react'
import ThemeContext from '../context/ThemeContext'

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('light')

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
	}

	const values = { theme, toggleTheme }

	useEffect(() => {
		const themeToRemove = theme === 'light' ? 'dark' : 'light'
		document.body.classList.remove(themeToRemove)
		document.body.classList.add(theme)
	}, [theme])

	return (
		<ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
	)
}

export default ThemeProvider
