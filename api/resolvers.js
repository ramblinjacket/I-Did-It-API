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
        console.log(user);
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
    mydidits: async (root, args) => {
      try {
        const mydidit = await
        db.Didits.findOne({
          attributes: [
            'Id',
            'UserId',
            'Comment',
            'Image',
            'Date',
          ],
          where: {
            userid: args.userId,
          },
        });
        return {
          id: mydidit.dataValues.Id,
          comment: mydidit.dataValues.Comment,
          image: mydidit.dataValues.Image,
          date: mydidit.dataValues.Date,
        };
      } catch (e) {
        return {
          id: '',
          comment: '',
          image: '',
          date: '',
        };
      }
    },
  },

  Mutation: {
    addUser: async (root, args) => {
      try {
        const [result, created] = await db.Users.findOrCreate({
          where: {
            token: args.token,
          },
          defaults: {
            id: uuidv4(),
            firstName: args.firstName,
            lastName: args.lastName,
            token: args.token,
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
          created,
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
