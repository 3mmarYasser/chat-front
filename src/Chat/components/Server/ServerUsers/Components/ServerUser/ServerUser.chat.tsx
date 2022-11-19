import React from 'react';
import {Link} from "react-router-dom";
interface Props{
    name:string;
    avatar:string;
    pfLink:string;
}
const ServerUserChat :React.FC<Props> = ({name,avatar,pfLink}) => {
    return (
        <li className="text-base-content text-opacity-40 px-2 hover:text-opacity-100  py-1 my-2">
            <Link to={pfLink} className="flex items-center">
                <span className="flex-none">
                    <Link to={pfLink}>
                        <img src={avatar}
                             alt="avatar"
                             className="w-8 h-8 rounded-full"/>
                    </Link>
                </span>
                <span className="ml-2">{name}</span>
            </Link>
        </li>
    );
};

export default ServerUserChat ;
