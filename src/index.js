const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { schema } = require("./graphql/schema.js");

const server = new ApolloServer({
  schema,
});


async function startServerAsync() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4001 },
  });

  return url;
}

startServerAsync()
  .then((url) => {
    console.log(`Server started at ${url}`);
  })
  .catch((error) => {
    console.error('Error starting the server:', error);
  });