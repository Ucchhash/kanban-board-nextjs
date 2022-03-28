import React from 'react';
import {ServerIcon} from '@heroicons/react/outline';

function SideBar(props) {
    return (
        <div className="fixed inset-y-0 left-0 bg-white w-40">
            <h1 className="flex items-center justify-center text-2xl
            h-16 bg-red-600 text-white font-bold">Tannie Board</h1>
            <ul className="flex flex-col text-lg h-full">
                <li className="flex justify-center items-center flex-col
                py-7 border-l-4 border-red-500 text-red-500
                font-bold">
                    <ServerIcon className="w-7 h-7 text-red-500"/>
                    Boards
                </li>
            </ul>
        </div>
    );
}

export default SideBar;