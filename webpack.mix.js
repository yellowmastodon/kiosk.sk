let mix = require('laravel-mix');
mix.webpackConfig({
    stats: {
        children: true
    }
});
mix.js('src/js/main.js', 'js/main.js');
mix.js('src/js/inlineOnload-poster.js', 'js/inlineOnload-poster.js');

mix.less('src/less/style.less', 'style.min.css',
    {
        lessOptions: {
            strictMath: false,
        },
    })
    .options({
        processCssUrls: false,
        autoprefixer: {
            browserlist: ['>0.5%', "last 5 versions"]
        }
    });

mix.browserSync({
    https: true,
    ui: false,
    proxy: { target: 'kiosk.test' },
    host: 'kiosk.test',
    open: 'external',
    files: [
        "./style.min.css",
        "./js/main.js",
        "**/*.php"
    ]
}
);