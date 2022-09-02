export const resolvers = {
  Query: {
    links: () => [],
  },
  Mutation: {
    addLink: async (parent: any, args: any, context: any) => {
      console.log("addLink", args);
      const data = await context.prisma.link.create({
        data: {
          title: args.title,
          description: args.description,
          url: args.url,
          category: args.category,
          imageUrl: args.imageUrl,
        },
      });
      return data;
    },
  },
};
