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
    mydidits: async (root, args) => {
      try {
        const mydidit = await
        db.Didits.findAll({
          attributes: [
            'id',
            'comment',
            'image',
            'date',
          ],
          where: {
            userid: args.userId,
          },
        });
        const didits = [];
        mydidit.forEach((didit) => {
          didits.push(didit.dataValues)
        });
        return didits;
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
    addDidit: async (root, args) => {
      try {
        const [result, created] = await db.Didits.findOrCreate({
          where: {
            userId: args.userId,
            date: args.date,
            type: 1,
          },
          defaults: {
            id: uuidv4(),
            userId: args.userId,
            comment: args.comment,
            image: args.image,
            type: 1,
            date: args.date,
          },
        });
        return {
          id: result.id,
          userId: result.userId,
          comment: result.comment,
          image: result.image,
          type: result.type,
          date: result.date,
          created,
        };
      } catch (e) {
        console.log(e)
        return {
          id: '',
          userId: '',
          comment: '',
          image: '',
          date: '',
          created: false,
        };
      }
    },
  },
};
