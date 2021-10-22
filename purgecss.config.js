module.exports = {
    content: ['./dist/index.html', './dist/**/*.html', './dist/js/*.js'],
    css: ['./dist/css/*.css'],
    output: ['./dist/css/'],
    keyframes: true,
    variables: true,
    safelist: {
        standard: [/fixed-.*/],
    }
};