let mix = require('laravel-mix');
mix.webpackConfig({
    stats: {
        children: true
    }
});
mix.js('src/main.js', 'js/main.js');
mix.less('style.less', 'style.min.css',
    {
        lessOptions: {
            strictMath: false,
        },
    })
    .options({
        processCssUrls: false,
        autoprefixer: {
            browserlist: ['>0.5%', "last 4 versions", "IE 10"]
        }
    });

mix.browserSync({
    https: true,
    ui: false,
    proxy: { target: 'https://localhost/kiosk24/' },
    host: 'https://localhost/kiosk24',
    files: [
        "style.min.css",
        "js/main.js",
        "**/*.php"
    ]
}
);