import express from "express";
const { graphqlHTTP } = require("express-graphql");
import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Query {
    message: String
  }
`);

const root = {
  message: () => "Hello World",
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000, () =>
  console.log("Express GraphQL Server1 Now Running On localhost:4000/graphql")
);
