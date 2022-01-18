const path = require('path');
// importuję bibliotękę [path] z [node.js]
const HtmlWebpackPlugin = require('html-webpack-plugin');
// importuję odpowiedni plugin
module.exports = {
    entry: './src/app.js',
    // definiuje plik wejściowy
    output: {
        path: path.resolve(__dirname, 'build'),
        // definiuje ścieżką wyjściową
        filename: 'app.min.js',
        // definiuję nazwę pliku wyjściowego
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                // określam jakie pliki 
                // będą brane pod uwagę
                exclude: /node_modules/,
                // określam wykluczenia
                use: 'babel-loader',
                // określam jaki [loader]
                // ma być wykorzystany
            },
            {
                test: /\.css$/,
                // tylko pliki z rozszerzeniem .css
                exclude: /node_modules/,
                // wykluczam pliki zwierającą 
                // wpisany ciąg znaków w ścieżce
                use: ['style-loader', 'css-loader'],
                // określam kolejność wykorzystanych 
                // loader-ów tj. od lewej do prawej

            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                // dodaję rozszerzenia obrazów
                use: 'file-loader',
                // tym razem tylko jeden loader
            },
            {
                test: /\.(ttf|otf|woff|woff2)$/,
                // dodaję rozszerzenia obrazów
                use: 'file-loader',
                // tym razem tylko jeden loader
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // wskazuje plik źródłowy
            filename: 'index.html'
            // określan nazwę dla pliku
        })
    ]
}
// eksportuję ustawienia dla webpack-a