// Some fake data
const users = [
  {
		firstName: "Les",
		lastName: "Barchard",
		email: "les.barchard@gmail.com",
		token: "sdfsfddsf",
  },
  {
		firstName: "Travis",
		lastName: "Massey",
		email: "travis.massey@gmail.com",
		token: "3234234",
  },
];

export default {
	Query: { users: () => users },

  Mutation: {
    addUser: (root, args) => {
      const newUser = { firstName: args.firstName, lastName: args.lastName, email: args.email, token: args.token };
      users.push(newUser);
      return newUser;
    },
  },
}