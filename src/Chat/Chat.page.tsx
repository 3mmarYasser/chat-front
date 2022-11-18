import React,{useState , useEffect} from 'react';
import io from 'socket.io-client';
import ChatServersSide from "./components/Server/ChatServersSide/ChatServersSide";
import {Outlet} from "react-router-dom";

const Chat :React.FC = () => {

    return (
        <>
            <div className="relative" dir={"ltr"}>
                <div className={"flex w-full h-screen bg-base-300"}>
                    <ChatServersSide/>
                    <div className="flex-1 flex flex-col  h-full max-h-full">
                        <Outlet/>
                    </div>
                </div>
                {/*<span className="bg-gradient-to-r from-primary to-accent w-1/2 h-1/2 absolute right-0 -bottom-1 -z-50"></span>*/}
            </div>
        </>
    );
};

export default Chat ;
