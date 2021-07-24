import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import bgImg from '../assets/bg-img.png';



const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    width: "100%",
    height: "100%",
    "&::after": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      top: "0",
      left: "0",
      background: "linear-gradient(#3a8dff, #86b9ff)",
      opacity: "0.85",
    }
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  }
}));

export const SideBanner = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.image} src={bgImg} alt="individuals talking" />
    </div>
  );
};
