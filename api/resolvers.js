import uuidv4 from 'uuid/v4';

// Some fake data
const users = [
  {
    id: 'e1ce3612-a526-43d8-a304-509adcb95bd2',
    firstName: 'Les',
    lastName: 'Barchard',
    email: 'les.barchard@gmail.com',
    token: 'sdfsfddsf',
    image: 'https://lh5.googleusercontent.com/-H0IOkBtqLP4/AAAAAAAAAAI/AAAAAAAAAq0/M2OVNW09O8E/s96-c/photo.jpg',
  },
  {
    id: '029c5723-0a58-4720-83a0-4467a1a06239',
    firstName: 'Travis',
    lastName: 'Massey',
    email: 'travis.massey@gmail.com',
    token: '3234234',
    image: 'https://lh6.googleusercontent.com/-i21fCaqZNjA/AAAAAAAAAAI/AAAAAAAAAD0/AYHn7_UQdXA/s92-c-k-no/photo.jpg',
  },
];

export default {
  Query: {
    users: (root, args) => {
      console.log(args.id);
      const user = {
        id: 'e1ce3612-a526-43d8-a304-509adcb95bd2',
        firstName: 'Les',
        lastName: 'Barchard',
        email: 'les.barchard@gmail.com',
        token: 'sdfsfddsf',
        image: 'https://lh5.googleusercontent.com/-H0IOkBtqLP4/AAAAAAAAAAI/AAAAAAAAAq0/M2OVNW09O8E/s96-c/photo.jpg',
      };
      return user;
    },
  },

  Mutation: {
    addUser: (root, args) => {
      const newUser = {
        id: uuidv4(),
        firstName: args.firstName,
        lastName: args.lastName,
        email: args.email,
        token: args.token,
        image: args.image,
      };
      users.push(newUser);
      return newUser;
    },
  },
};
