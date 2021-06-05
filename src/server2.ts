import express from "express";
const { graphqlHTTP } = require("express-graphql");
import { buildSchema } from "graphql";

type Course = {
  id: number;
  title: string;
  author: string;
  description: string;
  topic: string;
  url: string;
};

// TODO: use resolvers
const schema = buildSchema(`
  type Query {
    course(id: Int!): Course
    courses(topic: String): [Course]
  }
  type Course {
    id: Int
    title: String
    author: String
    description: String
    topic: String
    url: String
  }
`);

const coursesData: Course[] = [
  {
    id: 1,
    title: "The Complete Node.js Developer Course",
    author: "Andrew Mead, Rob Percival",
    description:
      "Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!",
    topic: "Node.js",
    url: "https://codingthesmartway.com/courses/nodejs/",
  },
  {
    id: 2,
    title: "Node.js, Express & MongoDB Dev to Deployment",
    author: "Brad Traversy",
    description:
      "Learn by example building & deploying real-world Node.js applications from absolute scratch",
    topic: "Node.js",
    url: "https://codingthesmartway.com/courses/nodejs-express-mongodb/",
  },
  {
    id: 3,
    title: "JavaScript: Understanding The Weird Parts",
    author: "Anthony Alicea",
    description:
      "An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.",
    topic: "JavaScript",
    url: "https://codingthesmartway.com/courses/understand-javascript/",
  },
];

const getCourseById = (args: Course): Course | undefined => {
  const id = args.id;
  return coursesData.find((c) => c.id === id);
};

const getCoursesByTopic = (args: Course): Course[] => {
  if (args.topic) {
    var topic = args.topic;
    return coursesData.filter((c) => c.topic === topic);
  }

  return coursesData;
};

const root = {
  course: getCourseById,
  courses: getCoursesByTopic,
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
  console.log("Express GraphQL Server2 Now Running On localhost:4000/graphql")
);
