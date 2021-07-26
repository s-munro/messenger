import { Box } from '@material-ui/core';
import { BadgeAvatar, ChatContent } from '.';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

import { setActiveChat } from '../../store/activeConversation';
import { Conversation } from '../../conversation-types';

const useStyles = makeStyles((theme) => ({
 root: {
  borderRadius: 8,
  height: 80,
  boxShadow: '0 2px 10px 0 rgba(88,133,196,0.05)',
  marginBottom: theme.spacing(2.25),
  display: 'flex',
  alignItems: 'center',
  '&:hover': {
   cursor: 'grab',
  },
 },
}));

type ChatProps = {
 conversation: Conversation;
};

export const Chat = ({ conversation }: ChatProps) => {
 const otherUser = conversation.otherUser;
 const classes = useStyles();
 const dispatch = useDispatch();

 const handleClick = () => {
  dispatch(setActiveChat(otherUser.username));
 };

 return (
  <Box onClick={() => handleClick()} className={classes.root}>
   <BadgeAvatar
    photoUrl={otherUser.photoUrl}
    username={otherUser.username}
    online={otherUser.online}
    sidebar={true}
   />
   <ChatContent conversation={conversation} />
  </Box>
 );
};
