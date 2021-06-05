# ファイル追加

src/server\*.ts

modify package.json

```package.json
"main": "dist/server\*.js",
```

```bash
$ npm run build
$ npm run start
```

# リクエスト

http://localhost:4000/graphql

# 参考

https://github.com/graphql/express-graphql
https://dev.classmethod.jp/articles/graphql-tutorial-nodejsexpress/
https://qiita.com/notakaos/items/3bbd2293e2ff286d9f49
