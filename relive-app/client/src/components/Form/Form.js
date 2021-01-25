import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'

import useStyles from './styles'
import { createPost, updatePost } from '../../actions/posts'

const Form = ({ currentId, setCurrentId }) => {
	const [postData, setpostData] = useState({
		title: '',
		message: '',
		tags: '',
		selectedFile: '',
	})
	const classes = useStyles()
	const dispatch = useDispatch()
	const user = JSON.parse(localStorage.getItem('profile'))

	const posts = useSelector((state) =>
		currentId ? state.posts.find((p) => p._id === currentId) : null
	)

	const clear = () => {
		setCurrentId(0)
		setpostData({
			title: '',
			message: '',
			tags: '',
			selectedFile: '',
		})
	}

	useEffect(() => {
		if (posts) setpostData(posts)
	}, [posts])

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (currentId === 0) {
			dispatch(createPost({ ...postData, name: user?.result?.name }))
			clear()
		} else {
			dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }))
			clear()
		}
	}

	if (!user?.result?.name) {
		return (
			<Paper className={classes.paper}>
				<Typography variant="h6" align="center">
					Please Sign In to create moments worth Reliving!
				</Typography>
			</Paper>
		)
	}

	return (
		<Paper className={classes.paper}>
			<form
				autoComplete="off"
				noValidate
				className={`${classes.root} ${classes.form}`}
				onSubmit={handleSubmit}
			>
				<Typography variant="h6">
					{' '}
					{currentId ? `Editing "${posts.title}"` : 'Relive the moments'}
				</Typography>

				<TextField
					name="title"
					variant="outlined"
					label="Title"
					fullWidth
					value={postData.title}
					onChange={(e) => setpostData({ ...postData, title: e.target.value })}
				/>
				<TextField
					name="message"
					variant="outlined"
					label="Message"
					multiline
					rows={4}
					fullWidth
					value={postData.message}
					onChange={(e) =>
						setpostData({ ...postData, message: e.target.value })
					}
				/>
				<TextField
					name="tags"
					variant="outlined"
					label="Tags(comma-separated)"
					fullWidth
					value={postData.tags}
					onChange={(e) =>
						setpostData({ ...postData, tags: e.target.value.split(',') })
					}
				/>
				<div className={classes.fileInput}>
					<FileBase
						type="file"
						multiple={false}
						onDone={({ base64 }) =>
							setpostData({ ...postData, selectedFile: base64 })
						}
					/>
				</div>

				<Button
					className={classes.buttonSubmit}
					variant="contained"
					color="primary"
					size="large"
					type="submit"
					fullWidth
				>
					Submit
				</Button>
				<Button
					variant="contained"
					color="secondary"
					size="small"
					onClick={clear}
					fullWidth
				>
					Clear
				</Button>
			</form>
		</Paper>
	)
}

export default Form
