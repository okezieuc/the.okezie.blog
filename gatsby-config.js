module.exports = {
  siteMetadata: {
    title: `The Okezie Blog`,
    name: `TheOkezieBlog`,
    siteUrl: `https://write.okezie.dev`,
    description: `Latest insights into the Tech and Math world and the various tools available to use in development and problem solving`,
    hero: {
      heading: `The Okezie Blog, read on my discoveries while learning and building things.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/okezieuc`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/okeziechiedozie`,
      },
      {
        name: `linkedin`,
        url: `https://linkedin.com/in/okezie-chiedozie-a8aa9a177`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Okezie Blog`,
        short_name: `TheOkezieBlog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
