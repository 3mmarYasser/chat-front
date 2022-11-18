import React from 'react';
import {Link} from "react-router-dom";
interface Props{
    user:{userName:string , avatar:string}
    date:string
    msg:string
}
const ChatMessage :React.FC<Props> = ({msg,date,user}) => {
    return (
        <div className="flex mx-6 my-3 py-4">
            <div className="flex-none"><a href="#">
                <img draggable={false} onContextMenu={ev=>ev.preventDefault()} src={user.avatar} alt="UserAvatar"
                     className="w-10 h-10 rounded-full"/></a>
            </div>

            <div className="ml-5">
                <div>
                    <Link to="#" className="text-base-content text-opacity-70 hover:link">{user.userName}</Link>
                    <span className="text-xs text-base-content text-opacity-30 ml-1">{date}</span>
                </div>

                <div className={"text-base-content text-opacity-90"}>
                    {msg}
                </div>
            </div>
        </div>

    );
};

export default ChatMessage ;