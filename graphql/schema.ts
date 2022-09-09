import { gql } from "apollo-server-micro";
export const typeDefs = gql`
  type ProductCategory {
    id: ID!
    name: String!
    description: String
    image: String
  }
  type ProductInventory {
    productId: ID!
    quantity: Int!
  }
  type Product {
    name: String!
    description: String
    images: [String]!
    price: Float
    categoryId: Int
    discountId: Int
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
    addProductInventory(productId: Int, quantity: Int): ProductInventory
    addProduct(
      name: String!
      description: String
      images: [String]
      price: Float
      categoryId: Int
      discountId: Int
    ): Product
  }
`;
