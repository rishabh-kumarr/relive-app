import React from 'react'
import { Container } from '@material-ui/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import User from './components/User/User'

import useStyles from './styles'

const App = () => {
	const classes = useStyles()
	return (
		<BrowserRouter>
			<Container className={classes.app}>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/auth" exact component={User} />
				</Switch>
			</Container>
		</BrowserRouter>
	)
}

export default App
