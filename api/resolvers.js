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
          created: false,
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
          created: false,
        };
      }
    },
  },

  Mutation: {
    addUser: async (root, args) => {
      try {
        const [result, created] = await db.Users.findOrCreate({
          where: {
            token: args.email,
          },
          defaults: {
            id: uuidv4(),
            firstName: args.firstName,
            lastName: args.lastName,
            email: args.email,
            image: args.image,
          },
        });
        return {
          id: result.id,
          firstName: result.firstName,
          lastName: result.lastName,
          email: result.email,
          token: result.token,
          image: result.image,
          created: created,
        };
      } catch (e) {
        return {
          id: '',
          firstName: '',
          lastName: '',
          email: '',
          token: '',
          image: '',
          created: false,
        };
      }
    },
  },
};
