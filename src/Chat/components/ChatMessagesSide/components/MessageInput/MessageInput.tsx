import React, {useContext, useState} from 'react';
import {SocketContext} from "../../../../../hooks/chat.provider";

interface Props{
    toUser:string
}
const MessageInput :React.FC<Props> = ({toUser}) => {
    const [message, setMessage] = useState("");
    const ws = useContext(SocketContext);
    const sendMessage = () => {
        ws.sendMessage(message, toUser);
        setMessage("");
    };
    return (
        <>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e)=>{
                    if(e.key === "Enter"){
                        sendMessage();
                    }
                }}
                className="w-full text-sm h-10 px-2 py-2 bg-base-100 bg-opacity-80  focus:outline-none"/>
        </>
    );
};

export default MessageInput ;
