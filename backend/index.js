const { ApolloServer } = require("apollo-server")
const mongoose = require('mongoose');
const resolvers = require("./Graphql/Resolver");
const typeDefs = require("./Graphql/Query");
require('dotenv').config()

const URL = process.env.MONGODB_URL

mongoose.connect(URL, () => console.log("DB connected"));

(async () => {
    const appolloserver = new ApolloServer({
        resolvers: resolvers,
        typeDefs: typeDefs
    })
    appolloserver.listen(4000, () => console.log("server has started"))
})()




