import React from 'react'
import { NavLink } from 'react-router'

function PageLink({ link }) {
	return (
		<NavLink
			to={link}
			className={({ isActive, isPending }) =>
				`capitalize rounded-md px-3 py-2 font-medium text-white hover:bg-gray-700 hover:text-white 
                ${isActive ? 'font-extrabold bg-gray-600' : ''} 
                ${isPending ? 'font-semibold bg-gray-400' : ''}`
			}>
			{link}
		</NavLink>
	)
}

export default PageLink
