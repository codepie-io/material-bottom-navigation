let mix = require('laravel-mix').mix;

let env = 'dist/'; //test or src
env = 'docs/'; //test or src

mix.sass('resources/assets/sass/bottom-navigation.scss',env+'css/bottom-navigation.css');