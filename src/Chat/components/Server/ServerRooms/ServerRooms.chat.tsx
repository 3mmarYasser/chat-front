import React from 'react';
import RoomsGroupChat from "./components/RoomsGroup/RoomsGroup.chat";
import ServerRoomChat from "./components/ServerRoom/ServerRoom.chat";
interface Props{
    
}
const ServerRoomsChat :React.FC<Props> = () => {
    return (
        <div className="bg-base-100 w-56 flex-none flex flex-col justify-between">
            <div className="hashtag-bar text-sm leading-relaxed overflow-y-auto">
                <ul className="px-2 py-3">
                    <ServerRoomChat title={"Welcome"} href={"welcome"}/>
                </ul>
                <RoomsGroupChat title={"Manga Abstract"}>
                    <>
                        <ServerRoomChat title={"General"} href={"general"}/>
                        <ServerRoomChat title={"Chapters"} href={"chapters"}/>
                        <ServerRoomChat title={"Manga"} href={"manga"}/>
                        <ServerRoomChat title={"Team"} href={"team"}/>
                        <ServerRoomChat title={"Docs"} href={"docs"}/>
                        <ServerRoomChat title={"+18"} href={"+18"}/>
                        <ServerRoomChat title={"Help"} href={"help"}/>
                    </>
                </RoomsGroupChat>
                <RoomsGroupChat title={"Community"}>
                    <>
                        <ServerRoomChat title={"Feedback"} href={"feedback"}/>
                        <ServerRoomChat title={"Jobs"} href={"jobs"}/>
                    </>
                </RoomsGroupChat>
                <RoomsGroupChat title={"Off Topic"} open={false}>
                    <>
                        <ServerRoomChat title={"Design"} href={"design"}/>
                        <ServerRoomChat title={"Development"} href={"development"}/>
                        <ServerRoomChat title={"Random"} href={"random"}/>
                    </>
                </RoomsGroupChat>


            </div>
        </div>
    );
};

export default ServerRoomsChat ;
