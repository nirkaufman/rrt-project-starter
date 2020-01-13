import axios, {Method} from 'axios';

const API_URL = 'http://localhost:8000';

const DEFAULT_HEADERS = {
  "content-type": "application/json"
};

export const LOCAL_STORAGE_KEY = "USER:TOKEN";

// for each API request - add the access token
// to the header
axios.interceptors.request.use(
    config => {
      const {accessToken} = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) as string) || {};

      Object.assign(config.headers.common, {
        Authorization: `Bearer ${accessToken}`
      });

      return config;
    },
    error => Promise.reject(error)
);

// helper method for API requests using axios
export async function apiRequest({ path = '', method = "GET", data = null}) {
  try {
    return await axios({
      url: API_URL + path,
      method: method as Method,
      data: data || {},
      headers: DEFAULT_HEADERS
    });
  } catch (error) {
    return error;
  }
}
