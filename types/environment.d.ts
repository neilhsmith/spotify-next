/* eslint-disable */
namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    NEXTAUTH_URL: string;
    SPOTIFY_ID: string;
    SPOTIFY_SECRET: string;
  }
}
