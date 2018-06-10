// Some fake data
const users = [
  {
    firstName: 'Les',
    lastName: 'Barchard',
    email: 'les.barchard@gmail.com',
    token: 'sdfsfddsf',
    image: 'https://lh5.googleusercontent.com/-H0IOkBtqLP4/AAAAAAAAAAI/AAAAAAAAAq0/M2OVNW09O8E/s96-c/photo.jpg'
  },
  {
    firstName: 'Travis',
    lastName: 'Massey',
    email: 'travis.massey@gmail.com',
    token: '3234234',
    image: 'https://lh6.googleusercontent.com/-i21fCaqZNjA/AAAAAAAAAAI/AAAAAAAAAD0/AYHn7_UQdXA/s92-c-k-no/photo.jpg'
  },
];

export default {
  Query: {
    users: () => users
  },

  Mutation: {
    addUser: (root, args) => {
      const newUser = { 
        firstName: args.firstName, 
        lastName: args.lastName, 
        email: args.email, 
        token: args.token, 
        image: args.image 
      };
      users.push(newUser);
      return newUser;
    },
  },
};
