module.exports = {
  siteMetadata: {
    title: `Dawid Szczepankowski`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-scroll-reveal",
      options: {
        once: false,
      },
    },
  ],
};
