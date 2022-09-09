import { connect } from "http2";

export const resolvers = {
  Query: {
    productCategories: async (parent: any, args: any, context: any) => {
      return await context.prisma.productCategory.findMany();
    },
  },
  Mutation: {
    addProductCategory,
    addProductInventory,
    addProduct,
  },
};

async function addProductCategory(parent: any, args: any, context: any) {
  console.log("addLink", args);
  return await context.prisma.productCategory.create({
    data: {
      name: args.name,
      description: args.description,
      image: args.image,
    },
  });
}

async function addProductInventory(parent: any, args: any, context: any) {
  console.log(args);
  return await context.prisma.ProductInventory.create({
    data: {
      quantity: args.quantity,
      product: {
        connect: {
          id: args.productId,
        },
      },
    },
  });
}

async function addProduct(parent: any, args: any, context: any) {
  console.log(args);
  return await context.prisma.product.create({
    data: {
      name: args.name,
      description: args.description,
      images: args.images,
      price: args.price,
      productCategory: {
        connect: {
          id: args.categoryId,
        },
      },
    },
  });
}
