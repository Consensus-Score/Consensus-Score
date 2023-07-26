## Crypto Bootcamp 用

### デモ

下記コマンドで動かすことができます。
`npm run dev`

[デモ動画はこちらをご覧ください](https://www.youtube.com/watch?v=eYzm8xuT9zE)

### プロジェクトの概要

1. ユーザーがスコアを入力し send -> 準同型暗号により暗号化されたスコアがオンチェーン上にのる

(現在はオンチェーン実装できておらず、verification.js にベタ書き状態)

2. zkSnark で検証しスコアを表出

回路の実行に必要な「検証鍵」「証明鍵」「circom をコンパイルした wasm ファイル」をそれぞれ/public/circuits/配下に配置している。

### どのように作ったか、なんの技術を使った

- circom
- snarkjs
- nextjs

### 技術的に難しかったこと、アピールポイント

ZK 部分は snarkjs ライブラリを使用したが Nextjs 上で動かすことに苦労した

以下やったこと

- node_modules の中にある`snarkjs.min.js` を public フォルダ配下におく
- ./components/layout.js を作成する
- next.config.js の設定を変更する
- ルートに`.babelrc`ファイルを作成する

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
