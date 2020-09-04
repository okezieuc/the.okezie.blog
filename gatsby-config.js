module.exports = {
  siteMetadata: {
    title: `The Okezie Blog`,
    name: `The Okezie Blog`,
    siteUrl: `https://blog.okezie.dev`,
    description: `Latest insights into the Tech and Math world and the various tools available to use in development and problem solving`,
    hero: {
      heading: `We do three things: Learn, Build, Repeat!`,
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
		{
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-170162755-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/unpublished/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        //experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        //variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        //cookieDomain: "example.com",
      },
    },
		{
			resolve: `gatsby-plugin-sitemap`,
		},
		{
			resolve: `gatsby-plugin-offline`,
			options: {
				precachePages: [`/authors/*`],
			},
		},
  ],
};
