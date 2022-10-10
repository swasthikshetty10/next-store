import { gql } from "apollo-server-micro";
export const typeDefs = gql`
  type ProductCategory {
    id: ID!
    name: String!
    description: String
    image: String
  }
  type ProductInventory {
    id: ID!
    productId: ID!
    quantity: Int
  }
  type Product {
    id: ID!
    name: String!
    description: String
    images: [String]!
    price: Float
    categoryId: Int
    discountId: Int
    SKU: String
  }
  type Discount {
    id: ID!
    name: String!
    description: String
    discountPercentage: Float!
  }
  type OrderItem {
    id: ID!
    productId: ID!
    quantity: Int
    createdAt: String
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
    addDiscount(
      name: String!
      description: String
      discountPercentage: Float!
    ): Discount
    orderItem(productId: Int!, paymentId: String!): OrderItem
  }
`;
