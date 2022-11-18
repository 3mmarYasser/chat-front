import React from 'react';
import ChatServerHeader from "./components/Server/ChatServerHeader/ChatHeader";
import ChatServerRooms from "./components/Server/ChatServerRooms/ChatServerRooms";
import ChatMessagesSide from "./components/ChatMessagesSide/ChatMessagesSide";
import ChatServerUsers from "./components/Server/ChatServerUsers/ChatServerUsers";
interface Props{
    
}
const ChatServer :React.FC<Props> = () => {
    return (
        <>
            <ChatServerHeader/>
            <div className="flex-1 flex overflow-y-hidden">
                <ChatServerRooms/>
                <div className="flex-1 flex justify-between">
                    <ChatMessagesSide/>
                    <ChatServerUsers/>
                </div>
            </div>
        </>
    );
};

export default ChatServer ;
