import React from 'react';
import { Avatar } from '../';

interface Props {
    avatar: React.ReactNode;
    primaryText?: string;
    secondaryText?: string;
    href?: string;
    isHover?: boolean;
    onClick: () => void;
}

export function AvatarItem({ primaryText, secondaryText, href, onClick, avatar }: Props) {
    return (
        <div className="flex px-4 py-2 cursor-pointer hover:bg-gray-200" onClick={onClick}>
            {React.isValidElement(avatar) ? React.cloneElement(avatar) : null}
            <div className="flex flex-col justify-center pl-2 ">
                <div className="">{primaryText}</div>
                <div className="text-sm text-gray-600">{secondaryText}</div>
            </div>
        </div>
    );
}
