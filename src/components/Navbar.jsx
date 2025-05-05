import React from 'react'
import PageLink from './PageLink'

function Navbar() {
	const links = ['home', 'about', 'contact']
	return (
		<nav className='bg-gray-800 container mx-auto rounded-lg shadow-gray-200 shadow'>
			<div className='px-2'>
				<div className='flex items-center justify-between h-16'>
					<div className='logo rounded-md px-3 py-2 text-sm font-medium text-white'>
						Application Logo
					</div>
					<div className='links'>
						{links.map((link) => (
							<PageLink
								link={link}
								key={link}
							/>
						))}
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
