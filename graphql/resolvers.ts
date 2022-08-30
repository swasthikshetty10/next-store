export const resolvers = {
  Query: {
    links: () => [
      {
        id: "rtrdty",
        title: "Google",
        description: "Search the web",
        url: "http://google.com",
        category: "search",
        imageUrl:
          "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
      },
      {
        id: "rtrdty",
        title: "Facebook",
        description: "Social network",
        url: "http://facebook.com",
        category: "social",
        imageUrl: "https://www.facebook.com/images/fb_icon_325x325.png",
      },
    ],
  },
};
