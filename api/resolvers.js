import uuidv4 from 'uuid/v4';
import db from '../db';

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
          order: [['date', 'ASC'], ['type', 'ASC']],
          attributes: [
            'id',
            'comment',
            'image',
            'date',
            'type',
          ],
          where: {
            userid: args.userId,
          },
        });
        const didits = [];
        mydidit.forEach((didit) => {
          didits.push(didit.dataValues);
        });
        return didits;
      } catch (e) {
        return {
          id: '',
          comment: '',
          image: '',
          date: '',
          type: '',
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
        console.log(e)
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
            type: args.type,
          },
          defaults: {
            id: uuidv4(),
            userId: args.userId,
            comment: args.comment,
            image: args.image,
            type: args.type,
            date: args.date,
          },
        });
        const msg = {
          to: 'les.barchard@gmail.com',
          from: 'test@example.com',
          subject: 'I Did It',
          text: 'I got my goal done today!  You should too!',
          html: '<strong>I got my goal done today!  You should too!</strong>',
        };
        sgMail.send(msg);
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
