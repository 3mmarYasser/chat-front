import React from 'react';
import ChatServerHeader from "./components/Server/ServerHeader/Header.chat";
import ServerRoomsChat from "./components/Server/ServerRooms/ServerRooms.chat";
import MessagesSideChat from "./components/MessagesSide/MessagesSide.chat";
import ServerUsersChat from "./components/Server/ServerUsers/ServerUsers.chat";
interface Props{
    
}
const ChatServer :React.FC<Props> = () => {
    return (
        <>
            <ChatServerHeader/>
            <div className="flex-1 flex overflow-y-hidden">
                <ServerRoomsChat/>
                <div className="flex-1 flex justify-between">
                    <MessagesSideChat/>
                    <ServerUsersChat/>
                </div>
            </div>
        </>
    );
};

export default ChatServer ;
