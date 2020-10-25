export class FacebookSdk {
  private FACEBOOK_SCRIPT_ID = "facebook-jssdk";
  private sdkInitialized = false;

  constructor(private locale: string = "en_US") {
    this.load();
  }

  get srcUrl(): string {
    return `//connect.facebook.net/${this.locale}/sdk.js`;
  }

  private validSdkInitialized() {
    if (!this.sdkInitialized) {
      new Error("Sdk is not initialize. Please exec init() function.");
    }
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
    // SDKダウンロード（ダウンロード済みなら何もしないでおわり）
    this.load();

    return new Promise<Facebook>((resolve, reject) => {
      try {
        window.FB.init({
          appId,
          autoLogAppEvents,
          xfbml,
          version
        });
        resolve(window.FB);
        this.sdkInitialized = true;
      } catch (error) {
        reject(error);
        this.sdkInitialized = false;
      }
    });
  }

  // https://developers.facebook.com/docs/reference/javascript/FB.login/v8.0
  getLoginStatus(): LoginStatusResponse | null {
    this.validSdkInitialized();

    let returnResponse: LoginStatusResponse | null = null;
    window.FB.getLoginStatus((response: LoginStatusResponse) => {
      returnResponse = response;
    });
    return returnResponse;
  }

  login(): any {
    this.validSdkInitialized();

    window.FB.login((response: any) => {
      console.log({
        response
      });
    });
  }

  logout(): any {
    this.validSdkInitialized();

    window.FB.logout((response: any) => {
      console.log({
        response
      });
    });
  }
}
