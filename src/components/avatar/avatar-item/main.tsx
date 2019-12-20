import React from 'react';

interface Props {
    avatar: React.ReactNode;
    primaryText?: string;
    secondaryText?: string;
    href?: string;
    isHover?: boolean;
    onClick: () => void;
    isActive?: boolean;
}

export function AvatarItem({ primaryText, secondaryText, onClick, avatar, isActive }: Props) {
    function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        console.log(event);
        onClick();
    }

    function handleKeyPress(event: React.KeyboardEvent<HTMLDivElement>) {
        console.log(event);
        onClick();
    }

    return (
        <div
            className="flex px-4 py-2 cursor-pointer focus:bg-gray-200 hover:bg-gray-200"
            onClick={handleClick}
            onKeyPress={handleKeyPress}
            role="button"
            tabIndex={0}
        >
            {React.isValidElement(avatar) ? React.cloneElement(avatar) : null}
            <div className="flex flex-col justify-center pl-2 ">
                <div className="">{primaryText}</div>
                <div className="text-sm text-gray-600">{secondaryText}</div>
            </div>
        </div>
    );
}
