import React from 'react';
import {Link} from "react-router-dom";
interface Props{
    title:string,
    href:string
}
const ServerRoomChat :React.FC<Props> = ({title,href}) => {
    return (
        <li className="text-base-content px-2 text-opacity-50 hover:text-opacity-100 hover:bg-base-200">
            <Link to={href} className="flex items-center">
                <span className="text-xl">#</span> <span className="ml-2">{title}</span>
            </Link>
        </li>
    );
};

export default ServerRoomChat ;
