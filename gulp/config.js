var assets = 'assets/',
    site   = 'site/';

module.exports = {

  assets: {
    sass:   assets + 'sass',
    css:    assets + 'css',
    js:     assets + 'js',
    jslibs: assets + 'js/*.js',
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
    jslibs: assets + '/js/libs/*.js',
    img: assets + 'img/*',
    svgo: assets + 'svg/**/*.svg',
    php: site + '**/*.php'
  },

  browserSync: {
    domain: '.dev'
  },

  scss: {
    src: assets + 'sass/style.scss',
    dest: assets + 'css'
  },

  js: {
    src: assets + 'js/main.js',
    dest: assets + 'js/dist',

    debug: true
  },

  jslibs: {
    src: assets + 'js/libs/*.js',
    dest: assets + 'js/dist'
  },

  imagemin: {
    src: assets + 'img/src/*',
    dest: assets + 'img',

    level: 5,
    progressive: true,
    interlace: true
  },

  svgo: {
    src: [assets + 'svg/**/*.svg', '!' + assets + 'svg/**/*_noop.svg'],
    dest: assets + 'svg'
  },

  svgstore: {
    src: assets + 'svg/sprites',
    dest: site + 'snippets/svg'
  }

};
