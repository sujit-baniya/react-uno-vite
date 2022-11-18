import { Suspense } from 'react'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'

import routes from '~react-pages'

export const App = () => {
	return (
		<div className="App flex flex-row min-h-screen bg-gray-100 text-gray-800 w-screen">
			<div className="w-full min-h-screen">
				<Suspense
					fallback={
						<div className="fixed top-0 h-screen w-screen grid place-items-center">
							Loading...
						</div>
					}
				>
					{useRoutes(routes)}
				</Suspense>
			</div>
		</div>
	)
}
