import { makeStyles } from '@material-ui/core/styles'

// makeStyle(  {} || function  )

export const useStyles = makeStyles((theme) => ({
  container: {
    margin: '0 auto',
    width: '30vw',
    marginTop: 120,
    padding: '30px 40px 20px',
    [theme.breakpoints.down('sm')]: {
      width: '65vw'
    },
    [theme.breakpoints.down('xs')]: {
      width: '70vw'
    }
  },

  loginForm: {},

  header: {
    textAlign: 'center',
    color: '#4a148c'
  },

  emailAndPass: {
    marginTop: '16px!important'
  },

  logInBtn: {
    background: 'linear-gradient(45deg, #4dd0e1 30%, #9c27b0 90%)',
    borderRadius: '1rem !important',
    fontSize: '15px !important',
    marginTop: '20px!important'
  },

  textBottom: {
    marginTop: 16,
    textAlign: 'center',
    color: 'grey',
    [theme.breakpoints.down('xs')]: {
      fontSize: 14
    }
  },
  signup: {
    marginLeft: 6
  },

  exampleEenter: {
    opacity: 1,
    transition: 'opacity 500ms ease-in'
  }
}))
