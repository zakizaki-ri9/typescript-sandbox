module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
    description: "Hello Gatsby",
  },
  plugins: [
    "gatsby-plugin-typegen",
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop"],
        options: {
          emitWarning: true,
          failOnError: true,
        },
      },
    },
  ],
};
