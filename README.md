[![Netlify Status](https://api.netlify.com/api/v1/badges/73ae2996-3e5c-4717-8c92-5db9d6e15550/deploy-status)](https://app.netlify.com/sites/imgcalc/deploys)

# imgcalc
Tool for calculating image size from aspect ratio

<img src=".doc/iphone.png" width="300">

## Development
### Install packages
```sh
$ npm i
```

or

```sh
$ yarn install
```

### Create config file
```sh
$ cp config.sample.json config.json
```

Input below values to `config.json`:

|key|description|example|
|---|---|---|
|`BASE_DIR`|base directory to deploy|`/`|
|`TWITTER_ID`|Twitter ID|`munieru_jp`|
|`OG_IMAGE_PATH`|OGP image path|`favicon-256x256.png`|
|`ORIGIN`|origin to deploy|`http://localhost:3000/`|
