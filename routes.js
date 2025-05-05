// routes.js , stores all the routes in my application

import {
	createBrowserRouter as browserRouter,
	Navigate,
	replace,
} from 'react-router'
import Home from './src/pages/Home'
import AboutUs from './src/pages/AboutUs'
import ContactUs from './src/pages/ContactUs'
import Layout from './src/pages/Layout'
import PageNotFound from './src/pages/PageNotFound'

const routes = [
	{
		Component: Layout,
		children: [
			{ path: '/', Component: Home },
			{ path: '/home', Component: Home },
			{ path: '/about', Component: AboutUs },
			{ path: '/contact', Component: ContactUs },
			{ path: '*', Component: PageNotFound }, // 404
		],
	},
]

export const router = browserRouter(routes)
