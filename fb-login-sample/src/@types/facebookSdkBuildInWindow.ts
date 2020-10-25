type initFacebookParam = {
  appId: string;
  autoLogAppEvents: boolean;
  xfbml: boolean;
  version: string;
};

interface Facebook {
  init(param: initFacebookParam): void;
}

interface Window {
  FB: Facebook;
}
