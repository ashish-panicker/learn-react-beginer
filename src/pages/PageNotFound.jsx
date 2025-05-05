import React from 'react'
import { Link } from 'react-router'

export default function PageNotFound() {
	return (
		<div className='bg-gray-50  px-6 py-12 text-gray-800'>
			<section className='text-center mb-16'>
				<h1 className='text-5xl font-bold mb-6'>Oops!</h1>
				<p className='text-3xl text-red-600 max-w-xl mx-auto mb-8'>
					Sorry the page you were looking for was not found. Please try again.
				</p>
				<Link
					to='/'
					className='inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition duration-300'>
					Go back to home page
				</Link>
			</section>
		</div>
	)
}
