import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, CssBaseline, Button } from '@material-ui/core';

import { SidebarContainer } from './Sidebar';
import { ActiveChat } from './ActiveChat';
import { logout, fetchConversations } from '../store/utils/thunkCreators';
import { clearOnLogout } from '../store/index';

const useStyles = makeStyles(() => ({
 root: {
  height: '97vh',
 },
 logout: {
  height: '40px',
  width: '120px',
 },
}));

type User = {
 id: number;
 createdAt: Date;
 email: string;
 isFetching: boolean;
 photoUrl: string;
 updatedAt: Date;
 username: string;
};

type StateProps = {
 user: User;
};

export const Home = () => {
 const [isLoggedIn, setIsLoggedIn] = useState(false);
 const classes = useStyles();
 const dispatch = useDispatch();
 const user = useSelector((state: StateProps) => state.user);

 useEffect(() => {
  dispatch(fetchConversations());
 }, []);

 useEffect(() => {
  user.id && setIsLoggedIn(true);
 }, [user.id]);

 const handleLogout = async () => {
  setIsLoggedIn(false);
  dispatch(logout(user.id));
  dispatch(clearOnLogout());
 };

 if (!user.id) {
  if (isLoggedIn) return <Redirect to="/home" />;
  return <Redirect to="/register" />;
 }
 return (
  <>
   {/* logout button will eventually be in a dropdown next to username */}
   <Button className={classes.logout} onClick={handleLogout}>
    Logout
   </Button>
   <Grid container component="main" className={classes.root}>
    <CssBaseline />
    <SidebarContainer />
    <ActiveChat />
   </Grid>
  </>
 );
};
