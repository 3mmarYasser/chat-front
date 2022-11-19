import React from 'react';
import MessageChat from "./components/Message/Message.chat";
import {AiOutlineGif, BsFillEmojiSunglassesFill, MdAddCircle} from "react-icons/all";
import MessageInputChat from "./components/MessageInput/MessageInput.chat";
import MessagesChat from "./components/Messages/Messages.chat";
interface Props{
    
}
const MessagesSideChat :React.FC<Props> = () => {
    return (
        <div className="bg-base-300 flex-1 flex flex-col ">

            <div className="text-sm text-base-content text-opacity-60 overflow-y-auto h-full">
                <MessagesChat chatId={"123"}/>
            </div>

            <div className="h-24 flex items-center mx-3 border-t border-base-content border-opacity-40">

                <button className="px-2 py-2 h-10 bg-base-200 rounded-l bg-opacity-75 text-base-content text-opacity-50 hover:text-opacity-100 border-r border-base-100 border-opacity-40">
                    <MdAddCircle className="w-6 h-6"/>
                </button>

                <div className="flex-1">
                    <MessageInputChat toUser={"Ammar"}/>
                </div>

                <div className="px-2 py-2 bg-base-200   bg-opacity-75 rounded-r flex items-center h-10">

                    <button className="h-10  rounded-l mx-3 text-base-content text-opacity-50 hover:text-opacity-100">
                        <AiOutlineGif className="w-6 h-6"/>
                    </button>

                    <button className="h-10  rounded-l text-base-content  text-opacity-50 hover:text-opacity-100">
                        <BsFillEmojiSunglassesFill className="w-6 h-6"/>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default MessagesSideChat ;
