# ファイル追加

src/server\*.ts

# package.json 修正

```package.json
"main": "dist/server*.js",
```

# 実行

```bash
$ npm run build
$ npm run start
```

http://localhost:4000/graphql

# 参考

https://github.com/graphql/express-graphql
https://dev.classmethod.jp/articles/graphql-tutorial-nodejsexpress/
https://qiita.com/notakaos/items/3bbd2293e2ff286d9f49
