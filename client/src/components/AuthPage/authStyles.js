import { makeStyles } from '@material-ui/core/styles';

import { theme } from "../../themes/theme";

export const useAuthStyles = makeStyles(() => ({
  root: {
    '& .MuiInputLabel-formControl': {
      color: theme.palette.secondary.main,
      fontWeight: theme.typography.semibold,
    },
    flexGrow: 1,
    height: '100vh',
  },
  section: {
    height: '100%',
    width: '100%',
  },
  mainContent: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: "0px", [theme.breakpoints.down("md")]: {
      height: "90vh",
      position: "relative",
    }, [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(18),
      paddingBottom: theme.spacing(18),
    },
  },
  headerContent: {
    position: 'absolute',
    top: 0,
    color: theme.palette.secondary.main,
  },
  fullWidth: {
    width: "100%",
    paddingTop: "15px",
    fontWeight: "bold",
    marginBottom: theme.spacing(4),
  },
  label: {
    fontWeight: theme.typography.extraBold,
  },
  resize: {
    fontSize: "25px",
    letterSpacing: 1,
  }
}));
