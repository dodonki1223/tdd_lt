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

### ✏️ 第2回 - 2021年12月11日

- [♻️ 【第4章 意図を語るテスト】オブジェクトの比較に変更](https://github.com/dodonki1223/tdd_lt/commit/a7096e0db3992b90203a67b617b406a667c33ac0)
- [♻️ 【第4章 意図を語るテスト】よりイミュターブルな形にするため amout を private にする](https://github.com/dodonki1223/tdd_lt/commit/9add07509892fd125df4cb42f58606d5d6f37017)
- [✨ 【第5章 原則をあえて破るとき】 重複排除を行わず開発速度重視でフランを追加する](https://github.com/dodonki1223/tdd_lt/commit/9abaafcfc071967483191dff8db2e40b6b3388f8)
- [✨ 【第6章 テスト不足に気づいたら】 Dollar, Franc の重複を排除するためにまずは Money クラスを作成する](https://github.com/dodonki1223/tdd_lt/commit/ce47286cef0dd8b853df7c592758b5d70b08b1b5)
- [✨ 【第6章 テスト不足に気づいたら】 重複コード排除のため Money クラスに equals メソッドを追加する](https://github.com/dodonki1223/tdd_lt/commit/e8384a91d93a1c36f0da0708aa6ea96da73bfa41)
- [✨ 【第7章 疑念をテストに翻訳する】Money から派生した Franc と Dollar は同じはずなのでそれの比較を追加する](https://github.com/dodonki1223/tdd_lt/commit/870259bbd386046b9aa3125b47b322eb57f6bcda)
- [✨ 【第8章 実装を隠す】 times の一般化手前まで実装する](https://github.com/dodonki1223/tdd_lt/commit/76f698980ededd5b6db281be0947409580a271b1)
- [✨ 【第9章 歩幅の調整】 Dollar と Franc のクラスを消すために Currency フィールドを追加する](https://github.com/dodonki1223/tdd_lt/commit/0ce7c6fff2f3338ec7ce0fbcc6f7d4bf5b2dd844)
- [✨ 【第9章 歩幅の調整】 Dollar, Franc が同じものであると判定するためにテストを修正する](https://github.com/dodonki1223/tdd_lt/commit/c5cbe96488c98dd548c17a0ed9e93ba68eaf9521)

### ✏️ 第3回 - 2021年12月18日

- [✨ 【第10章 テストに聞いてみる】 times の一般化のためにまずは currency を追加する](https://github.com/dodonki1223/tdd_lt/commit/3d8d5905e1eef4726ac4ad9a9161983b10c388a1)
- [✨ 【第10章 テストに聞いてみる】 サブクラスたちの times の実装の差異をなくすために times の一般化](https://github.com/dodonki1223/tdd_lt/commit/87cfc55cce33039764b3fb0a60af13e68d6c0811)
- [✨ 【第10章 テストに聞いてみる】エラー時に詳細な情報がだせるように toString メソッドを追加](https://github.com/dodonki1223/tdd_lt/commit/b051685acb811af4e626d52b289ec3befe2966dd)
- [✨ 【第11章 不要になったら消す】 サブクラスがコンストラクタだけしかないので消す](https://github.com/dodonki1223/tdd_lt/commit/f7a5ed85b7ffec84b11f790c3e8ed8df5a6eab8a)
- [✨ 【第12章 設計とメタファー】 `$5 + 5 CHF` を達成するためにまずは簡単な `$5 + $5` の実装から始める](https://github.com/dodonki1223/tdd_lt/commit/f293db00efcae98249122fcf8e26d6b053577146)
- [✨ 【第12章 設計とメタファー】為替の概念を Bank クラスに担わせる](https://github.com/dodonki1223/tdd_lt/commit/325811cb23dc8cdb3eaa8c49318b6732a711b6bf)
- [✨ 【第12章 設計とメタファー】 `$5 + 5 CHF` を実現するため plus メソッドは Expression（式）として返すようにする](https://github.com/dodonki1223/tdd_lt/commit/da1c24cbf6023f0b45edc43d53ef635b08a27089)
- [✨ 【第13章 実装を導くテスト】 計算結果を Sum クラスで返すようにする](https://github.com/dodonki1223/tdd_lt/commit/97175427a082a56d0b11db8e559c11e49928a3c6)
- [✨ 【第13章 実装を導くテスト】 reduce メソッドで為替の変更ができるようにする](https://github.com/dodonki1223/tdd_lt/commit/6b434b2caaae445836ad1a06fdedc4fae007d61b)
