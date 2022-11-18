import React from 'react';
import {AiFillNotification, BsPin} from "react-icons/all";
interface Props{
    
}
const ChatChannelHeader :React.FC<Props> = () => {
    return (
        <div className="flex text-base-content h-12">
            <div className="bg-base-100 w-56 flex-none flex items-center justify-between border-b border-base-content border-opacity-20 px-1 py-2 relative">
                <div className="relative w-full">
                    <input type="text" placeholder="ابحث فى أصدقائك" className="rounded bg-base-300 text-base-content text-xs px-2 py-2 w-full outline-none"/>
                    <span className="absolute right-0 top-0 mr-1 " style={{top: "8px"}}>
                        <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24" className="w-4 h-4 text-gray-500 hover:text-gray-200"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" className="heroicon-ui"></path></svg>
                    </span>
                </div>
            </div>

            <div className="flex-1 bg-base-300 flex items-center justify-between border-b border-base-content border-opacity-20 px-4">
                <div className="flex items-center">
                    <div className="text-base-content text-opacity-50 text-2xl">@</div>
                    <div className="ml-2 text-sm text-base-content text-opacity-80">User Name</div>
                </div>

                <ul className="flex items-center gap-x-3">

                    <li className="cursor-pointer">
                        <AiFillNotification  className="w-6 h-6 text-base-content text-opacity-70 hover:text-opacity-100"/>
                    </li>

                    <li className="cursor-pointer">
                        <BsPin  className="w-6 h-6 text-base-content text-opacity-70 hover:text-opacity-100"/>
                    </li>

                    <li className="relative">
                        <input type="text" placeholder="Search" className="rounded text-xs px-2 py-1 bg-base-100 text-base-content text-xs outline-none"/>
                        <span className="absolute right-0 top-0 mr-1 " style={{top: "6px"}}>
                            <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24"
                                 className="w-4 h-4 text-gray-500 hover:text-gray-200"><path
                                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                                className="heroicon-ui"></path></svg>
                        </span>
                    </li>

                    <li className="cursor-pointer">
                        {/*<HiAtSymbol className="w-6 h-6 text-base-content text-opacity-70 hover:text-opacity-100"/>*/}
                    </li>

                </ul>

            </div>

        </div>
    );
};

export default ChatChannelHeader ;
