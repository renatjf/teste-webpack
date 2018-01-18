# Testes em Webpack Build React, Sass e Jquery

npm i = install modules

Rodar o projeto = npm start

Build o projeto = webpack -p (instale o webpack global)

# Colorcar essa linha abaixo dentro de plugins no webpack.config.js

---
    new webpack.ProvidePlugin({
    '$': 'jquery/dist/jquery.js',
    'jQuery': 'jquery/dist/jquery.js'
    })

# Criando o vendor.bundle.js
## Vai ser vir para seperar bibliotecas como o Jquery e etc

---
    new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'js/vendor.bundle.js' //separar biblioteca de terceiros (ex: jquery)
    })