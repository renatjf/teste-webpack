# teste-webpack-build-jquery
Testes em Webpack Build React, Sass e Jquery
_____________________
npm i = install modules

Rodar o projeto = npm start

Build o projeto = webpack -p (instale o webpack global)

#colorcar essa linha abaixo dentro de plugins no webpack.config.js

new webpack.ProvidePlugin({
    '$': 'jquery/dist/jquery.js',
    'jQuery': 'jquery/dist/jquery.js'
})

#criando o vendor.bundle.js
# vai ser vir para seperar bibliotecas como o Jquery e etc

new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'js/vendor.bundle.js' //separar biblioteca de terceiros (ex: jquery)
})
