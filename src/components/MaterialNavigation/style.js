import { makeStyles } from '@material-ui/core/styles';
import { menuLink } from '../../common/assets/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    textShadow: '4px 3px 0 #7A7A7A'
  },
  menuLink
}));
