const Sequelize = require("sequelize");
const db = require("../db");

const Message = db.define("message", {
  text: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  senderId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  read: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  }
});

Message.markMessagesAsRead = async function (senderId, conversationId) {
  const res = await Message.update({ read: true }, {
    where: {
      conversationId: conversationId,
      senderId: senderId,
    }
  });
  return res;
};

module.exports = Message;
