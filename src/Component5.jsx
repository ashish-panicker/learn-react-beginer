import { useContext } from 'react'
import { UserContext } from './UserContext'

function Component5() {
	const context = useContext(UserContext)
	return (
		<>
			<h2>ChildComponent5: Hey user {context.name}</h2>
		</>
	)
}

export default Component5
