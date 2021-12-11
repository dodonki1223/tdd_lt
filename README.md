# tdd_lt

[テスト駆動開発](https://www.amazon.co.jp/dp/B077D2L69C/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1) の書籍を元に TypeScript で実装していきテスト駆動開発の素晴らしさを確認していく勉強会です。  
基本的にはコンテナの中で実装をするので Docker が起動できる環境を用意しておいてください。

## 💪 環境構築

```shell
$ docker-compose build
```

## 💻 開発

開発で使用しているコマンドをこちらに記載してきます。

### 💡 コンテナの起動

```shell
$ docker-compose run --rm node
```

### 🤖 コンテナ内で使用するコマンド群

コンテナ内で使用することを想定されているコマンド群です。

#### TypeScript のビルド

```shell
$ yarn run build

# output => ls ./dist
```

#### Jest の実行

```shell
$ yarn run test
```

#### ts-node の実行

```shell
$ yarn run exec
```

## 📖 勉強会履歴

勉強会で行った履歴をこちらにつらつらと記載して起きます

### ✏️ 第1回 - 2021年12月5日

- [✨ 【第1章 仮実装】TODOリストの中で一番簡単に実装できなそうな times メソッドのテストを追加](https://github.com/dodonki1223/tdd_lt/commit/33bbf98f682119792122ae62fb229f5916a1adbc)
- [♻️ 【第1章 仮実装】Dollar クラスを作成しコンパイルエラーを解消する](https://github.com/dodonki1223/tdd_lt/commit/c35c4c3f99fac25d4e3d4bc1d789bcdb3be581ca)
- [♻️ 【第1章 仮実装】テストがまずは通すことを優先して改修する](https://github.com/dodonki1223/tdd_lt/commit/77b7422f8b1b0fa9a2f0b243fe645ab949d4298c)
- [♻️ 【第1章 仮実装】リファクタリングを行い、重複を除去する](https://github.com/dodonki1223/tdd_lt/commit/e321a47cc22adfb5ac14648e71559d4c8932bfc7)
- [🐛 【第2章 明白な実装】Dollar の副作用の確認](https://github.com/dodonki1223/tdd_lt/commit/2a65e8619910ab6656a858fb99b11c5c1d34cb0d)
- [♻️ 【第2章 明白な実装】Dollarの副作用の解消をする①](https://github.com/dodonki1223/tdd_lt/commit/119ae2327b85c4a8d6f2cdaeab40b77de6deb65f) 
- [♻️ 【第2章 明白な実装】Dollarの副作用の解消をする②](https://github.com/dodonki1223/tdd_lt/commit/0570b0f580fd67e655a4af3cc6d7e075a732af30)
- [✨ 【第3章 三角測量】equals メソッドのテストを実装しとりあえずテストが成功するまで実装する](https://github.com/dodonki1223/tdd_lt/commit/cae0187aa790c22a18eec12a156d6f3af82ed998)
- [♻️ 【第3章 三角測量】等値性比較のメソッドを実装](https://github.com/dodonki1223/tdd_lt/commit/e9da67702436db650ba0f8c103331171d93dfec9)
- [✨ 【第3章 三角測量】null との等値性比較のテストを追加](https://github.com/dodonki1223/tdd_lt/commit/c5788d549ffcb28c48d4f9de0aa99742818e3e82)
- [♻️ 【第3章 三角測量】null との等値性比較の実装](https://github.com/dodonki1223/tdd_lt/commit/2b76bae906c49c90c83aaac5a344a752e51665a5)
