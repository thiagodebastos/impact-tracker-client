const userPool = [
    {
        name: 'Thiago de Bastos',
        imgUrl: generateAvatarUrl(150),
        email: 'thiago@email.com',
    },
    {
        name: 'Elissa de Bastos',
        imgUrl: generateAvatarUrl(150),
        email: 'elissa@email.com',
    },
    {
        name: 'Captain Planet',
        imgUrl: generateAvatarUrl(150),
        email: 'thiago@email.com',
    },
    {
        name: 'Joe',
        imgUrl: generateAvatarUrl(150),
        email: 'joe@email.com',
    },
    {
        name: 'Samantha dela Silva Rodriguez',
        imgUrl: generateAvatarUrl(150),
        email: 'sam@email.com',
    },
    {
        name: 'Oracle of Delphi',
        imgUrl: generateAvatarUrl(150),
        email: 'oracle@email.com',
    },
];

export function generateAvatarUrl(size: number) {
    const baseUrl = 'https://i.pravatar.cc';
    const randomUserSeed = Math.floor(Math.random() * 100);
    return `${baseUrl}/${size}?u=${randomUserSeed}@pravatar.com`;
}

export function generateUsers(total: number) {
    let users = [];
    let count = total;

    while (count > 0) {
        users.push(userPool[Math.floor(Math.random() * Math.floor(userPool.length))]);
        count--;
    }

    return users;
}
