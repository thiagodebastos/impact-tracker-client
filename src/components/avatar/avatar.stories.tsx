import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { Avatar, AvatarItem } from './';
import { generateUsers } from '../../mock-data/users';
import { AvatarSize } from './types';

/**
 * Return either the element passed in or undefined
 * to reduce the amount of times I need to write a
 * ternary operator
 */
function trueOrUndefined<T>(name: string, element: T) {
    if (boolean(name, true)) {
        return element;
    }
    return undefined;
}

export default { title: 'Avatar' };

const sizes: AvatarSize[] = ['sm', 'md', 'lg', 'xl'];
export const avatarSizes = () => (
    <div className="flex h-18">
        {generateUsers(sizes.length).map(({ name, imgUrl }, i) => (
            <Avatar
                size={sizes[i]}
                name={trueOrUndefined('with name', name)}
                imgUrl={trueOrUndefined('with image', imgUrl)}
            />
        ))}
    </div>
);

export const avatarItemList = () => (
    <div className="">
        {generateUsers(8)
            .map(({ name, imgUrl, email }) => ({
                primaryText: name,
                secondaryText: email,
                href: imgUrl,
            }))
            .map((item, index) => (
                <AvatarItem
                    {...item}
                    key={index}
                    onClick={action('Select AvatarItem')}
                    avatar={trueOrUndefined(
                        'with Avatar',
                        <Avatar
                            imgUrl={trueOrUndefined('with image', item.href)}
                            size="sm"
                            name={item.primaryText}
                        />,
                    )}
                />
            ))}
    </div>
);
