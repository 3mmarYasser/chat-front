import React from 'react';
import {Link} from "react-router-dom";
interface Props{

}
const ServerUserChat :React.FC<Props> = () => {
    return (
        <li className="px-2 hover:text-gray-200  py-1 my-2">
            <Link to={"#"} className="flex items-center">
                <span className="flex-none">
                    <Link to={"#"}>
                        <img src="https://img.icons8.com/external-others-cattaleeya-thongsriphong/2x/external-User-user-interface-color-line-others-cattaleeya-thongsriphong.png"
                             alt="avatar"
                             className="w-8 h-8 rounded-full"/>
                    </Link>
                </span>
                <span className="ml-2">User</span>
            </Link>
        </li>
    );
};

export default ServerUserChat ;
