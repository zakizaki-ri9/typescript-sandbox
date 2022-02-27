import { ApolloServer, gql } from "apollo-server"

type Book = {
  title: string
  author: string
}

const books: Book[] = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
]

const server = new ApolloServer({
  typeDefs: gql`
    type Book {
      title: String
      author: String
    }
    type Query {
      books: [Book]
    }
  `,
  resolvers: {
    Query: {
      books: () => books,
    },
  },
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
