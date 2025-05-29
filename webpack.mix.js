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
            plugins: [
                // Autoprefixer plugin for Less
                new (require('less-plugin-autoprefix'))({ browsers: ['>= 0.01%'] })
            ],
        },
    })
    .options({
        processCssUrls: false,
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