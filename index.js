import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolver";
// const {ApolloServer, gql} = require('apollo-server');


// const typeDefs = gql`
// type Book {
//     title: String
//     author: String
// }

// type Query {
//     books: [Book]
// }
// `;

// const books = [
//     {
//         title: 'The Awakening',
//         author: 'Kate Chopin',
//     },
//     {
//         title: 'City of Glass',
//         author: 'Paul Auster',
//     },
// ];

// const resolvers = {
//     Query: {
//         books: () => books,
//     },
// };

// const server = new ApolloServer({
//     // typeDefs: "graphql/schema.graphql",
//     typeDefs,
//     resolvers
// });

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
});

server.start(() => console.log("Graphql Server Running"));

// server.listen().then(({url}) => {
//     console.log(` Server ready at ${url}`);
// });