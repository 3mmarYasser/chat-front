import React from 'react';
interface Props{
    
}
const ChatServerHeader :React.FC<Props> = () => {
    return (
        <div className="flex text-base-content h-12">
            <div
                className="bg-base-100 w-56 flex-none flex items-center justify-between border-b border-base-content border-opacity-20 px-3 py-2">
                <div>Manga UI</div>
                <button>
                    <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                        <path
                            d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
                            className="heroicon-ui"></path>
                    </svg>
                </button>
            </div>
            <div className="flex-1 bg-gray-750 flex items-center justify-between border-b border-gray-900 px-4">
                <div className="flex items-center">
                    <div className="text-gray-500 text-2xl">#</div>
                    <div className="ml-2 text-sm text-white">general</div>
                    <div className="border-l pl-3 ml-3 border-gray-600 text-xs text-gray-400">Here Is The Best Manga Server In Royal Manga
                    </div>
                </div>
                <div className="flex items-center"><a href="#" className="ml-4">
                    <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"
                         className="w-6 h-6 text-gray-500 hover:text-gray-200">
                        <path
                            d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
                    </svg>
                </a> <a href="#" className="ml-4">
                    <svg fill="currentColor" viewBox="0 0 24 24"
                         className="w-6 h-6 text-gray-500 hover:text-gray-200">
                        <path
                            d="M2.24 20.35l6.5-7.5a1 1 0 0 1 1.47-.06l1 1a1 1 0 0 1-.06 1.47l-7.5 6.5c-.93.8-2.22-.48-1.4-1.41z"
                            className="secondary"></path>
                        <path
                            d="M15 15.41V18a1 1 0 0 1-.3.7l-1 1a1 1 0 0 1-1.4 0l-8-8a1 1 0 0 1 0-1.4l1-1A1 1 0 0 1 6 9h2.59L13 4.59V3a1 1 0 0 1 1.7-.7l7 7A1 1 0 0 1 21 11h-1.59L15 15.41z"
                            className="primary"></path>
                    </svg>
                </a> <a href="#" className="ml-4">
                    <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"
                         className="w-6 h-6 text-gray-500 hover:text-gray-200">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path>
                    </svg>
                </a> <a href="#" className="ml-4">
                    <form action="#" className="relative"><input type="text" placeholder="Search" className="rounded bg-gray-900 text-gray-200 text-xs px-2 py-1"/>
                        <span className="absolute right-0 top-0 mr-1 " style={{top: "6px"}}>
                                        <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24"
                                             className="w-4 h-4 text-gray-500 hover:text-gray-200"><path
                                            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                                            className="heroicon-ui"></path></svg>
                                    </span>
                    </form>
                </a> <a href="#" className="ml-4">
                    <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24"
                         className="w-6 h-6 text-gray-500 hover:text-gray-200">
                        <path
                            d="M15.6 15.47A4.99 4.99 0 0 1 7 12a5 5 0 0 1 10 0v1.5a1.5 1.5 0 1 0 3 0V12a8 8 0 1 0-4.94 7.4 1 1 0 1 1 .77 1.84A10 10 0 1 1 22 12v1.5a3.5 3.5 0 0 1-6.4 1.97zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                            className="heroicon-ui"></path>
                    </svg>
                </a> <a href="#" className="ml-4">
                    <svg fill="currentColor" viewBox="0 0 24 24"
                         className="w-6 h-6 text-gray-500 hover:text-gray-200">
                        <g data-name="Layer 2">
                            <g data-name="menu-arrow-circle">
                                <rect width="24" height="24" transform="rotate(180 12 12)"
                                      opacity="0"></rect>
                                <path
                                    d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-5.16V14a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.5-1.5 1 1 0 0 1-2 0 3.5 3.5 0 1 1 4.5 3.34z"></path>
                            </g>
                        </g>
                    </svg>
                </a></div>
            </div>
        </div>

    );
};

export default ChatServerHeader ;
