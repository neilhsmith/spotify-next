import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import SpotifyProvider from "next-auth/providers/spotify";
import { refreshAccessToken } from "@lib/spotify";

const CLIENT_ID = process.env.SPOTIFY_ID;
const CLIENT_SECRET = process.env.SPOTIFY_SECRET;

export default NextAuth({
  providers: [
    SpotifyProvider({
      authorization:
        "https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private",
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // user just signed in so setup session
      if (account && user) {
        return {
          access_token: account.access_token,
          expires_at: account.expires_at,
          refresh_token: account.refresh_token,
          scope: account.scope,
          user,
        } as JWT;
      }

      // token isn't expired yet so just return it
      if (Date.now() < token.expires_at) return token;

      // token is expired so try to refresh it
      return updateRefreshToken(token);
    },
    async session({ session, token }) {
      session.user = token.user;
      // TODO: i dont think i need to add the (spotify) accessToken and error to
      // session. all requests to Spotify will go through our API so there's no
      // need for the client to have that info.
      session.accessToken = token.access_token;
      session.error = token.error;

      return session;
    },
  },
});

async function updateRefreshToken(token: JWT) {
  // TODO: handle this in a try/catch. the access token could not be refreshed
  // so the session should be ended and the user logged out
  try {
    const newToken = await refreshAccessToken(token.refresh_token);
    return {
      ...token,
      access_token: newToken.access_token,
      expires_at: token.expires_at + newToken.expires_in,
    };
  } catch (error) {
    return token;
  }
}
