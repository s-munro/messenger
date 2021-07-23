const router = require("express").Router();
const { Conversation, Message } = require("../../db/models");
const onlineUsers = require("../../onlineUsers");

// expects {recipientId, text, conversationId } in body (conversationId will be null if no conversation exists yet)
router.post("/", async (req, res, next) => {
  try {
    if (!req.user) {
      return res.sendStatus(401);
    }
    const senderId = req.user.id;
    const { recipientId, text, conversationId, sender } = req.body;

    // if conversation id, we validate users are correct and create message or throw 403 error
    if (conversationId) {
      const { user1Id, user2Id } = await Conversation.findByPk(conversationId);

      if (user1Id === senderId && user2Id === recipientId || user1Id === recipientId && user2Id === senderId) {
        const message = await Message.create({ senderId, text, conversationId, read: false });

        return res.json({ message, sender });
      }
      return res.status(403).json({ error: "Forbidden" });
    }
    // if we don't have conversation id, find a conversation to make sure it doesn't already exist
    let conversation = await Conversation.findConversation(
      senderId,
      recipientId
    );

    if (!conversation) {
      // create conversation
      conversation = await Conversation.create({
        user1Id: senderId,
        user2Id: recipientId,
      });
      if (onlineUsers.includes(sender.id)) {
        sender.online = true;
      }
    }
    const message = await Message.create({
      senderId,
      text,
      conversationId: conversation.id,
      read: false,
    });
    res.json({ message, sender });
  } catch (error) {
    next(error);
  }
});

router.put('/read', async (req, res, next) => {
  const { user } = req;
  const { convoId, senderId } = req.body;

  try {
    if (!user) {
      return res.sendStatus(401);
    } else if (!convoId || !senderId) {
      return res.sendStatus(400);
    }
    const { user1Id, user2Id } = await Conversation.findByPk(convoId);
    if (user1Id !== user.id && user2Id !== user.id) {
      return res.status(403).json({ error: "Forbidden" });
    }

    await Message.markMessagesAsRead(senderId, convoId);

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
