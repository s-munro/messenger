import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Bubble } from '../assets/icons/bubble.svg';

const useStyles = makeStyles(() => ({
  root: {
    primary: {
      color: 'white',
      fontSize: 14,
    }
  }
}));

export const BubbleIcon = ({ ...props }) => {
  const classes = useStyles();
  return <Bubble className={classes.primary} {...props} />;
};
