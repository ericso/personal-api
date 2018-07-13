const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    name: String
  }
`);

const root = {
  name: () => {
    return 'Eric So';
  },
};

const app = express();
const PORT = process.env.PORT || 4000;

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(PORT);
console.log(`GraphQL API server running at 127.0.0.1:${PORT}/graphql`);
