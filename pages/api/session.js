import auth0 from "../../lib/auth0";

export default async function session(req, res) {
  try {
    console.log("session.js");
    const tokenCache = auth0.tokenCache(req, res);
    console.log("tokenCache", tokenCache);
    const { accessToken } = await tokenCache.getAccessToken();
    console.log("access token? ", accessToken, tokenCache);
    res.status(200).json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message,
    });
  }
}
