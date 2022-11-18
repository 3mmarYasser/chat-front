import {createContext, ReactNode} from "react";
import socketIOClient, {Socket} from "socket.io-client";
import {useDispatch} from "react-redux";
import {push} from "redux-first-history";
import { ChatActions } from "../actions/chat.actions";
import {IMessage} from "./chat.interface";
import {addMessage} from "../reducer/message.reducer";
export const SocketContext = createContext<ISocketContext>(null as any);

interface IProps {
    children: ReactNode
}
interface ISocketContext {
    sendMessage: (message: string, toUser : string) => void
}
let socket: typeof Socket;
let ws



export const SocketProvider = ({children}: IProps) => {

    const dispatch = useDispatch()

    socket = socketIOClient("http://192.168.1.2:3000/chat");

    socket.on("connect", () => {
        console.log("Connected");
        console.log(socket.id);
    });
    socket.on("disconnect", () => {
        console.log("Disconnected");

    });
    socket.on("connect_error", (err: Error) => {
        console.error("Connect Error", err);
    });

    socket.on("connect_timeout", (err: Error) => {
        console.error("Connect Timeout", err);
    });

    socket.on("recMessage", (msg: IMessage) => {
        console.log(msg);
        dispatch(addMessage(msg))
    });

    const sendMessage = (message: string, toUser : string) => {
        socket.emit('send_message', { text : message, email: toUser });
    }


    ws = {
        sendMessage
    }
    return <SocketContext.Provider value={ws}>{children}</SocketContext.Provider>

}
