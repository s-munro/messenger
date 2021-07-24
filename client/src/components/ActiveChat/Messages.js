import React, { useMemo } from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";

const Messages = (props) => {
  const { messages, otherUser, userId } = props;

  const lastUnreadIndex = useMemo(() => messages.findIndex((message) => {
    return message.senderId === userId && message.read === false;
  }), [messages, userId]);


  return (
    <Box>
      {messages.map((message, idx) => {
        const time = moment(message.createdAt).format("h:mm");

        return message.senderId === userId ? (
          <SenderBubble key={message.id} text={message.text} time={time} otherUser={otherUser} showReadBubble={lastUnreadIndex === idx} />
        ) : (
          <OtherUserBubble key={message.id} text={message.text} time={time} otherUser={otherUser} />
        );
      })}
    </Box>
  );
};

export default Messages;
