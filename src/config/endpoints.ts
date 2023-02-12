// Endpoints
export const SERVER_API = "http://localhost:3000";
export const SPOTIFY_API = "https://api.spotify.com/v1";

/**
 * GET - get authorization token
 * @needs code
 */
export const GET_TOKEN = "/api/getAuthToken";

/**
 * POST - send refresh token and receive new authorization token
 * @needs refresh token
 */
export const REFRESH_TOKEN = "/api/refreshToken";

/**
 * GET - get user data
 * @needs auth token
 */

export const GET_USER_DATA = "/me";

/**
 * GET - get user top artists or tracks
 * @needs auth token
 */

export const GET_USER_TOP_ITEMS = "/me/top";
