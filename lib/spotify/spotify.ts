import { api } from "@lib/api";
import type { RefreshTokenResponse } from "./spotify.types";

//const ME_ENDPOINT = "https://api.spotify.com/v1/me";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
//const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/playlists";

const SPOTIFY_ID = process.env.SPOTIFY_ID;
const SPOTIFY_SECRET = process.env.SPOTIFY_SECRET;

/**
 * Attempts to fetch a new access token from Spotify using the provided
 * refreshToken. Returns a Promise<RefreshToken> instead of the actual
 * RefreshToken so that next-auth can handle cases where the access token fails
 * to refresh.
 *
 * next-auth handles the majority of authenticating with Spotify. We only need
 * to provide a mechanism to refresh expired access tokens. This funtion simply
 * fetches a new token. Connecting this new token to next-auth is handled
 * elsewhere.
 * @param refreshToken
 * @returns Promise<RefreshToken>
 */
export const refreshAccessToken = async (
  refreshToken: string
): Promise<RefreshTokenResponse> => {
  const response = await api.request<RefreshTokenResponse>(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(`${SPOTIFY_ID}:${SPOTIFY_SECRET}`).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      client_id: SPOTIFY_ID,
    }),
  });

  if (response.error) throw response.error;

  return response;
};
