import uuidv4 from 'uuid/v4';
import db from '../db';

export default {
  Query: {
    users: async (root, args) => {
      try {
        const user = await
        db.Users.findOne({
          attributes: [
            'Id',
            'FirstName',
            'LastName',
            'Email',
            'Token',
            'Image',
          ],
          where: {
            token: args.token,
          },
        });
        return {
          id: user.dataValues.Id,
          firstName: user.dataValues.FirstName,
          lastName: user.dataValues.LastName,
          email: user.dataValues.Email,
          token: user.dataValues.Token,
          image: user.dataValues.Image,
        };
      } catch (e) {
        return {
          id: '',
          firstName: '',
          lastName: '',
          email: '',
          token: '',
          image: '',
          state: '',
        };
      }
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
