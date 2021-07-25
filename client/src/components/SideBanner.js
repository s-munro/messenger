import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography } from "@material-ui/core";

import bgImg from '../assets/bg-img.png';
import { BubbleIcon } from './Icons';

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    backgroundImage: `linear-gradient(to bottom, rgba(58, 141, 255, 0.85), rgba(134, 185, 255, 0.85)), url(${bgImg})`,
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  sloganText: {
    color: "#ffffff",
    marginTop: "35px",
    fontSize: 32,
    marginBottom: 50,
    width: "75%",
    textAlign: "center",
  },
  bubble: {
    height: 100,
    width: 100,
  }
}));

export const SideBanner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.imageContainer}>
      <Grid className={classes.contentWrapper}>
        <BubbleIcon className={classes.bubble} />
        <Typography className={classes.sloganText}>
          Converse with anyone<br />
          with any language
        </Typography>
      </Grid>
    </Box>
  );
};
