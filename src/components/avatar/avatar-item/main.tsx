import React from 'react';
import { Avatar } from '../index';

interface User {
    name: string;
    src: string;
    email: string;
}

interface Props {
    user: User;
}

export function AvatarItem({ user }: Props) {
    return (
        <div>
            <Avatar imgUrl={user.src} />
        </div>
    );
}
