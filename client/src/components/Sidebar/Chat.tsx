import { Box } from '@material-ui/core';
import { BadgeAvatar, ChatContent } from '.';
import { makeStyles } from '@material-ui/core/styles';
import { setActiveChat } from '../../store/activeConversation';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(() => ({
 root: {
  borderRadius: 8,
  height: 80,
  boxShadow: '0 2px 10px 0 rgba(88,133,196,0.05)',
  marginBottom: 10,
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

type Message = {
 conversationId: number;
 createdAt: Date;
 id: number;
 senderId: number;
 text: string;
 updatedAt: Date;
};

type OtherUser = {
 id: number;
 online: boolean;
 photoUrl: string;
 username: string;
};

type Conversation = {
 id: number;
 latestMessageText: string;
 messages: Array<Message>;
 otherUser: OtherUser;
 user1?: null;
 user2?: null;
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
