import React from 'react';
import {BiHomeAlt, GrFormAdd, IoIosAdd} from "react-icons/all";
import {Link} from "react-router-dom";
interface Props{

}
const ServersSideChat :React.FC<Props> = () => {
    return (
        <div className=" bg-base-300 w-20 flex-none flex flex-col h-full px-2 py-2">
            <div className="h-full overflow-y-auto">
                <ul className="text-center h-full flex flex-col">
                    <li className="mt-3  ">
                        <Link to={"/"} className=" btn btn-circle text-xl">
                            <BiHomeAlt/>
                        </Link>
                    </li>
                    <li className="border-b border-gray-700 mx-4 mt-3"></li>

                    <li className="mt-3">
                        <Link to={"/server/1"}>
                            <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/2x/external-team-achievements-flaticons-lineal-color-flat-icons.png" alt="Server Image" className="w-12 h-12 rounded-full mx-auto"/>
                        </Link>
                    </li>

                    <li className="mt-3">
                        <Link to={"/server/2"}>
                            <img src="https://img.icons8.com/external-flaticons-flat-circular-flat-icons/2x/external-server-media-agency-flaticons-flat-circular-flat-icons.png" alt="Server Image" className="w-12 h-12 rounded-full mx-auto"/>
                        </Link>
                    </li>

                    <li className="mt-3">
                        <Link to={"/server/3"}>
                            <img src="https://img.icons8.com/bubbles/2x/crowd--v2.png" alt="Server Image" className="w-12 h-12 rounded-full mx-auto"/>
                        </Link>
                    </li>

                    <li className="border-b border-gray-700 mx-4 mt-3"></li>

                    <li className="mt-3">
                        <button className="btn btn-circle text-2xl">
                            <IoIosAdd/>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ServersSideChat ;
