interface FacebookInitParameter {
  appId: string;
  autoLogAppEvents: boolean;
  xfbml: boolean;
  version: string; // https://developers.facebook.com/docs/graph-api/changelog
}

// https://developers.facebook.com/docs/reference/javascript/FB.getAuthReponse
interface AuthReponse {
  accessToken: string;
  data_access_expiration_time: number;
  expiresIn: number;
  graphDomain: string;
  signedRequest: string;
  userID: string;
  // reauthorize_required_in: string; // V8.0では消えてるっぽい...？
}

interface FacebookCallbackResponse {
  status: "connected" | "not_authorized" | "unknown";
  authReponse: AuthReponse;
}

interface Facebook {
  // https://developers.facebook.com/docs/javascript/reference/FB.init/v8.0
  init(param: FacebookInitParameter): void;

  // https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus
  getLoginStatus(callback: (response: FacebookCallbackResponse) => void): void;

  // https://developers.facebook.com/docs/reference/javascript/FB.login/v8.0
  login(callback: any): void;

  // https://developers.facebook.com/docs/reference/javascript/FB.logout/v8.0
  logout(callback: any): void;
}

interface Window {
  FB: Facebook;
}
