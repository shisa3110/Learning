const path = require('path');

module.exports = {
  // アプリの起点となるファイル（エントリーポイント）を指定します。
  // ここから他のモジュールをたどってまとめていきます。
  // 'bundle' は出力ファイル名（後述）に使われます。
  entry: {
    bundle: './src/app.ts'
  },  

  output: {
    // バンドル後のファイルを出力するフォルダとファイル名を指定します。
    // path.join(__dirname, 'dst') は「この設定ファイルがある場所の dst フォルダ」を意味します。
    // filename に [name].js を指定すると、entry のキー（ここでは 'bundle'）がファイル名になります。
    path: path.join(__dirname, 'dst'),
    filename: '[name].js'
  },

  // import 文でファイルの拡張子を省略した場合、探しにいく順番を指定します。
  // 例: import './foo' と書くと、まず foo.ts、次に foo.js を探します。
  resolve: {
    extensions: ['.ts', '.js']
  },

  devServer: {
    // 開発用サーバーが表示するコンテンツのフォルダを指定します。
    // http://localhost:8080 にアクセスしたとき、dst フォルダ内のファイルが表示されます。
    static: {
      directory: path.join(__dirname, "dst"),
    },
  },

  // ファイルごとに適用する処理（ローダー）を設定します。
  // ここでは「.ts ファイルを見つけたら ts-loader（TypeScript用）を使う」という意味です。
  module: {
    rules: [
      {
        test: /\.ts$/,       // 対象ファイル：.ts で終わるもの
        loader: 'ts-loader'  // 使用するローダー：ts-loader（TypeScript を JS に変換）
      }
    ]
  }
}