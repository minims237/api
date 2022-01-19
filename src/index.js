const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema.graphql");
const resolvers = require("./resolvers/index");
const { prisma } = require("./generated/prisma-client");
const { makeExecutableSchema } = require("graphql-tools")
const  {
  ApolloServerPluginLandingPageGraphQLPlayground,ApolloServerPluginLandingPageDisabled,
} =require("apollo-server-core");
const schema = new makeExecutableSchema({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground(),
    ApolloServerPluginLandingPageDisabled(),
  ],
});
const server = new ApolloServer({
  schema,
  context: () => ({ prisma }),
  playground: true,
  introspection: true,
});
server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`server is listening at ${url}`);
});
