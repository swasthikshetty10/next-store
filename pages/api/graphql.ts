import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { typeDefs } from "../../graphql/schema";
import { resolvers } from "../../graphql/resolvers";
import Cors from "micro-cors";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse } from "http";
import { createContext } from "../../graphql/context";
const cors = Cors();
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: createContext,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({
      settings: {
        "request.credentials": "include",
      },
    }),
  ],
});
const startServers = apolloServer.start();

export default cors(async function handler(
  req: MicroRequest,
  res: ServerResponse
) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServers;
  await apolloServer.createHandler({ path: "/api/graphql" })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
