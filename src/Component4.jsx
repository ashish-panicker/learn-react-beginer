import React from 'react'
import Component5 from './Component5'

function Component4({ data }) {
	return (
		<div>
			ChildComponent4
			<Component5 />
		</div>
	)
}

export default Component4
