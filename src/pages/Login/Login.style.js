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
    padding: theme.spacing(1.5),
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    textAlign: 'center',
    width: '100%',
    display: 'block',
  },
}));

export default useStyles;
