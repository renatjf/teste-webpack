# Testes em Webpack Build Html Template

npm i = install modules

Rodar o projeto = npm start

Build o projeto = webpack -p (instale o webpack global)

## Incluir esse modulo dentro de plugins
Repare que o html main esta dentro da pasta templates

Vamos gerar esse html dinamicamente.

---
    new HtmlWebpackPlugin({
      hash: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        removeComments: true
      },
      filename: 'index.html',
      template: __dirname + '/template/main.html'
    }),