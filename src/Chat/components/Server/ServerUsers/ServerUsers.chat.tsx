import React from 'react';
import ServerUserChat from "./Components/ServerUser/ServerUser.chat";
interface Props{
    
}
const ServerUsersChat :React.FC<Props> = () => {
    return (
        <div className="sidebar-users text-sm bg-base-100 w-56 flex-none px-3 py-3 overflow-y-auto">

            <h3 className="uppercase tracking-wide font-semibold text-xs label-text-alt text-opacity-50 mb-2">Admin — 1</h3>

            <ul className="mb-6 truncate">
                <ServerUserChat name={"Admin"} pfLink={"#"} avatar={"https://img.icons8.com/external-others-cattaleeya-thongsriphong/2x/external-User-user-interface-color-line-others-cattaleeya-thongsriphong.png"}/>
            </ul>

            <h3 className="uppercase tracking-wide font-semibold text-xs label-text-alt text-opacity-50 mb-2">Online — 1</h3>

            <ul className="mb-6 truncate">
                <ServerUserChat name={"User"} pfLink={"#"} avatar={"https://img.icons8.com/external-others-cattaleeya-thongsriphong/2x/external-User-user-interface-color-line-others-cattaleeya-thongsriphong.png"}/>
            </ul>

            <h3 className="uppercase tracking-wide font-semibold text-xs label-text-alt text-opacity-50 mb-2">Offline — 1</h3>

            <ul className="mb-6 truncate">
                <ServerUserChat name={"Ahmed"} pfLink={"#"} avatar={"https://img.icons8.com/external-others-cattaleeya-thongsriphong/2x/external-User-user-interface-color-line-others-cattaleeya-thongsriphong.png"}/>
            </ul>

        </div>
    );
};

export default ServerUsersChat ;
