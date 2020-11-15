Facebookログイン〜Instagram Graph API実行までの検証

---

## 動作確認

```bash
# インストール
yarn install

# 起動
yarn serve
```

## ハンズオン手順

Facebook JavaScript SDKを用いて、Facebookログイン〜Instagram Graph API実行の手順を記載する。

ほぼ、Facebook for Developersページに記載されている[Instagram Graph APIスタートガイド](https://developers.facebook.com/docs/instagram-api/getting-started?locale=ja_JP)と同じ。

異なる点は以下。

- 事前準備の記載
- 長期トークンの取得

### 前提

- Facebook JavaScript SDK `v8.0`
- Instagram Graph API `v9.0`

※両方とも、叩いているホスト`graph.facebook.com`は同じなので、`v9.0`でいいかも

### 事前準備

- [ ] Facebookアカウント（開発用）の用意
- [ ] Instagramビジネス（プロ）アカウントの作成 or 変換
- [ ] Facebookページの作成
- [ ] FacebookページとInstagramビジネスアカウントのリンク設定
- [ ] Facebook DeveloperページからInstagram Graph APIの実行許可

### Facebookログイン〜Instagram Graph API実行の手順

#### Step1 Facebook JavaScript SDKの初期化

Facebook JavaScript SDKをCDN経由でダウンロードし、`FB.init`を用いてSDKを初期化する。

https://developers.facebook.com/docs/javascript/quickstart
https://developers.facebook.com/docs/javascript/reference/FB.init/v9.0

**実装箇所**

https://github.com/zakizaki-ri9/typescript-sandbox/blob/04b39bec53ff0eece6ea1c6f88c326e984ca69d5/fb-login-sample/src/components/FacebookLoginForm.vue#L67-L78

#### Step2 Facebookログイン

`FB.login`を用いて、Facebookアカウントへログインする。

https://developers.facebook.com/docs/reference/javascript/FB.login/v9.0

[スタートガイド](https://developers.facebook.com/docs/instagram-api/getting-started?locale=ja_JP)に記載されている通り、パラメーターには以下の`permission`を指定すること。

- instagram_basic
- pages_show_list

**実装箇所**

https://github.com/zakizaki-ri9/typescript-sandbox/blob/04b39bec53ff0eece6ea1c6f88c326e984ca69d5/fb-login-sample/src/components/FacebookLoginForm.vue#L79-L93

#### （Optional）Step3 長期トークンの取得

Step2で取得したトークンの期限は短い。60日間アクセス可能な、長期アクセストークンに変換・取得する。

https://developers.facebook.com/docs/facebook-login/access-tokens/refreshing?locale=ja_JP

**実装箇所**

https://github.com/zakizaki-ri9/typescript-sandbox/blob/04b39bec53ff0eece6ea1c6f88c326e984ca69d5/fb-login-sample/src/components/FacebookLoginForm.vue#L105-L122

#### Step4 Facebook Page IDの取得

`/me/accounts?access_token={access_token}`で、Facebook Page IDを取得。

https://developers.facebook.com/docs/graph-api/reference/user/accounts/

**実装箇所**

https://github.com/zakizaki-ri9/typescript-sandbox/blob/04b39bec53ff0eece6ea1c6f88c326e984ca69d5/fb-login-sample/src/components/FacebookLoginForm.vue#L125-L139

#### Step5 Instagram Business IDの取得

`/{page-id}?fields=instagram_business_account`で、Instagram Business IDを取得。

https://developers.facebook.com/docs/instagram-api/reference/page?locale=ja_JP

**実装箇所**

https://github.com/zakizaki-ri9/typescript-sandbox/blob/04b39bec53ff0eece6ea1c6f88c326e984ca69d5/fb-login-sample/src/components/FacebookLoginForm.vue#L142-L158

#### Step6 Instagram Mediaの取得（Instagram Graph APIの実行）

`/{ig-media-id}?fields={fields}`で、Instagram Business IDを取得。

https://developers.facebook.com/docs/instagram-api/reference/media

※`{ig-media-id}`にStep5で取得したInstagram Business IDを指定しても取得できたけど、どこに仕様書いてあるんだろ...

**実装箇所**

https://github.com/zakizaki-ri9/typescript-sandbox/blob/04b39bec53ff0eece6ea1c6f88c326e984ca69d5/fb-login-sample/src/components/FacebookLoginForm.vue#L161-L180

## 参考リソース

- Facebook系
  - Facebook JavaScript SDK - https://developers.facebook.com/docs/javascript/quickstart
  - 手動でログインフローを構築 - https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow
    - ちょっと辛そうだから、SDKのほうがいいかも
- ライブラリ
  - [vue-facebook-login-component](https://github.com/adi518/vue-facebook-login-component)
