import React from 'react';
import ChatMessagesSide from "./components/ChatMessagesSide/ChatMessagesSide";
import ChatChannelMe from "./components/Channel/ChatChannelMe/ChatChannelMe";
import ChatChannelHeader from "./components/Channel/ChatChannelHeader/ChatChannelHeader";
interface Props{
    
}
const ChatChannel :React.FC<Props> = () => {
    return (
        <>

            <ChatChannelHeader/>
            <div className="flex-1 flex overflow-y-hidden">
                <ChatChannelMe/>
                <ChatMessagesSide/>
            </div>
        </>
    );
};

export default ChatChannel ;
