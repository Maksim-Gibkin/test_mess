export const chats = [
    {
        name: 'Conversation',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4uVybGnywRPumMmSPzhUgMrg4NoKQYSgL2A&usqp=CAU'
    },
    {
        name: 'Team chat',
        logo: 'https://yt3.ggpht.com/tB9lEHXZKMuBkaXhVRoLkCe3uY7IAQ4zq7lE1OGM9YjO5gVrdw19tzbjo3VhXqx3nHcWcjNnrC0=s900-c-k-c0x00ffffff-no-rj'
    },
    {
        name: 'Meeting chat',
        logo: 'https://pbs.twimg.com/profile_images/557113569603358720/zxXmZdO7_400x400.jpeg'
    }
]

export const users = [
    {
        id: 0,
        nickname: 'Daisy Fitzroy',
        ava: 'https://pixelbox.ru/wp-content/uploads/2020/11/ava-steam-98.jpg'
    },
    {
        id: 1,
        nickname: 'Me',
        ava: 'https://avatarko.ru/img/kartinka/21/multfilm_pokemon_pikachu_20287.jpg'
    }
]

export const messages = [
    {
        ...users[0],
        date: '12 May, 12:10',
        message: "What's up?",
        isMe: false,

    },
    {
        ...users[1],
        date: '12 May, 12:10',
        message: 'Hi!',
        isMe: true,
    }
]


export const fullDate = () => {
    const date = new Date()
    let arrMth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    return `${date.getUTCDate()} ${arrMth[date.getMonth()]}, ${date.getHours()}:${date.getMinutes()}`;
}
