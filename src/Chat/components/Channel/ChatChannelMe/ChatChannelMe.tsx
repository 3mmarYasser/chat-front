import React from 'react';
import {BiHomeAlt} from "react-icons/all";
interface Props{

}
const ChatChannelMe :React.FC<Props> = () => {
    return (
        <div className="bg-base-100 w-56 flex-none flex flex-col justify-between">
            <div className="hashtag-bar text-sm leading-relaxed overflow-y-auto">
                <ul className="px-2 py-3">

                </ul>
                <ul className="px-1 py-3 flex flex-col gap-y-2">
                    <li className="flex items-center cursor-pointer text-opacity-50 hover:bg-base-200 py-2 px-3 rounded-lg hover:bg-opacity-50">
                        <div className="avatar online">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/192/192/people" alt={"UserImage"}/>
                            </div>
                        </div>
                        <h3 className="text-[0.95rem]  ml-3">User Name</h3>
                    </li>
                    <li className="flex items-center cursor-pointer text-opacity-50 hover:bg-base-200 py-2 px-3 rounded-lg hover:bg-opacity-50">
                        <div className="avatar offline">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/190/190/people" alt={"UserImage"}/>
                            </div>
                        </div>
                        <h3 className="text-[0.95rem]  ml-3">My Name</h3>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ChatChannelMe ;
