import {USERS} from './users'

export const POSTS = [
  {
    imageUrl: 'https://i.ibb.co/182bP1y/4k.png',
    user: USERS[0].user,
    likes: 8878,
    caption: 'Train Ride to Hogwarts.',
    profile_picture: USERS[0].image,
    comments: [
      {
        user: 'Jacob',
        comment: 'Wow! This looks awesome!'
      },
      {
        user: 'John',
        comment: 'Nice!'
      },
    ],
  },
  {
    imageUrl: 'https://i.ibb.co/182bP1y/4k.png',
    user: USERS[1].user,
    likes: 1000,
    caption: 'Train Ride to Hogwarts.',
    profile_picture: USERS[1].image,
    comments: [
      {
        user: 'Jacob',
        comment: 'Wow! This looks awesome!'
      },
      {
        user: 'John',
        comment: 'Nice!'
      },
    ],
  },
]