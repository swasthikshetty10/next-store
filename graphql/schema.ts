import { gql } from "apollo-server-micro";
export const typeDefs = gql`
  type ProductCategory {
    id: ID!
    name: String!
    description: String
    image: String
  }

  type Query {
    productCategories: [ProductCategory]!
  }

  type Mutation {
    addProductCategory(
      name: String!
      description: String
      image: String
    ): ProductCategory
  }
`;
