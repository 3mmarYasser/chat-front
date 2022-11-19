import React from 'react';
import {Link} from "react-router-dom";
import {CiHashtag} from "react-icons/all";
interface Props{
    title:string,
    href:string
}
const ServerRoomChat :React.FC<Props> = ({title,href}) => {
    return (
        <li className="text-base-content/50 px-2 hover:text-base-content/100 hover:bg-base-200">
            <Link to={href} className="flex items-center">
                <span className="text-md"><CiHashtag/></span> <span className="ml-2">{title}</span>
            </Link>
        </li>
    );
};

export default ServerRoomChat ;
