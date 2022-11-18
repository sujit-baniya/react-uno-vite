import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import './styles/form.css'
import 'uno.css'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
)
