import React from 'react';
import ChatRoomsGroup from "./components/ChatRoomsGroup/ChatRoomsGroup";
import ChatServerRoom from "./components/ChatServerRoom/ChatServerRoom";
interface Props{
    
}
const ChatServerRooms :React.FC<Props> = () => {
    return (
        <div className="bg-base-100 w-56 flex-none flex flex-col justify-between">
            <div className="hashtag-bar text-sm leading-relaxed overflow-y-auto">
                <ul className="px-2 py-3">
                    <ChatServerRoom title={"Welcome"} href={"welcome"}/>
                </ul>
                <ChatRoomsGroup title={"Manga Abstract"}>
                    <>
                        <ChatServerRoom title={"General"} href={"general"}/>
                        <ChatServerRoom title={"Chapters"} href={"chapters"}/>
                        <ChatServerRoom title={"Manga"} href={"manga"}/>
                        <ChatServerRoom title={"Team"} href={"team"}/>
                        <ChatServerRoom title={"Docs"} href={"docs"}/>
                        <ChatServerRoom title={"+18"} href={"+18"}/>
                        <ChatServerRoom title={"Help"} href={"help"}/>
                    </>
                </ChatRoomsGroup>
                <ChatRoomsGroup title={"Community"}>
                    <>
                        <ChatServerRoom title={"Feedback"} href={"feedback"}/>
                        <ChatServerRoom title={"Jobs"} href={"jobs"}/>
                    </>
                </ChatRoomsGroup>
                <ChatRoomsGroup title={"Off Topic"} open={false}>
                    <>
                        <ChatServerRoom title={"Design"} href={"design"}/>
                        <ChatServerRoom title={"Development"} href={"development"}/>
                        <ChatServerRoom title={"Random"} href={"random"}/>
                    </>
                </ChatRoomsGroup>


            </div>
        </div>
    );
};

export default ChatServerRooms ;
