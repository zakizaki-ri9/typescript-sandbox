type initFacebookParam = {
  appId: string;
  autoLogAppEvents: boolean;
  xfbml: boolean;
  version: string; // https://developers.facebook.com/docs/graph-api/changelog
};

// https://developers.facebook.com/docs/reference/javascript/FB.getAuthResponse
type authResponse = {
  accessToken: string;
  expiresIn: string;
  reauthorize_required_in: string;
  signedRequest: string;
  userID: string;
};

interface LoginStatusResponse {
  status: "connected" | "not_authorized" | "unknown";
  authResponse: authResponse;
}

interface Facebook {
  // https://developers.facebook.com/docs/javascript/reference/FB.init/v8.0
  init(param: initFacebookParam): void;

  // https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus
  getLoginStatus(callback: (response: LoginStatusResponse) => void): void;

  // https://developers.facebook.com/docs/reference/javascript/FB.login/v8.0
  login(callback: any): void;

  // https://developers.facebook.com/docs/reference/javascript/FB.logout/v8.0
  logout(callback: any): void;
}

interface Window {
  FB: Facebook;
}
