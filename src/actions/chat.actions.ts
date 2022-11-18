import {IMessage} from "../hooks/chat.interface";
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const GET_MESSAGE = 'GET_MESSAGE'

export function sendMessage(message: IMessage) {
    return {
        type: SEND_MESSAGE,
        meta: {remote: true},
        data: message
    };
}

export function getMessage() {
    return {
        type: GET_MESSAGE,
    };
}

export const ChatActions = {
    RECEIVE_MESSAGE: (Message: IMessage) => {
        return {
            type: 'RECEIVE_MESSAGE',
            payload: Message,
        } as const
    },
}
