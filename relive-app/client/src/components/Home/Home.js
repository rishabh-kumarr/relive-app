import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid } from '@material-ui/core'

import Form from '../Form/Form'
import Posts from '../Posts/Posts'
import { useDispatch } from 'react-redux'

import { getPosts } from '../../actions/posts'

import useStyles from './styles'

const Home = () => {
	const [currentId, setCurrentId] = useState(0)
	const dispatch = useDispatch()
	const classes = useStyles()

	useEffect(() => {
		dispatch(getPosts())
    }, [currentId, dispatch])
    
	return (
		<Grow in>
			<Container>
				<Grid
					container
					justify="space-between"
					alignItems="stretch"
					className={classes.mainContainer}
					spacing={3}
				>
					<Grid item xs={12} sm={12} md={8}>
						<Posts setCurrentId={setCurrentId} />
					</Grid>
					<Grid item xs={12} sm={12} md={4}>
						<Form currentId={currentId} setCurrentId={setCurrentId} />
					</Grid>
				</Grid>
			</Container>
		</Grow>
	)
}

export default Home
