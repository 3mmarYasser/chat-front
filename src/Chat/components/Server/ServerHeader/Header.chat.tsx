import React from 'react';
import {
    BsPinAngleFill, BsQuestionCircleFill, CiSearch,
    FaSlackHash,
    FcSettings, FiAtSign,
    IoNotificationsSharp,
} from "react-icons/all";

interface Props{
    
}
const ChatServerHeader :React.FC<Props> = () => {
    return (
        <div className="flex text-base-content h-12">
            <div className="bg-base-100 w-56 flex-none flex items-center justify-between border-b border-base-content/10 px-3 py-2">
                <div>Manga UI</div>
                <button><FcSettings/></button>
            </div>
            <div className="flex-1 bg-base-300 flex items-center justify-between border-b border-base-content/10 px-4">
                <div className="flex items-center">
                    <div className="text-base-content/80 text-2xl"><FaSlackHash/></div>
                    <div className="ml-2 text-sm text-base-content">Welcome</div>
                    <div className="border-l pl-3 ml-3 border-base-content/80 text-xs text-base-content/60">Here Is The Best Manga Server In Royal Manga</div>
                </div>

                <div className="flex items-center">
                    <button className="ml-4">
                        <IoNotificationsSharp  className="w-6 h-6 text-base-content/60 hover:text-base-content/100"/>
                    </button>

                    <button className="ml-4">
                        <BsPinAngleFill  className="w-6 h-6 text-base-content/60 hover:text-base-content/100"/>
                    </button>

                    <div className="relative ml-4" >
                        <input type="text" placeholder="Search" className="outline-0 rounded bg-base-100 text-base-content text-xs px-2 py-1"/>
                        <button className="absolute  right-0 top-0 mr-1 text-base-content/80 hover:text-base-content/100" style={{top: "6px"}}>
                            <CiSearch className="w-4 h-4 "/>
                        </button>
                    </div>

                    <button className="ml-4">
                        <FiAtSign  className="w-6 h-6 text-base-content/60 hover:text-base-content/100"/>
                    </button>

                    <button className="ml-4">
                        <BsQuestionCircleFill  className="w-6 h-6 text-base-content/60 hover:text-base-content/100"/>
                    </button>

                </div>
            </div>
        </div>

    );
};

export default ChatServerHeader ;
