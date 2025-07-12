import { createAuth0, useAuth0 } from "@auth0/auth0-vue";

let auth0;

export function initAuth0() {
  if (!auth0) {
    auth0 = createAuth0({
      domain: "dev-76xdkh7gv88mcbr5.us.auth0.com",
      clientId: "iSyvYOcef2q8VpjwoUDtRIXVbIcshK2L",
      authorizationParams: {
        // needs to be added to the Allowed Callback URL list!
        redirect_uri: `${window.location.origin}/callback`,
        audience: "vue-3-examples-api",
        scope: "openid profile email",
      },
      cacheLocation: "localstorage",
      useRefreshTokens: true,
    });
  }

  return auth0;
}

export const getAccessToken = async () => {
  const { getAccessTokenSilently } = useAuth0();
  try {
    const accessToken = await getAccessTokenSilently();
    return accessToken;
  } catch (error) {
    console.error("Error obtaining access token:", error);
    throw error;
  }
};
