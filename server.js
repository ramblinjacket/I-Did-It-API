import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import cors from 'cors';
import db from './db';

import resolvers from './api/resolvers';
import typeDefs from './api/schema.gql';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();

app.use('*', cors({ origin: [process.env.clientURL, process.env.clientURL2] }));

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

db.sequelize.sync({})
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {});
  });
