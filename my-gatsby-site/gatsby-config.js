module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
    description: "Hello Gatsby",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-typegen",
      options: {
        outputPath: `@types/gatsby-types.d.ts`,
      },
    },
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
