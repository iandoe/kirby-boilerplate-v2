var assets = 'assets/',
    site   = 'site/'

module.exports = {

  assets: {
    sass:   assets + 'sass',
    css:    assets + 'css',
    js:     assets + 'js',
    img:    assets + 'img',
    svg:    assets + 'svg',
    fonts:  assets + 'fonts'
  },

  watch: {
    scss: assets + 'sass/**/*.scss',
    js: [
      assets + '/js/main.js',
      assets + '/js/modules/*.js'
    ],
    jsplugins: assets + 'js/libs/*.js',
    svgo: assets + 'svg/**/*.svg'
  },

  browserSync: {
    domain: '.loc',
  },

  scss: {
    src: assets + 'sass/style.scss',
    dest: assets + 'css'
  },

  js: {
    src: assets + 'js/main.js',
    dest: assets + 'js'
  },

  jsplugins: {
    src: assets + 'js/libs/*.js',
    dest: assets + 'js'
  },

  imagemin: {
    src: assets + 'img/src/*',
    dest: assets + 'img',

    level: 5,
    progressive: true,
    interlace: true
  },

  svgo: {
    src: assets + 'svg/**/*.svg',
    dest: assets + 'svg'
  },

  svgstore: {
    src: assets + 'svg/sprites/*.svg',
    dest: site + 'snippets'
  },

};