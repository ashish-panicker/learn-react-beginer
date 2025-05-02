import React from 'react'
import Component2 from './Component2'

function Component1({ data }) {
	return (
		<>
			<div>ChildComponent1</div>
			<Component2 data={data} />
		</>
	)
}

export default Component1
