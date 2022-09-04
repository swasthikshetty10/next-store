export const resolvers = {
  Query: {
    productCategories: async (parent: any, args: any, context: any) => {
      return await context.prisma.productCategory.findMany();
    },
  },
  Mutation: {
    addProductCategory: async (parent: any, args: any, context: any) => {
      console.log("addLink", args);
      return await context.prisma.productCategory.create({
        data: {
          name: args.name,
          description: args.description,
          image: args.image,
        },
      });
    },
  },
};
