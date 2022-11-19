import React from 'react';
import {IMessage} from "../../../../../hooks/chat.interface";
import {store} from "../../../../../reducer/store";
import MessageChat from "../Message/Message.chat";
interface Props{
    chatId:string
}
const MessagesChat :React.FC<Props> = () => {
    const [messages, setMessages] = React.useState<IMessage[]>(store.getState().messages.messages);
    store.subscribe(() => {
        setMessages(store.getState().messages.messages);
    });

    return (
        <>

            {messages.length >0? messages.map((message, index) => {
                return (
                    <MessageChat msg={message.text} key={`message:${message.id} ${index};`} date={"2022/9/9"} user={{userName:"User Name" , avatar:"https://img.icons8.com/officel/2x/avatar.png"}}/>
                );
            }):<>
                <MessageChat msg={"Test"} date={"2022/9/9"} user={{userName:"User Name" , avatar:"https://img.icons8.com/officel/2x/avatar.png"}}/>
                <MessageChat msg={"socket.io doesn't work"} date={"2022/9/9"} user={{userName:"My Name" , avatar:"https://img.icons8.com/external-linector-lineal-color-linector/2x/external-avatar-man-avatar-linector-lineal-color-linector.png"}}/>
                <MessageChat msg={"yb"} date={"2022/9/9"} user={{userName:"User Name" , avatar:"https://img.icons8.com/officel/2x/avatar.png"}}/>
                <MessageChat msg={"This chat will disappear when it's"} date={"2022/9/9"} user={{userName:"My Name" , avatar:"https://img.icons8.com/external-linector-lineal-color-linector/2x/external-avatar-man-avatar-linector-lineal-color-linector.png"}}/>
            </>}
        </>
    );
};

export default MessagesChat ;
