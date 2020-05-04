import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  header: {
    padding: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4),
    },
    backgroundColor: theme.palette.primary.main,
  },
  divider: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    maxWidth: 510,
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(4),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    lineHeight: '1rem',
    letterSpacing: '1.25px',
    padding: theme.spacing(2.5, 1.75),
    margin: theme.spacing(5.25, 0, 4),
  },
  link: {
    display: 'block',
    fontWeight: 500,
    lineHeight: '1rem',
    letterSpacing: '1.25px',
    textAlign: 'center',
    width: '100%',
  },
}));

export default useStyles;
