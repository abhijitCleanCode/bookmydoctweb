import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { LogOut } from 'lucide-react';

interface UserProfileProps {
    userData: {
        name: string;
        email: string;
    };
}

const UserProfile = ({ userData }: UserProfileProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    className="inline-flex items-center gap-2 px-4 py-2 cursor-pointer
                     text-sm font-medium text-white bg-blue-500 
                     rounded-full hover:bg-blue-600 transition-colors"
                >
                    Hi, {userData.name}
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-48"
                align="end"
                sideOffset={8} >
                <DropdownMenuItem
                    className="text-[#EA6365] cursor-pointer bg-red-50"
                >
                    <LogOut color='#EA6365' className="mr-2 h-4 w-4" />
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserProfile
