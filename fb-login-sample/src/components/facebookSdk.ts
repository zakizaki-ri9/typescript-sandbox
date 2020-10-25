export class FacebookSdk {
  private FACEBOOK_SCRIPT_ID = "facebook-jssdk";

  constructor(private locale: string = "en_US") {
    this.load();
  }

  get srcUrl(): string {
    return `//connect.facebook.net/${this.locale}/sdk.js`;
  }

  private load(): void {
    if (document.getElementById(this.FACEBOOK_SCRIPT_ID)) {
      // facebookのsdkが読み込まれていたら終了
      return;
    }

    // sdkを読み込むためのscriptタグを生成
    const scriptElement = document.createElement("script");
    scriptElement.id = this.FACEBOOK_SCRIPT_ID;
    scriptElement.src = this.srcUrl;
    scriptElement.onerror = error => {
      console.error(`${this.srcUrl} load Fail.`);
      new Error(error.toString());
    };

    // headに仕込む
    const head = document.querySelector("head");
    head?.appendChild(scriptElement);
  }

  init(
    appId: string,
    autoLogAppEvents = true,
    xfbml = true,
    version = "v8.0"
  ): Promise<Facebook> {
    return new Promise<Facebook>((resolve, reject) => {
      try {
        window.FB.init({
          appId,
          autoLogAppEvents,
          xfbml,
          version
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
}
