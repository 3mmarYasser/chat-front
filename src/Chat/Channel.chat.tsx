import React from 'react';
import MessagesSideChat from "./components/MessagesSide/MessagesSide.chat";
import ChannelMeChat from "./components/Channel/ChannelMe/ChannelMe.chat";
import ChannelHeaderChat from "./components/Channel/ChannelHeader/ChannelHeader.chat";
interface Props{
    
}
const ChatChannel :React.FC<Props> = () => {
    return (
        <>

            <ChannelHeaderChat/>
            <div className="flex-1 flex overflow-y-hidden">
                <ChannelMeChat/>
                <MessagesSideChat/>
            </div>
        </>
    );
};

export default ChatChannel ;
