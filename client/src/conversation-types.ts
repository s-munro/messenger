export type OtherUser = {
 id: number;
 online: boolean;
 photoUrl: string;
 username: string;
};

export type Message = {
 conversationId: number;
 createdAt: Date;
 id: number;
 senderId: number;
 text: string;
 updateAt: Date;
};

export type Conversation = {
 id: number;
 latestMessageText: string;
 messages: Array<Message>;
 otherUser: OtherUser;
 user1?: null | number;
 user2?: null | number;
};
