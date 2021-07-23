const { Op } = require("sequelize");
const db = require("../db");
const Message = require("./message");

const Conversation = db.define("conversation", {});

// find conversation given two user Ids

Conversation.findConversation = async function (user1Id, user2Id) {
  const conversation = await Conversation.findOne({
    where: {
      user1Id: {
        [Op.or]: [user1Id, user2Id]
      },
      user2Id: {
        [Op.or]: [user1Id, user2Id]
      }
    }
  });

  // return conversation or null if it doesn't exist
  return conversation;
};

// /**
//  * Takes in a sender ID, conversation ID. returns # of messages a user has sent that have **NOT** been read yet
//  * @param {*} senderId 
//  * @param {*} conversationId 
//  */
Conversation.countUnreadMessages = async function (senderId, conversationId) {
  return await Message.findAndCountAll({
    where: {
      conversationId,
      senderId: senderId,
      read: false
    }
  });
};

module.exports = Conversation;
