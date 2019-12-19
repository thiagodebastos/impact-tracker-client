import React from 'react';
import { FallbackAvatarImage } from './default-image';
import { AvatarSize } from './types';

interface Props {
    /**The user name */
    name?: string;
    size?: AvatarSize;
    /** className can be used to add further classes to the component */
    className?: string;
    /** The Avatar's image */
    imgUrl?: string;
}

export function Avatar({ name, size = 'md', imgUrl, ...props }: Props) {
    const sizeClassName = {
        xl: '32',
        lg: '24',
        md: '16',
        sm: '10',
    };

    const fontSizes = {
        xl: '6xl',
        lg: '4xl',
        md: 'xl',
        sm: 'lg',
    };

    function getInitialsFromName(name: string) {
        const fullName = name.split(' ');
        if (fullName.length === 1) return [fullName[0][0]];
        return [fullName[0][0], fullName[fullName.length - 1][0]].join('');
    }

    function renderFallback() {
        if (imgUrl) {
            return <img className="w-full" src={imgUrl} alt="User avatar" />;
        }
        if (name) {
            return (
                <div
                    className={`text-white text-${fontSizes[size]}`}
                    data-test-id="avatar-fallback-initials"
                >
                    {getInitialsFromName(name)}
                </div>
            );
        }
        return <FallbackAvatarImage />;
    }

    return (
        <div
            className={`
                flex items-center justify-center overflow-hidden bg-gray-500 rounded-full
                h-${sizeClassName[size]}
                w-${sizeClassName[size]}
                ${props.className || ''}
            `}
        >
            {renderFallback()}
        </div>
    );
}
