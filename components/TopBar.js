import React from 'react';
import {SearchIcon} from '@heroicons/react/outline';
import Image from 'next/image';

function TopBar(props) {
    return (
        <div className="h-16 pl-40 fixed bg-gradient-to-r from-red-300
        to-red-500 w-full flex items-center justify-between pr-5">
            <div className="flex px-5 items-center">
                <SearchIcon className="w-5 h-5 text-white"/>
                <input type="text" placeholder="Search for tasks ..."
                className=" bg-transparent border-0 text-white placeholder-gray-200
                outline-none focus:ring-0 text-lg"/>
            </div>
        </div>
    );
}

export default TopBar;