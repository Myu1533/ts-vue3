module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: process.env.VUE_APP_DEV_HOST,
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
