import { createAuth0 } from "@auth0/auth0-vue";

let auth0;

export function initAuth0() {
  if (!auth0) {
    auth0 = createAuth0({
      domain: "dev-76xdkh7gv88mcbr5.us.auth0.com",
      clientId: "iSyvYOcef2q8VpjwoUDtRIXVbIcshK2L",
      authorizationParams: {
        // needs to be added to the Allowed Callback URL list!
        redirect_uri: `${window.location.origin}/callback`,
      },
      cacheLocation: "localstorage",
      useRefreshTokens: true,
    });
  }

  return auth0;
}
