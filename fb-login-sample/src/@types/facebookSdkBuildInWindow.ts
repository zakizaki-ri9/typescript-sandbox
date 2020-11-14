interface FacebookInitParameter {
  appId: string;
  autoLogAppEvents: boolean;
  xfbml: boolean;
  version: string; // https://developers.facebook.com/docs/graph-api/changelog
}

// https://developers.facebook.com/docs/reference/javascript/FB.getAuthResponse
interface AuthResponse {
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
  authResponse: AuthResponse;
}

interface FacebookMeResponse {
  data?: {
    access_token: string;
    category: string;
    category_list: { id: string; name: string }[];
    id: string;
    name: string;
  }[];
  paging?: {
    cursors: {
      after: string;
      before: string;
    };
  };
}

interface Facebook {
  // https://developers.facebook.com/docs/javascript/reference/FB.init/v8.0
  init(param: FacebookInitParameter): void;

  // https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus
  getLoginStatus(callback: (response: FacebookCallbackResponse) => void): void;

  // https://developers.facebook.com/docs/reference/javascript/FB.login/v8.0
  login(
    callback: (response: FacebookCallbackResponse) => void,
    option?: Record<symbol, any>
  ): void;

  // https://developers.facebook.com/docs/reference/javascript/FB.logout/v8.0
  logout(callback: (response: FacebookCallbackResponse) => void): void;

  // https://developers.facebook.com/docs/javascript/reference/FB.api/
  // FIXME: このへん冗長だからなんとかしたいなぁ...
  api(path: string, callback: (response: Record<symbol, any>) => void): void;
  api(
    path: string,
    method: "get" | "post" | "delete",
    callback: (response: Record<symbol, any>) => void
  ): void;
  api(
    path: string,
    params: Record<symbol, any> | undefined,
    callback: (response: Record<symbol, any>) => void
  ): void;
  api(
    path: string,
    method: "get" | "post" | "delete",
    params: Record<symbol, any> | undefined,
    callback: (response: Record<symbol, any>) => void
  ): void;
}

interface Window {
  FB: Facebook;
}
