export interface RefreshTokenResponse {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
  error?: string;
}
