[![Netlify Status](https://api.netlify.com/api/v1/badges/73ae2996-3e5c-4717-8c92-5db9d6e15550/deploy-status)](https://app.netlify.com/sites/imgcalc/deploys)

# imgcalc
アスペクト比から画像サイズを計算するツール

## 開発
### 初期設定
#### パッケージをインストール
```sh
$ npm i
```

または

```sh
$ yarn install
```

#### 設定ファイルを作成
`config.sample.json`ファイルをコピーして`config.json`ファイルを作成します。

```sh
$ cp config.sample.json config.json
```

作成した`config.json`ファイルに以下の内容を入力してください。

|キー|説明|例|
|---|---|---|
|`BASE_DIR`|デプロイ先のベースディレクトリ|`/`|
|`TWITTER_ID`|TwitterのID|`munieru_jp`|
|`OG_IMAGE_PATH`|OGP画像のパス|`favicon-256x256.png`|
|`ORIGIN`|デプロイ先のオリジン|`http://localhost:3000/`|
