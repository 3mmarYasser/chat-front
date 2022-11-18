import React, {useEffect, useState, Suspense, lazy} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Chat from "../Chat/Chat.page";
import ChatServer from "../Chat/Server.chat";
import ChatChannel from "../Chat/Channel.chat";
import {SocketProvider ,SocketContext} from "../hooks/chat.provider";
const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<p>loading...</p>}>
                <Routes>
                        <Route path={"/"} element={
                            <SocketProvider>
                                <Chat/>
                            </SocketProvider>
                        }>
                            <Route index element={<Navigate to={"/channel/me"}/>}/>
                            <Route path={"server"}>
                                <Route index element={<Navigate to={"/channel/me"}/>}/>
                                <Route path={":id"} element={<ChatServer/>}/>

                            </Route>
                            <Route path={"channel"}>
                                <Route index element={<Navigate to={"/channel/me"}/>}/>
                                <Route path={":id"} element={<ChatChannel/>}/>
                            </Route>
                        </Route>
                    <Route path={"/me"} element={<p>Me</p>}/>
                    <Route path={"*"} element={<p>404</p>}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
