export interface IMessage {
    id: string;
    receiver: {
        isUser: boolean;
        id: string;
    };
    text: string;
    attachments: [AttachmentInterface];
    reactions: [ReactionInterface];
}

export interface AttachmentInterface {
    type: string;
    payload: {
        url: string;
        hide: boolean;
    }
    createdAt: Date;
}

export interface ReactionInterface {
    payload: {
        url: string;
    }
    byUserId: string;
    createdAt: Date;
}
