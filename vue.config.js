module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/dist/' : '/',
  // devServer: {
  //   overlay: {
  //     warnings: true,
  //     errors: false,
  //   },
  // },
  // lintOnSave: process.env.NODE_ENV !== 'production',
};
