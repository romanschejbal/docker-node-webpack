import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import webpackConfig from './webpack.dev.config.js';

gulp.task('webpack', () => {
  webpack(webpackConfig[1]).watch({}, (err) => {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }
  });
});

gulp.task('webpack-dev-server', () => {
  new WebpackDevServer(webpack(webpackConfig[0]), {
    hot: true,
    inline: true,
    stats: {
      assets: true,
      colors: true,
      version: true,
      hash: true,
      timings: true,
      chunks: true,
      chunkModules: true
    }
  }).listen(webpackConfig[0].devServer.port, '0.0.0.0', (err) => {
    if (err) {
      throw new gutil.PluginError('webpack-dev-server', err);
    }
  });
});

gulp.task('default', ['webpack', 'webpack-dev-server'], () => {

});