import React, { useEffect, useState } from 'react'
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core'
import { Link, useHistory, useLocation } from 'react-router-dom'

import relive from '../../images/relive.png'
import useStyles from './styles'
import { useDispatch } from 'react-redux'

import * as actionType from '../../constants/actionTypes'

import decode from 'jwt-decode'

const Navbar = () => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
	const classes = useStyles()
	const dispatch = useDispatch()
	const history = useHistory()
	const location = useLocation()

	const logout = () => {
		dispatch({ type: actionType.LOGOUT })

		history.push('/')
		setUser(null)
	}

	useEffect(() => {
		const token = user?.token

		if (token) {
			const decodedToken = decode(token)
			if (decodedToken.exp * 1000 < new Date().getTime()) logout()
		}
		setUser(JSON.parse(localStorage.getItem('profile')))
	}, [location])

	return (
		<AppBar position="static" color="inherit" className={classes.appBar}>
			<div className={classes.brandContainer}>
				<img src={relive} alt="icon" height="40" className={classes.image} />
				<Typography
					component={Link}
					to="/"
					variant="h2"
					align="center"
					className={classes.heading}
				>
					Relive
				</Typography>
			</div>
			<Toolbar className={classes.toolbar}>
				{user?.result ? (
					<div className={classes.profile}>
						<Avatar
							className={classes.purple}
							alt={user.result.name}
							src={user.result.imageUrl}
						>
							{user.result.name.charAt(0)}
						</Avatar>
						<Typography className={classes.userName} variant="h6">
							{user.result.name}
						</Typography>
						<Button
							variant="contained"
							className={classes.logout}
							color="secondary"
							onClick={logout}
						>
							Logout
						</Button>
					</div>
				) : (
					<Button
						component={Link}
						to="/auth"
						variant="contained"
						color="primary"
					>
						Sign in
					</Button>
				)}
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
