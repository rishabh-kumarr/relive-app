import { makeStyles } from '@material-ui/core/styles'
import { deepPurple } from '@material-ui/core/colors'

export default makeStyles((theme) => ({
	appBar: {
		borderRadius: 15,
		position: 'relative',
		marginBottom: '50px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '10px 50px',
	},
	heading: {
		color: '#7c43b6',
		textDecoration: 'none',
	},
	image: {
		marginRight: '15px',
	},
	toolbar: {
		display: 'flex',
		justifyContent: 'flex-end',
		width: '400px',
	},
	profile: {
		display: 'flex',
		justifyContent: 'space-around',
		width: '300px',
	},
	userName: {
		display: 'flex',
		alignItems: 'center',
		fontWeight: '600',
	},
	brandContainer: {
		display: 'flex',
		alignItems: 'center',
	},
	purple: {
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: deepPurple[500],
	},
	[theme.breakpoints.down('sm')]: {
		appBar: {
			padding: '5px 25px',
			display: 'flex',
			flexDirection: 'column',
		},
		toolbar: {
			justifyContent: 'center',
		},
		profile: {
			justifyContent: 'center',
		},
		userName: {
			marginRight: 15,
		},
		purple: {
         marginRight: 10,
		},
	},
}))
