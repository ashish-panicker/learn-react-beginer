// Import the UserContext
import { UserContext } from './UserContext'
import { useContext } from 'react'
import Component1 from './Component1'

function App() {
	const context = useContext(UserContext)
	return (
		<>
			<h1>App: Welcome User {context.name}</h1>
			<Component1 />
		</>
	)
}

export default App
